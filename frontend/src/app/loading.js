import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-matte-black px-6">
      <p className="mb-8 font-serif text-2xl uppercase tracking-[0.2em] gold-text-gradient">
        Aurelia
      </p>
      <Skeleton className="h-px w-48" />
      <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gold-500/60">
        Loading
      </p>
    </div>
  );
}
