# AURELIA — Project Status

> Single source of truth for cross-session progress. Update at the end of every working session.
> Last updated: 2026-10-01

## Stack
- **Frontend:** Next.js 16.2.7 (App Router, Turbopack) · React 19.2.4 · Redux Toolkit 2.12 · Tailwind 4 · framer-motion 12
- **Backend:** Node/Express 4 · Mongoose 8 · JWT (jsonwebtoken) · bcryptjs
- **Layout:** `frontend/` and `backend/` as independent npm packages. `@/*` → `frontend/src/*` (jsconfig).

## Baseline Verification
| Check | Command | Status |
|---|---|---|
| Build | `npm run build` (in `frontend/`) | ✅ Pass — 37 routes prerendered |
| Lint | `npm run lint` (in `frontend/`) | ✅ Pass — 0 errors |
| Tests | — | ❌ None exist (no runner configured) |

> ⚠️ `node_modules` was absent from both packages and had to be installed. A fresh clone cannot build until `npm install` is run in each package.

---

## Phase Status

### ✅ Phase 1 — Unblock CI & Fix Data Loss — **COMPLETE**
**Verified:** lint 0 errors, build 37/37 routes.

| # | Fix | File | Detail |
|---|---|---|---|
| 1 | React 19 ref lint error | `frontend/src/redux/provider.js` | Replaced `useRef` + render-time `.current` access with a lazy `useState(makeStore)` initializer. Satisfies the `react-hooks/refs` rule; store is still created exactly once per provider. |
| 2 | Cart-wiping on abandoned checkout | `frontend/src/app/(checkout)/checkout/page.js` | The 1.5s post-order `setTimeout` is now stored in `redirectTimeoutRef` and cleared by a `useEffect` cleanup. Navigating away no longer fires `clearCart()` + `router.push` from an unmounted component. Ref/effect are declared **before** the `items.length === 0` early return to keep hook order valid. |
| 3 | Plaintext credential leaks | `login/`, `signup/`, `forgot-password/`, `reset-password/` (all under `frontend/src/app/(auth)/`) | All 4 `console.log` statements logging form data / emails removed. Login and signup now surface an explicit "not connected yet" error instead of silently doing nothing. Also fixed `reset-password` accepting two empty strings as a match and falsely reporting success. |
| 4 | Backend env template | `backend/.env.example` | Created with `PORT`, `NODE_ENV`, `MONGODB_URI`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `CORS_ORIGIN`, plus optional `API_BASE_URL` / `DEFAULT_TAX_RATE`. Includes a generation command for `JWT_SECRET`. |
| 4b | `.env.example` was gitignored | `backend/.gitignore` | Line 6 ignored `.env.example`, so the new template would never have been committed. Removed that entry; verified trackable via `git check-ignore`. |
| 5 | Lint/build gate | 7 files escaped | `login`, `verify-email`, `about`, `BrandStory`, `Social` — `react/no-unescaped-entities` fixed with `&apos;` / `&ldquo;` / `&rdquo;` / `&mdash;`. |

### 🔜 Phase 2 — Establish Identity & Auth Middleware — **NOT STARTED**
No authentication exists in any form today. The backend is complete; the frontend has never called it.

**Backend gaps to add:**
- `GET /auth/me` — no session-restore endpoint exists (`auth.js` has only register/login/refresh/logout)
- `POST /auth/forgot-password` + `POST /auth/reset-password` — two frontend pages have nothing to call
- Wire `CORS_ORIGIN` into `src/app.js:10`, which currently calls bare `cors()` (any origin allowed)
- `JWT_REFRESH_SECRET` — `src/utils/jwt.js` signs **both** access and refresh tokens with `JWT_SECRET`; split them

**Frontend work:**
1. Create `frontend/middleware.ts` — **none exists anywhere in the repo.** Guard `/account`, `/orders`, `/checkout`, and all of `/wholesale/*`
2. Close the auth bypass at `(auth)/login/page.js:65` ("Wholesale Partner Access" links straight past login)
3. Wire login/signup/forgot/reset via `apiClient` + `createAsyncThunk` against `/api/v1/auth/*`
4. Token storage + refresh-on-401. `authSlice.setCredentials` has **zero dispatch sites**, so `state.auth.token` is permanently `null` and the request interceptor never sends a header. `STORAGE_KEYS.authToken` is declared but never read or written.
5. `attachStoreInterceptors` (`services/api/interceptors.js:33-41`) returns no cleanup → StrictMode double-registers auth headers and duplicate 401 handlers
6. Add logout; no logout control exists in the UI
7. `selectIsAuthenticated` / `selectAuthRole` (`redux/slices/authSlice.js:46-47`) have **zero consumers** — wire them into the new guards
8. Add `x-guest-session-id` header support (`cartController.js:4-14` requires it, 8–128 chars)

### ⏳ Phase 3 — Close the Contract Gap — **NOT STARTED**
- **Blocking:** frontend product IDs are integers (`data/products.js:3`); backend requires Mongo ObjectIds (`cartValidator.js:42-46`). Until reconciled, no cart integration is possible.
- Wire catalog to `GET /products` via `serverFetch` (`lib/fetchers/index.js` exists but has zero call sites)
- Wire cart to backend with guest→user merge-on-login; make server totals authoritative; drop the hardcoded 8% tax at `CartSummary.js:12`
- Wire `POST /orders` + `/orders/my-orders`; add `/orders/[id]`; fix `OrderCard` for `createdAt`/`orderStatus` and guard empty `items` (`OrderCard.js:14` crashes today)
- `constants/api.js` `API_ENDPOINTS` is entirely unimported; its `wholesale` block points at endpoints that don't exist

### ⏳ Phase 4 — Build the B2B / Quotation Domain — **NOT STARTED**
- **No `Quote` model, route, controller, or validator exists on the backend**
- No wholesale backend at all. `DealerApplicationForm.js:20-25` is `console.log` + redirect (now a no-op log-free redirect)
- Quote actions in `QuoteCard.js:61-73` are inert buttons — no create, accept/decline, or PDF/print. No admin surface exists.
- `WHOLESALE_DEALER` is a hardcoded fake dealer shared by every visitor (`data/wholesale/dealer.js:1-10`)
- `/wholesale/register` is orphaned — absent from `constants/routes.js`, linked from nowhere

### ⏳ Phase 5 — Production Hardening — **NOT STARTED**
- No payment provider on either side; backend treats payment as free-text metadata
- Remove raw card data from Redux; `store.js:19` enables devTools outside production
- Fix duplicate layout wrapping: `(auth)/layout.js` + all 5 auth pages, and `(wholesale)/layout.js` + both register pages → doubled Navbar/Footer and nested `<main>`
- `Input.js:12-16` — no `htmlFor`/`id` association, no `aria-invalid`/`role="alert"`
- `ShopModal.js` — no `role="dialog"`, no Escape, no focus trap; backdrop click commits a mode selection. An accessible `Modal.js` exists and is unused.
- `ProductCard.js:62` — actions are hover-only, so keyboard/touch users cannot add to cart
- `next.config.mjs:11-13` redirects `/products/:id` → `/shop`, discarding the slug
- No SEO metadata beyond root layout; no sitemap/robots/JSON-LD
- Fix duplicate `Container` nesting on cart/wishlist/orders/account pages

---

## Known Non-Blocking Warnings
- `next build` warns that the workspace root was inferred as `C:\Users\USER` due to a stray `package-lock.json` one level above the project. Harmless locally; will misbehave in some CI setups. Fix with `turbopack.root` in `next.config.mjs`.
- `frontend/.next/` and `node_modules/` are build artifacts and gitignored.

## Open Questions for the Team
- `Luxury Jewelry Frontend Sdd Blueprint Phasewise.md` is a **PDF** and could not be parsed for spec-vs-implementation diffing. Phase 1 scope was validated against the audit instead. Someone should read it directly and confirm alignment.
- No test runner is configured. Strongly recommend adding one (Vitest) **before** Phase 3 lands cart/order math, per the audit recommendation.
