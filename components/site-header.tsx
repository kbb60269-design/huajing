"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActive, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-porcelain/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="华井，回到首页">
          <Image
            src="/media/logo.png"
            alt=""
            width={369}
            height={380}
            priority
            className="h-9 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] tracking-[0.22em] text-cinnabar">
              华井
            </span>
            <span className="font-latin mt-1 text-[0.68rem] tracking-[0.32em] text-ink-soft">
              HUA JING
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="主导航">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-[0.14em] transition-colors ${
                  active ? "text-cinnabar" : "text-ink hover:text-cinnabar"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/inquire"
            className="border border-cinnabar px-4 py-2 text-sm tracking-[0.14em] text-cinnabar transition-colors hover:bg-cinnabar hover:text-porcelain"
          >
            咨询
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "关闭菜单" : "打开菜单"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-porcelain px-5 py-4 lg:hidden"
          aria-label="移动导航"
        >
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-b border-line/70 py-3 text-base tracking-[0.12em] ${
                      active ? "text-cinnabar" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/inquire" className="mt-4 block bg-cinnabar py-3 text-center tracking-[0.16em] text-porcelain">
                咨询
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
