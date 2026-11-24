"use client";

import Image from "next/image";
import { useState } from "react";
import { colors, patterns } from "@/lib/catalog";

export function PatternStudio() {
  const [current, setCurrent] = useState<(typeof patterns)[number]["id"]>(patterns[0].id);
  const pattern = patterns.find((item) => item.id === current) ?? patterns[0];

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="flex min-h-[320px] items-center justify-center bg-paper px-6 py-10 md:min-h-[460px]">
        <Image
          key={pattern.src}
          src={pattern.src}
          alt={pattern.alt}
          width={720}
          height={720}
          className="fadein h-auto max-h-[420px] w-auto max-w-full"
        />
      </div>
      <div>
        <div className="flex flex-col gap-2" role="radiogroup" aria-label="选择纹样">
          {patterns.map((item) => {
            const active = item.id === pattern.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setCurrent(item.id)}
                className={`border px-4 py-3 text-left transition-colors ${
                  active ? "border-cinnabar bg-paper" : "border-line hover:border-cinnabar"
                }`}
              >
                <span className="block font-serif text-lg text-ink">{item.name}</span>
                <span className="mt-1 block text-xs tracking-wide text-ink-soft">{item.level}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-2">
        <p className="font-latin text-xs tracking-[0.2em] text-cinnabar">{pattern.level}</p>
        <h2 className="mt-2 font-serif text-3xl text-ink">{pattern.name}</h2>
        <p className="mt-2 text-sm text-ink-soft">{pattern.palette}</p>
        <p className="mt-4 max-w-3xl text-[15px] leading-8">{pattern.use}</p>
      </div>
    </div>
  );
}

export function ColorBoard() {
  const [current, setCurrent] = useState<(typeof colors)[number]["id"]>(colors[0].id);
  const [copied, setCopied] = useState(false);
  const color = colors.find((item) => item.id === current) ?? colors[0];

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(color.hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-5" role="radiogroup" aria-label="标准色">
        {colors.map((item) => {
          const active = item.id === color.id;
          const light = item.id === "porcelain" || item.id === "gold";
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => {
                setCurrent(item.id);
                setCopied(false);
              }}
              className={`px-3 py-8 text-center transition ${active ? "outline outline-2 outline-offset-2 outline-cinnabar" : "hover:opacity-90"}`}
              style={{ background: item.hex, color: light ? "#2A2622" : "#F8F4EC" }}
            >
              <span className="block font-serif text-lg">{item.name}</span>
              <span className="mt-1 block font-latin text-xs tracking-[0.14em]">{item.hex}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col gap-4 border border-line bg-paper p-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink">
            {color.name}
            <span className="ml-3 font-latin text-base tracking-[0.12em] text-ink-soft">{color.hex}</span>
          </p>
          <p className="mt-1 text-sm text-cinnabar">{color.role}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">{color.use}</p>
        </div>
        <button
          type="button"
          onClick={copyHex}
          className="border border-cinnabar px-4 py-2 text-sm text-cinnabar hover:bg-cinnabar hover:text-porcelain"
        >
          {copied ? "已复制色值" : "复制色值"}
        </button>
      </div>
    </div>
  );
}
