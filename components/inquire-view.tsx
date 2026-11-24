"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { InquireForm } from "@/components/inquire-form";
import { PageIntro } from "@/components/page-intro";
import { intentLabel } from "@/lib/catalog";

function InquireBody() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") ?? undefined;
  const known = intentLabel(intent ?? "");

  return (
    <main className="pb-20">
      <PageIntro index="04" title="咨询" en="INQUIRE" kicker="CONTACT">
        告诉华井你在看哪一系列，或是否想了解礼赠与到店体验。
        {known ? ` 当前意向：${known}。` : ""}
      </PageIntro>
      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-10 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6 text-sm leading-7 text-ink-soft">
          <p>传播语在这里保持与器物一致：花序是「繁花入席，茶韵成章」，花间是「一器留白，花韵入茶」，花素是「一花一盏，静享茶时」。</p>
          <p>手册中的门店是空间方向的示意，没有街道地址。到店体验可以先留下意向。</p>
          <p className="font-serif text-2xl leading-snug text-ink">以花为纹，以器载美。</p>
        </aside>
        <InquireForm initialIntent={intent} />
      </section>
    </main>
  );
}

export function InquireView() {
  return (
    <Suspense
      fallback={
        <main className="pb-20">
          <PageIntro index="04" title="咨询" en="INQUIRE" kicker="CONTACT">
            告诉华井你在看哪一系列，或是否想了解礼赠与到店体验。
          </PageIntro>
        </main>
      }
    >
      <InquireBody />
    </Suspense>
  );
}
