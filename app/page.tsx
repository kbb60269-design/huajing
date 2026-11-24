import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { seriesList } from "@/lib/catalog";

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">COLLECTIONS</p>
            <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">三系列，一条花的线索</h2>
          </div>
          <Link href="/collections" className="hidden text-sm text-cinnabar hover:text-cinnabar-deep sm:inline">
            全部器物
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {seriesList.map((item) => {
            const image = item.groups[0].images[0];
            return (
              <li key={item.slug}>
                <Link href={`/collections/${item.slug}`} className="group block border border-line bg-paper hover:border-cinnabar">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-t border-line p-5">
                    <p className="font-latin text-[0.68rem] tracking-[0.2em] text-ink-soft">{item.en}</p>
                    <h3 className="mt-2 font-serif text-2xl group-hover:text-cinnabar">{item.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.product}</p>
                    <p className="mt-3 font-serif text-lg text-ink">{item.slogan}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-line bg-porcelain-deep">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">STORY</p>
            <h2 className="mt-3 font-serif text-4xl leading-snug text-ink">花开于壁，韵留于器。</h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 lg:col-span-7">
            <p>
              敦煌之美，不只在于色彩的绚烂，也在于花纹之间细密而有序的结构。宝相花层层舒展，繁而不乱。华井从这样的纹样里取出花的形态，让它落在当代茶器的轮廓上。
            </p>
            <p>
              从一套完整茶具，到一盏适合独坐的盖碗，再到纹样简洁的主人杯。繁花可以盛放，也可以化作一枚安静的花形。文化不必远观，它可以在每一次举杯之间发生。
            </p>
            <Link href="/story" className="inline-block text-cinnabar hover:text-cinnabar-deep">
              阅读品牌 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div className="flex justify-center bg-paper px-8 py-12">
          <Image
            src="/media/pattern-full.png"
            alt="完整宝相花纹样"
            width={520}
            height={520}
            className="h-auto w-full max-w-sm"
          />
        </div>
        <div>
          <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">BAOXIANG</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">一朵花，三个层级</h2>
          <p className="mt-5 text-[15px] leading-8 text-ink-soft">
            完整纹样用于礼盒与文化主视觉；局部边饰服务包装与页边；简化符号进入主人杯。同一页面只让一朵花成为主角。
          </p>
          <Link href="/pattern" className="mt-6 inline-block text-cinnabar hover:text-cinnabar-deep">
            看纹样系统 →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-8 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="relative aspect-[3/2] bg-paper">
            <Image
              src="/media/store.jpg"
              alt="华井茶器空间：暖木、米白与柔和灯光，门头为朱红标志与华井二字"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">SPACE</p>
          <h2 className="mt-3 font-serif text-3xl leading-snug text-ink md:text-4xl">当代的茶器空间，不以仿古为目标。</h2>
          <p className="mt-4 text-[15px] leading-8 text-ink-soft">
            米白、暖木、柔和灯光。朱红、青蓝与石绿只在局部呼应。产品是空间的核心。
          </p>
          <Link href="/space" className="mt-5 inline-block text-cinnabar hover:text-cinnabar-deep">
            空间分区 →
          </Link>
        </div>
      </section>

      <section className="bg-cinnabar text-porcelain">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
          <div>
            <p className="font-latin text-xs tracking-[0.24em] text-porcelain/80">A CUP OF TIME</p>
            <p className="mt-3 font-serif text-3xl leading-snug md:text-4xl">一器一花，见东方风雅。</p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-porcelain/85">
              一盏茶器承载的不只是茶汤，也是人与时间相处的方式。
            </p>
          </div>
          <Link
            href="/inquire"
            className="inline-flex border border-porcelain px-5 py-3 text-sm tracking-[0.14em] transition-colors hover:bg-porcelain hover:text-cinnabar"
          >
            写下礼赠意向
          </Link>
        </div>
      </section>
    </main>
  );
}
