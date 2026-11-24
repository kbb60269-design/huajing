"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { seriesList } from "@/lib/catalog";

const frames = seriesList.map((series) => ({
  id: series.slug,
  name: series.name,
  product: series.product,
  slogan: series.slogan,
  href: `/collections/${series.slug}`,
  src: series.groups[0].images[0].src,
  alt: series.groups[0].images[0].alt,
}));

export function HomeHero() {
  const [current, setCurrent] = useState(frames[0].id);
  const frame = frames.find((item) => item.id === current) ?? frames[0];

  return (
    <section className="mx-auto grid max-w-[1180px] items-end gap-10 px-5 pt-12 pb-8 md:px-8 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-20">
      <div className="lg:col-span-5">
        <p className="rise font-latin text-xs tracking-[0.28em] text-ink-soft">HUA JING · 东方茶器</p>
        <div className="rise mt-6" style={{ animationDelay: "80ms" }}>
          <Image src="/media/logo.png" alt="" width={369} height={380} priority className="h-16 w-auto" />
        </div>
        <h1 className="rise mt-6 font-serif text-6xl tracking-[0.18em] text-cinnabar md:text-7xl" style={{ animationDelay: "140ms" }}>
          华井
        </h1>
        <p className="rise mt-6 font-serif text-3xl leading-snug text-ink md:text-4xl" style={{ animationDelay: "200ms" }}>
          让敦煌花韵，
          <br />
          在一盏茶中延续。
        </p>
        <p className="rise mt-5 max-w-md text-[15px] leading-8 text-ink-soft" style={{ animationDelay: "260ms" }}>
          以敦煌宝相花纹样为文化灵感，以当代茶器为表达载体。以花为纹，以器载美。
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
          <Link
            href="/collections"
            className="bg-cinnabar px-5 py-3 text-sm tracking-[0.14em] text-porcelain transition-colors hover:bg-cinnabar-deep"
          >
            浏览器物
          </Link>
          <Link
            href="/story"
            className="border border-ink/20 bg-paper px-5 py-3 text-sm tracking-[0.14em] text-ink transition-colors hover:border-cinnabar hover:text-cinnabar"
          >
            品牌故事
          </Link>
        </div>
        <div className="rise mt-10" style={{ animationDelay: "380ms" }}>
          <p className="font-latin text-[0.68rem] tracking-[0.22em] text-ink-soft">THREE SERIES</p>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="选择系列">
            {frames.map((item) => {
              const active = item.id === frame.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setCurrent(item.id)}
                  className={`border px-3 py-2 text-sm transition-colors ${
                    active
                      ? "border-cinnabar bg-cinnabar text-porcelain"
                      : "border-line bg-paper text-ink hover:border-cinnabar"
                  }`}
                >
                  {item.name}
                  <span className="ml-2 text-xs opacity-80">{item.product}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-4 font-serif text-lg text-ink">{frame.slogan}</p>
          <Link href={frame.href} className="mt-2 inline-block text-sm text-cinnabar hover:text-cinnabar-deep">
            进入{frame.name}系列
          </Link>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="relative aspect-[5/4] bg-paper">
          <Image
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="fadein object-contain p-3 md:p-6"
          />
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          {frame.name}系列 · {frame.product}
        </p>
      </div>
    </section>
  );
}
