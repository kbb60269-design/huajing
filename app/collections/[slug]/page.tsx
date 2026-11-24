import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ProductView } from "@/components/product-view";
import { seriesBySlug, seriesList } from "@/lib/catalog";

type Params = { slug: string };

export function generateStaticParams() {
  return seriesList.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const series = seriesBySlug(slug);
  if (!series) return {};
  return {
    title: `${series.name} · ${series.product}`,
    description: `${series.slogan}${series.lead}`,
  };
}

export default async function SeriesPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const series = seriesBySlug(slug);
  if (!series) notFound();
  const index = seriesList.findIndex((item) => item.slug === series.slug);
  const previous = seriesList[(index + seriesList.length - 1) % seriesList.length];
  const next = seriesList[(index + 1) % seriesList.length];

  return (
    <main className="pb-20">
      <PageIntro index={series.code} title={`${series.name} · ${series.product}`} en={series.en} kicker={series.en}>
        {series.lead}
      </PageIntro>

      <section className="mx-auto max-w-[1180px] px-5 py-8 md:px-8">
        <ProductView groups={series.groups} />
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-6 md:grid-cols-12 md:px-8">
        <blockquote className="border-l-2 border-cinnabar pl-5 font-serif text-3xl leading-snug text-ink md:col-span-5">
          {series.slogan}
        </blockquote>
        <div className="space-y-4 text-[15px] leading-8 md:col-span-7">
          {series.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-4 px-5 py-6 sm:grid-cols-3 md:px-8">
        {[
          ["角色", series.role],
          ["视觉", series.visual],
          ["定位", series.positioning],
        ].map(([label, value]) => (
          <div key={label} className="border border-line bg-paper p-5">
            <p className="text-xs tracking-[0.16em] text-ink-soft">{label}</p>
            <p className="mt-2 font-serif text-xl">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-4 md:px-8">
        <ul className="max-w-2xl space-y-2 text-[15px] leading-8">
          {series.points.map((point) => (
            <li key={point} className="border-t border-line py-3">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-ink-soft">
          手册尚未给出具体零售价。建议礼赠向的九件套采用较高层级，日常盖碗与主人杯形成入门与复购路径。价格需结合成本、工艺、包装与渠道核算。
        </p>
        <Link
          href={`/inquire?intent=${series.slug}`}
          className="mt-6 inline-block bg-cinnabar px-5 py-3 text-sm tracking-[0.14em] text-porcelain hover:bg-cinnabar-deep"
        >
          询问{series.name}
        </Link>
      </section>

      <nav className="mx-auto mt-12 flex max-w-[1180px] justify-between gap-4 border-t border-line px-5 pt-6 text-sm md:px-8">
        <Link href={`/collections/${previous.slug}`} className="hover:text-cinnabar">
          ← {previous.name}
        </Link>
        <Link href="/collections" className="text-ink-soft hover:text-cinnabar">
          全部器物
        </Link>
        <Link href={`/collections/${next.slug}`} className="hover:text-cinnabar">
          {next.name} →
        </Link>
      </nav>
    </main>
  );
}
