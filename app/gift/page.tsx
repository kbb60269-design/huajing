import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GiftAtelier } from "@/components/gift-atelier";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "礼赠",
  description: "华井的朱红礼盒、米白手提袋、四色小礼盒与宝相花杯垫。包装服务于产品。",
};

const principles = [
  "礼盒强调仪式感与文化完整度，朱红为主色，宝相花对称装饰。",
  "手提袋以标志为核心识别，局部使用宝相花边饰。",
  "小礼盒与系列色彩呼应，顶部刺绣宝相花，加流苏。",
  "所有包装避免过度装饰，保持与产品本身的视觉平衡。",
];

export default function GiftPage() {
  return (
    <main className="pb-20">
      <PageIntro index="03" title="礼赠" en="GIFTING" kicker="PACKAGING">
        四个方向覆盖完整茶席、日常冲泡、个人品饮与礼赠收藏。包装以朱红主礼盒为核心，搭配米白手提袋与四色小礼盒。包装服务于产品，而不是压过产品。
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <div className="relative aspect-[3/2] bg-paper">
          <Image
            src="/media/packaging.jpg"
            alt="朱红礼盒与米白手提袋，两侧为宝相花边饰，中央为华井标志"
            fill
            priority
            sizes="(min-width: 1180px) 1116px, 100vw"
            className="object-contain"
          />
        </div>
        <p className="mt-3 text-sm text-ink-soft">礼盒与手提袋 · 朱红主礼盒，米白手提袋</p>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <GiftAtelier />
      </section>

      <section className="mx-auto mt-16 grid max-w-[1180px] gap-8 px-5 md:grid-cols-2 md:px-8">
        <figure>
          <div className="relative aspect-[4/3] bg-paper">
            <Image src="/media/gift-scene.jpg" alt="九件套、朱红礼盒与茶席布的完整礼赠场景" fill className="object-cover" sizes="50vw" />
          </div>
          <figcaption className="mt-3 text-sm text-ink-soft">完整礼盒场景 · 九件套、礼盒与茶席布</figcaption>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] bg-paper">
            <Image src="/media/card.jpg" alt="朱红名片与米白感谢卡，底部以宝相花收束" fill className="object-contain p-4" sizes="50vw" />
          </div>
          <figcaption className="mt-3 text-sm text-ink-soft">名片与感谢卡 · 朱红与米白，宝相花边饰收束</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14 md:px-8">
        <h2 className="font-serif text-3xl text-ink">包装原则</h2>
        <ol className="mt-6 max-w-2xl space-y-3">
          {principles.map((item, index) => (
            <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-line py-3 text-[15px] leading-7">
              <span className="font-latin text-cinnabar">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-ink-soft">
          现有资料尚未提供具体成本与建议零售价。本阶段先建立九件套、盖碗与主人杯的产品层级。建议礼赠向的九件套采用较高价格带，日常盖碗与主人杯形成入门与复购路径。
        </p>
        <Link href="/inquire?intent=gift" className="mt-6 inline-block text-cinnabar hover:text-cinnabar-deep">
          询问礼赠 →
        </Link>
      </section>
    </main>
  );
}
