import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SpaceZones } from "@/components/space-zones";

export const metadata: Metadata = {
  title: "空间",
  description: "华井的当代敦煌美学茶器体验空间：米白、暖木与柔和灯光，产品是空间的核心。",
};

export default function SpacePage() {
  return (
    <main className="pb-20">
      <PageIntro index="01" title="空间" en="SPACE" kicker="ATELIER">
        当代敦煌美学茶器体验空间。不以复刻敦煌建筑或壁画为目标，而是通过色彩、材质、光线与陈列建立含蓄的文化氛围，让产品成为空间的核心。
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <div className="relative aspect-[3/2] bg-paper">
          <Image
            src="/media/store.jpg"
            alt="华井门店示意：暖木与米白，门头居中为朱红印章标志与华井二字，两侧为宝相花"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1180px) 1116px, 100vw"
          />
        </div>
        <p className="mt-3 text-sm text-ink-soft">空间方向示意 · 暖木、米白、柔和灯光。手册未登记具体门店地址。</p>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <h2 className="font-serif text-3xl text-ink">五个分区</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-8 text-ink-soft">选择一个区域，看它在茶席体验里承担什么。</p>
        <div className="mt-8">
          <SpaceZones />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-serif text-3xl text-ink">材质与灯光</h2>
          <p className="mt-4 text-[15px] leading-8">
            主基调是米白、暖木与柔和灯光，局部呼应朱红、青蓝与石绿。展示台面简洁，背景不与产品纹样竞争。适度留白、重点照明、分层陈列，让每件茶器都能被看清。
          </p>
        </div>
        <div className="border border-line bg-paper p-6">
          <p className="font-serif text-xl text-cinnabar">不做的事</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-soft">
            <li>不用霓虹灯，不用高饱和墙面。</li>
            <li>不做过于繁复的仿古装饰，也不复刻敦煌建筑。</li>
            <li>涉及洞窟、出处与历史信息时，只采用已经核实的资料。此页不编造洞窟编号。</li>
          </ul>
          <Link href="/inquire?intent=visit" className="mt-6 inline-block text-sm text-cinnabar hover:text-cinnabar-deep">
            留下到店意向 →
          </Link>
        </div>
      </section>
    </main>
  );
}
