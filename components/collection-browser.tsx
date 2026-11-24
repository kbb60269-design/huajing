"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { seriesList } from "@/lib/catalog";
import { ChoiceRow } from "@/components/choice-row";

const densities = [
  {
    id: "丰富",
    label: "丰富",
    text: "花序把完整纹样铺进一整席茶具。繁花入席，适合礼赠与品牌形象。",
  },
  {
    id: "留白",
    label: "留白",
    text: "花间把宝相花收在盖面与边饰上。一器留白，适合每天冲泡。",
  },
  {
    id: "克制",
    label: "克制",
    text: "花素只留一枚简化花形。一花一盏，适合个人品饮与搭配。",
  },
] as const;

export function CollectionBrowser() {
  const [density, setDensity] = useState<(typeof densities)[number]["id"]>("丰富");
  const [filter, setFilter] = useState("all");
  const activeDensity = densities.find((item) => item.id === density) ?? densities[0];

  const visible = useMemo(
    () => seriesList.filter((item) => filter === "all" || item.slug === filter),
    [filter],
  );

  return (
    <div>
      <div className="border border-line bg-paper p-5 md:p-7">
        <p className="font-latin text-xs tracking-[0.2em] text-ink-soft">DECORATIVE DEPTH</p>
        <h2 className="mt-2 font-serif text-2xl text-ink">同一朵花，三种浓度</h2>
        <div className="mt-4">
          <ChoiceRow
            label="纹样浓度"
            value={density}
            onChange={(id) => setDensity(id as typeof density)}
            options={densities.map((item) => ({ id: item.id, label: item.label }))}
          />
        </div>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink">{activeDensity.text}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <ChoiceRow
          label="筛选系列"
          value={filter}
          onChange={setFilter}
          options={[
            { id: "all", label: "全部" },
            ...seriesList.map((item) => ({ id: item.slug, label: item.name })),
          ]}
        />
        <p className="text-sm text-ink-soft">{visible.length} 个系列</p>
      </div>

      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {visible.map((item) => {
          const highlighted = item.density === density;
          const image = item.groups[0].images[0];
          return (
            <li key={item.slug}>
              <Link
                href={`/collections/${item.slug}`}
                className={`group block h-full border bg-paper transition-colors ${
                  highlighted ? "border-cinnabar" : "border-line hover:border-cinnabar"
                }`}
              >
                <div className="relative aspect-[5/4] bg-porcelain">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-line p-4">
                  <p className="font-latin text-[0.68rem] tracking-[0.2em] text-ink-soft">
                    {item.code} · {item.en}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink group-hover:text-cinnabar">
                    {item.name}
                    <span className="ml-2 text-base text-ink-soft">{item.product}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{item.slogan}</p>
                  <p className="mt-3 text-xs tracking-wide text-cinnabar">{item.density}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
