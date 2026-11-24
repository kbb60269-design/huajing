"use client";

type Option = { id: string; label: string };

export function ChoiceRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly Option[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.id)}
            className={`border px-3 py-2 text-sm tracking-wide transition-colors ${
              active
                ? "border-cinnabar bg-cinnabar text-porcelain"
                : "border-line bg-paper text-ink hover:border-cinnabar hover:text-cinnabar"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
