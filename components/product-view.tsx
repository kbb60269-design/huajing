"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShotGroup } from "@/lib/catalog";
import { ChoiceRow } from "@/components/choice-row";

export function ProductView({ groups }: { groups: ShotGroup[] }) {
  const [groupId, setGroupId] = useState(groups[0]?.id ?? "");
  const [index, setIndex] = useState(0);
  const group = groups.find((item) => item.id === groupId) ?? groups[0];
  const shot = group.images[Math.min(index, group.images.length - 1)];

  function selectGroup(id: string) {
    setGroupId(id);
    setIndex(0);
  }

  function step(delta: number) {
    setIndex((current) => {
      const next = current + delta;
      if (next < 0) return group.images.length - 1;
      if (next >= group.images.length) return 0;
      return next;
    });
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)]">
      <div>
        <div className="relative aspect-[5/4] bg-paper">
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="fadein object-contain p-3 md:p-8"
            priority
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-sm text-ink-soft">
          <p>{shot.caption}</p>
          {group.images.length > 1 ? (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                className="border border-line px-3 py-1 hover:border-cinnabar hover:text-cinnabar"
                aria-label="上一张"
              >
                上一张
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="border border-line px-3 py-1 hover:border-cinnabar hover:text-cinnabar"
                aria-label="下一张"
              >
                下一张
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="lg:pt-4">
        <p className="font-latin text-xs tracking-[0.2em] text-ink-soft">VARIANT</p>
        <div className="mt-3">
          <ChoiceRow
            label="选择版本"
            value={group.id}
            onChange={selectGroup}
            options={groups.map((item) => ({ id: item.id, label: item.label }))}
          />
        </div>
        <p className="mt-5 text-[15px] leading-8 text-ink">{group.note}</p>
        {group.images.length > 1 ? (
          <div className="mt-5 grid grid-cols-4 gap-2">
            {group.images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-label={image.caption}
                aria-current={imageIndex === index}
                className={`relative aspect-square bg-paper ${
                  imageIndex === index ? "outline outline-1 outline-cinnabar" : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="80px" className="object-contain p-1" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
