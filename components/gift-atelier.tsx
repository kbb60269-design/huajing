"use client";

import Image from "next/image";
import { useState } from "react";
import { boxes, coasters } from "@/lib/catalog";

export function GiftAtelier() {
  const [boxId, setBoxId] = useState<(typeof boxes)[number]["id"]>("cinnabar");
  const [coasterId, setCoasterId] = useState<(typeof coasters)[number]["id"]>(coasters[0].id);
  const box = boxes.find((item) => item.id === boxId) ?? boxes[0];
  const coaster = coasters.find((item) => item.id === coasterId) ?? coasters[0];

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="relative aspect-square bg-paper">
          <Image
            key={box.src}
            src={box.src}
            alt={box.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="fadein object-contain p-6"
          />
        </div>
        <div>
          <p className="font-latin text-xs tracking-[0.2em] text-ink-soft">SERIES GIFT BOX</p>
          <h2 className="mt-2 font-serif text-3xl text-ink">四色小礼盒</h2>
          <p className="mt-4 text-[15px] leading-8 text-ink-soft">
            顶部刺绣宝相花，流苏收束开箱。适用于主人杯单品、小件礼赠或节日限定。色彩与内装的主色调保持协调。
          </p>
          <div className="mt-6 flex flex-wrap gap-3" role="radiogroup" aria-label="小礼盒颜色">
            {boxes.map((item) => {
              const active = item.id === box.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setBoxId(item.id)}
                  className={`flex items-center gap-2 border px-3 py-2 text-sm ${
                    active ? "border-cinnabar" : "border-line hover:border-cinnabar"
                  }`}
                >
                  <span className="h-4 w-4 border border-black/10" style={{ background: item.hex }} />
                  {item.name}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-ink">当前：{box.name}</p>
        </div>
      </section>

      <section className="grid items-center gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div>
          <p className="font-latin text-xs tracking-[0.2em] text-ink-soft">COASTER</p>
          <h2 className="mt-2 font-serif text-3xl text-ink">杯垫</h2>
          <p className="mt-4 text-[15px] leading-8 text-ink-soft">
            宝相花落到每天都能用到的杯垫上。它可以单独使用，也可以放进礼盒。同一页面只突出一枚，避免纹样堆叠。
          </p>
          <div className="mt-5 flex flex-col gap-2" role="radiogroup" aria-label="杯垫纹样">
            {coasters.map((item) => {
              const active = item.id === coaster.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setCoasterId(item.id)}
                  className={`border px-3 py-2 text-left text-sm ${
                    active ? "border-cinnabar bg-paper text-cinnabar" : "border-line hover:border-cinnabar"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-xl bg-paper">
          <Image
            key={coaster.src}
            src={coaster.src}
            alt={coaster.alt}
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="fadein object-contain p-8"
          />
        </div>
      </section>
    </div>
  );
}
