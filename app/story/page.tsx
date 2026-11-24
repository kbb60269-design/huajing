import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { NameGlyphs, PeoplePicker } from "@/components/story-panels";

export const metadata: Metadata = {
  title: "品牌",
  description: "华井的名字、故事、使命与它所面对的人。让敦煌花韵，在一盏茶中延续。",
};

const values = [
  { name: "尊重文化", text: "尊重传统纹样的审美逻辑与文化背景，审慎使用历史信息。" },
  { name: "设计有度", text: "在装饰性与实用性之间取得平衡，让纹样服务于器物。" },
  { name: "日常为本", text: "重视使用体验，让美学真正进入生活。" },
  { name: "持续生长", text: "通过不同系列与场景，建立可以继续延展的品牌语言。" },
];

export default function StoryPage() {
  return (
    <main className="pb-20">
      <PageIntro index="02" title="品牌" en="BRAND" kicker="BRAND">
        让敦煌花韵，在一盏茶中延续。辅助的说法是：以花为纹，以器载美。一器一花，见东方风雅。
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-8">
        <h2 className="font-serif text-3xl text-ink">名字</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink-soft">
          中文品牌名华井，英文 HUA JING，品类是敦煌宝相花灵感的东方茶具与茶生活器物。点开一个字，看它各自承担的意思。
        </p>
        <div className="mt-8">
          <NameGlyphs />
        </div>
        <p className="mt-8 max-w-3xl text-[15px] leading-8">
          「华井」二字相合，形成含蓄而有东方意境的联想：让文化之美汇聚于器，让器物之美滋养日常。英文名称采用中文拼音，保留中文名称的独特性，也让识别在不同场景里连续。
        </p>
      </section>

      <section className="border-y border-line bg-porcelain-deep">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-14 md:px-8 lg:grid-cols-12">
          <h2 className="font-serif text-3xl text-ink lg:col-span-4">花开于壁，韵留于器。</h2>
          <div className="space-y-5 text-[15px] leading-8 lg:col-span-8">
            <p>
              敦煌之美，不只在于色彩的绚烂，也在于花纹之间细密而有序的结构。宝相花层层舒展，花瓣相映，繁而不乱。华井从这样的纹样意象中获得灵感，将花的形态与茶器的轮廓相结合，让传统艺术以更贴近日常的方式延续。
            </p>
            <p>
              从一套完整茶具，到一盏适合独坐品饮的盖碗，再到纹样简洁的主人杯，华井以不同的设计浓度回应不同的茶生活。繁花可以盛放，也可以化作一枚安静的花形符号。
            </p>
            <p>
              华井愿以器为媒，让敦煌花韵进入当代茶席。让每一次注水、冲泡与举杯，都成为与东方美学相遇的片刻。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-5 px-5 py-14 md:grid-cols-2 md:px-8">
        <article className="border border-line bg-paper p-6 md:p-8">
          <p className="font-latin text-xs tracking-[0.2em] text-cinnabar">MISSION</p>
          <h2 className="mt-3 font-serif text-2xl text-ink">品牌使命</h2>
          <p className="mt-4 text-[15px] leading-8">
            以当代茶器为媒介，探索敦煌装饰艺术与现代生活美学的连接方式，让传统文化以可使用、可体验、可分享的形式融入日常。
          </p>
        </article>
        <article className="border border-line bg-paper p-6 md:p-8">
          <p className="font-latin text-xs tracking-[0.2em] text-cinnabar">VISION</p>
          <h2 className="mt-3 font-serif text-2xl text-ink">品牌愿景</h2>
          <p className="mt-4 text-[15px] leading-8">
            成为具有鲜明敦煌文化识别与当代东方审美气质的茶器品牌，让华井成为人们认识敦煌纹样、体验东方茶生活的一扇窗口。
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <h2 className="font-serif text-3xl text-ink">价值观</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <li key={item.name} className="border-t border-cinnabar pt-4">
              <h3 className="font-serif text-xl">{item.name}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14 md:px-8">
        <h2 className="font-serif text-3xl text-ink">所面对的人</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink-soft">
          他们在意茶、东方美学与生活品质。购买不只为了饮茶，也为了器物的审美、文化表达与礼赠。
        </p>
        <div className="mt-8">
          <PeoplePicker />
        </div>
        <p className="mt-8 max-w-3xl text-[15px] leading-8">
          华井服务的是这样一群人：他们在快节奏的生活中，仍愿意为一方茶席、一件器物停下脚步。他们不需要被教育要热爱传统，只需要一件好器，替他们轻轻接住那些被日常冲淡的东方风雅。
        </p>
      </section>
    </main>
  );
}
