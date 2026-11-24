"use client";

import { useState } from "react";
import { people } from "@/lib/catalog";

const glyphs = [
  {
    id: "hua",
    char: "华",
    label: "华彩",
    text: "「华」取中华文化之华彩，也呼应敦煌艺术中繁盛的花卉装饰、丰沛的色彩与深厚的文化积淀。一个字承接文化的绚丽。",
  },
  {
    id: "jing",
    char: "井",
    label: "源泉",
    text: "「井」可引申为源泉、汇聚与滋养，象征茶汤、文化与情感在一方茶席上的相遇。一个字指向日常的滋养。",
  },
] as const;

export function NameGlyphs() {
  const [current, setCurrent] = useState<(typeof glyphs)[number]["id"]>("hua");
  const glyph = glyphs.find((item) => item.id === current) ?? glyphs[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
      <div className="flex gap-3" role="radiogroup" aria-label="品牌名释义">
        {glyphs.map((item) => {
          const active = item.id === glyph.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setCurrent(item.id)}
              className={`grid h-28 w-28 place-items-center border font-serif text-5xl transition-colors ${
                active
                  ? "border-cinnabar bg-cinnabar text-porcelain"
                  : "border-line bg-paper text-cinnabar hover:border-cinnabar"
              }`}
            >
              <span className="sr-only">{item.label}</span>
              {item.char}
            </button>
          );
        })}
      </div>
      <div key={glyph.id} className="fadein">
        <p className="font-latin text-xs tracking-[0.2em] text-cinnabar">{glyph.label}</p>
        <p className="mt-3 max-w-2xl text-[15px] leading-8">{glyph.text}</p>
      </div>
    </div>
  );
}

export function PeoplePicker() {
  const [current, setCurrent] = useState<(typeof people)[number]["id"]>(people[0].id);
  const person = people.find((item) => item.id === current) ?? people[0];

  return (
    <div className="grid gap-4 md:grid-cols-[16rem_minmax(0,1fr)]">
      <div role="radiogroup" aria-label="品牌所服务的人" className="flex flex-col gap-2">
        {people.map((item) => {
          const active = item.id === person.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setCurrent(item.id)}
              className={`border px-4 py-3 text-left ${
                active ? "border-cinnabar bg-paper" : "border-line hover:border-cinnabar"
              }`}
            >
              <span className="font-latin text-xs tracking-[0.16em] text-ink-soft">{item.index}</span>
              <span className="mt-1 block font-serif text-lg">{item.name}</span>
            </button>
          );
        })}
      </div>
      <div key={person.id} className="fadein flex items-end border border-line bg-porcelain-deep p-6 md:p-10">
        <p className="max-w-xl font-serif text-2xl leading-relaxed text-ink md:text-3xl">{person.text}</p>
      </div>
    </div>
  );
}
