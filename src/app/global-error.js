"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050505] text-white">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-4xl font-serif">Aurelia</h1>
          <p className="mb-8 text-gold-100/60">A critical error occurred.</p>
          <button
            type="button"
            onClick={reset}
            className="border border-[#d4af37] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#d4af37]"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
