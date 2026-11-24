"use client";

import { useState } from "react";
import { zones } from "@/lib/catalog";

export function SpaceZones() {
  const [current, setCurrent] = useState<(typeof zones)[number]["id"]>(zones[0].id);
  const zone = zones.find((item) => item.id === current) ?? zones[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <div role="tablist" aria-label="空间分区" className="flex flex-col">
        {zones.map((item, index) => {
          const active = item.id === zone.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={active}
              aria-controls="zone-panel"
              onClick={() => setCurrent(item.id)}
              className={`border-b border-line px-1 py-4 text-left transition-colors ${
                active ? "text-cinnabar" : "text-ink hover:text-cinnabar"
              }`}
            >
              <span className="font-latin mr-3 text-xs tracking-[0.16em] text-ink-soft">0{index + 1}</span>
              <span className="font-serif text-lg">{item.name}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id="zone-panel"
        aria-labelledby={`tab-${zone.id}`}
        className="flex min-h-56 items-end bg-porcelain-deep p-6 md:p-10"
      >
        <div key={zone.id} className="fadein max-w-xl">
          <p className="font-serif text-3xl text-ink">{zone.name}</p>
          <p className="mt-4 text-[15px] leading-8">{zone.text}</p>
        </div>
      </div>
    </div>
  );
}
