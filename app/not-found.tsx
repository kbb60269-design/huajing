import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1180px] flex-col justify-center px-5 py-20 md:px-8">
      <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">这一页不在茶席上。</h1>
      <p className="mt-4 max-w-md text-[15px] leading-8 text-ink-soft">回到器物，或从首页重新开始。</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="bg-cinnabar px-4 py-2 text-sm text-porcelain hover:bg-cinnabar-deep">
          首页
        </Link>
        <Link href="/collections" className="border border-line px-4 py-2 text-sm hover:border-cinnabar hover:text-cinnabar">
          器物
        </Link>
      </div>
    </main>
  );
}
