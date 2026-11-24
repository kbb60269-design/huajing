import type { Metadata } from "next";
import { ColorBoard, PatternStudio } from "@/components/pattern-studio";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "纹样",
  description: "华井宝相花纹样系统：完整纹样、局部边饰与简化符号，以及朱红、瓷白、青蓝、石绿、暖金。",
};

const levels = [
  { name: "完整纹样", text: "强调敦煌装饰的繁盛与秩序。用于礼盒主视觉、海报与文化介绍，需要足够的展示空间。" },
  { name: "局部边饰", text: "服务包装边缘、纸袋侧边与页眉页脚。它是辅助，不与器物争夺视线。" },
  { name: "简化符号", text: "进入主人杯与小尺寸识别。花形仍然可辨，装饰保持克制。" },
];

export default function PatternPage() {
  return (
    <main className="pb-20">
      <PageIntro index="01" title="宝相花" en="BAOXIANG PATTERN" kicker="PATTERN">
        辅助图形从产品纹样中归纳。宝相花作为核心文化母题，在完整纹样、局部边饰与简化符号三个层级里展开，对应不同的装饰浓度。以理性的框架，承载感性的纹样。
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <ul className="grid gap-4 md:grid-cols-3">
          {levels.map((level, index) => (
            <li key={level.name} className="border-t border-cinnabar pt-4">
              <p className="font-latin text-xs tracking-[0.18em] text-ink-soft">0{index + 1}</p>
              <h2 className="mt-2 font-serif text-2xl">{level.name}</h2>
              <p className="mt-2 text-sm leading-7 text-ink-soft">{level.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <PatternStudio />
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 md:px-8">
        <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">COLOR</p>
        <h2 className="mt-2 font-serif text-3xl text-ink">标准色</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink-soft">
          大面积使用瓷白与米白。朱红负责识别与重点。青蓝与石绿区分系列，比例受控。金色只作局部点缀。避免高饱和冲突色、复杂渐变与霓虹。点选色块，可复制色值。
        </p>
        <div className="mt-8">
          <ColorBoard />
        </div>
      </section>
    </main>
  );
}
