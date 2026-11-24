"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { intents, type IntentId, intentLabel } from "@/lib/catalog";

type Errors = Partial<Record<"name" | "contact" | "intent", string>>;

const fieldClass =
  "h-11 rounded-none border-line bg-paper px-3 text-base text-ink shadow-none placeholder:text-ink-soft/70 focus-visible:ring-cinnabar/30 md:text-sm";

export function InquireForm({ initialIntent }: { initialIntent?: string }) {
  const known = intents.some((item) => item.id === initialIntent);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [intent, setIntent] = useState<IntentId | "">(known ? (initialIntent as IntentId) : "");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ name: string; contact: string; intent: string; note: string } | null>(
    null,
  );

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 1) next.name = "请留下称呼。";
    const value = contact.trim();
    const email = value.includes("@");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const phoneOk = /[0-9０-９]{6,}/.test(value.replace(/[\s-]/g, ""));
    if (!value || (email ? !emailOk : !phoneOk)) {
      next.contact = "请留下可用的邮箱或电话。";
    }
    if (!intent) next.intent = "请选择你关心的器物或事宜。";
    return next;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setDone({
      name: name.trim(),
      contact: contact.trim(),
      intent: intentLabel(intent) ?? intent,
      note: note.trim(),
    });
  }

  if (done) {
    return (
      <div className="border border-cinnabar bg-paper p-6 md:p-8" role="status">
        <p className="font-latin text-xs tracking-[0.2em] text-cinnabar">NOTED</p>
        <h2 className="mt-2 font-serif text-3xl text-ink">已记下这份意向。</h2>
        <dl className="mt-6 space-y-3 text-sm leading-7">
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-ink-soft">称呼</dt>
            <dd>{done.name}</dd>
          </div>
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-ink-soft">联络</dt>
            <dd>{done.contact}</dd>
          </div>
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-ink-soft">意向</dt>
            <dd>{done.intent}</dd>
          </div>
          {done.note ? (
            <div className="grid grid-cols-[5rem_1fr] gap-3">
              <dt className="text-ink-soft">附言</dt>
              <dd>{done.note}</dd>
            </div>
          ) : null}
        </dl>
        <p className="mt-6 max-w-xl text-sm leading-7 text-ink-soft">
          品牌手册尚未登记公开信箱与门店地址。此页只在本次浏览中确认你写下的内容，不会把信件发往别处。
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-11 rounded-none border-cinnabar px-5 text-cinnabar hover:bg-cinnabar hover:text-porcelain"
          onClick={() => setDone(null)}
        >
          再写一封
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 border border-line bg-paper p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">称呼</Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
            placeholder="如何称呼你"
          />
          {errors.name ? <p className="text-sm text-cinnabar">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">邮箱或电话</Label>
          <Input
            id="contact"
            name="contact"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.contact)}
            className={fieldClass}
            placeholder="name@example.com"
          />
          {errors.contact ? <p className="text-sm text-cinnabar">{errors.contact}</p> : null}
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">意向</legend>
        <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="意向">
          {intents.map((item) => {
            const active = intent === item.id;
            return (
              <label
                key={item.id}
                className={`flex cursor-pointer items-center gap-3 border px-3 py-3 text-sm transition-colors ${
                  active ? "border-cinnabar bg-porcelain" : "border-line hover:border-cinnabar"
                }`}
              >
                <input
                  type="radio"
                  name="intent"
                  value={item.id}
                  checked={active}
                  onChange={() => setIntent(item.id)}
                  className="accent-[#C23A2B]"
                />
                {item.label}
              </label>
            );
          })}
        </div>
        {errors.intent ? <p className="text-sm text-cinnabar">{errors.intent}</p> : null}
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="note">想说的话</Label>
        <Textarea
          id="note"
          name="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          maxLength={500}
          rows={5}
          className="min-h-32 rounded-none border-line bg-paper px-3 py-3 text-base shadow-none focus-visible:ring-cinnabar/30 md:text-sm"
          placeholder="例如：想为一对新人备一套花序，或想先看看青蓝主人杯。"
        />
        <p className="text-right text-xs text-ink-soft">{note.length}/500</p>
      </div>


      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-6 text-ink-soft">
          手册未提供零售价格。礼赠向的九件套位于较高层级，盖碗与主人杯形成日常路径，具体需按工艺与渠道核算。
        </p>
        <Button
          type="submit"
          className="h-11 rounded-none bg-cinnabar px-6 text-porcelain hover:bg-cinnabar-deep"
        >
          记下这份意向
        </Button>
      </div>
    </form>
  );
}
