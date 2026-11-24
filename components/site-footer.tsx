import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-porcelain">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/media/logo.png" alt="" width={369} height={380} className="h-11 w-auto" />
            <div>
              <p className="font-serif text-2xl tracking-[0.22em] text-cinnabar">华井</p>
              <p className="font-latin text-xs tracking-[0.28em] text-ink-soft">HUA JING</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-ink">
            让敦煌花韵，在一盏茶中延续。
          </p>
          <p className="mt-3 text-sm text-ink-soft">以花为纹，以器载美。</p>
        </div>
        <div>
          <p className="font-latin text-xs tracking-[0.22em] text-ink-soft">VISIT</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-cinnabar">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-latin text-xs tracking-[0.22em] text-ink-soft">NOTE</p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            精致而不繁复，文化而不沉重。价格与门店地址尚未公布，礼赠与到店体验可以先留下意向。
          </p>
          <Link
            href="/inquire"
            className="mt-5 inline-block text-sm tracking-[0.14em] text-cinnabar hover:text-cinnabar-deep"
          >
            写下意向 →
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-4 text-xs tracking-wide text-ink-soft md:flex-row md:justify-between md:px-8">
          <p>华井 · 敦煌宝相花灵感的东方茶具与茶生活器物</p>
          <p className="font-latin tracking-[0.14em]">Clear Days of Culture · Gentle Harmony of Form</p>
        </div>
      </div>
    </footer>
  );
}
