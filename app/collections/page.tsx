import type { Metadata } from "next";
import Link from "next/link";
import { CollectionBrowser } from "@/components/collection-browser";
import { PageIntro } from "@/components/page-intro";
import { seriesList } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "器物",
  description: "华井的三个产品系列：花序九件套、花间盖碗、花素主人杯。",
};

export default function CollectionsPage() {
  return (
    <main className="pb-20">
      <PageIntro index="03" title="器物" en="COLLECTIONS" kicker="PRODUCT">
        三个系列共用宝相花这一条文化线索，装饰浓度、使用场景与性格各不相同。以瓷白为共同底色，青蓝、石绿、朱红、赭色与暖金按系列组合。纹样服从器型，不盖住使用本身。
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <CollectionBrowser />
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <h2 className="font-serif text-2xl text-ink">系列如何被称呼</h2>
        <div className="mt-4 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-porcelain-deep text-ink">
              <tr>
                <th className="px-4 py-3 font-medium">系列</th>
                <th className="px-4 py-3 font-medium">产品角色</th>
                <th className="px-4 py-3 font-medium">视觉</th>
                <th className="px-4 py-3 font-medium">建议定位</th>
              </tr>
            </thead>
            <tbody>
              {seriesList.map((item) => (
                <tr key={item.slug} className="border-t border-line hover:bg-paper">
                  <td className="px-4 py-3">
                    <Link href={`/collections/${item.slug}`} className="text-cinnabar hover:text-cinnabar-deep">
                      {item.name} · {item.product}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{item.role}</td>
                  <td className="px-4 py-3">{item.visual}</td>
                  <td className="px-4 py-3">{item.positioning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
          命名方向：九件套为花序，突出完整茶席与繁盛纹样；盖碗为花间，突出留白与日常茶事；主人杯为花素，突出简化花形与个人品饮。
        </p>
      </section>
    </main>
  );
}
