"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PublicationEntry } from "@/components/publication-entry";
import { Publication } from "@/data/publication";

type Filter = "selected" | "all";

export function PublicationSection({
  publications,
}: {
  publications: Publication[];
}) {
  const hasSelected = publications.some((p) => p.selected);
  const [filter, setFilter] = useState<Filter>(hasSelected ? "selected" : "all");

  const shown = useMemo(
    () =>
      filter === "selected" && hasSelected
        ? publications.filter((p) => p.selected)
        : publications,
    [filter, hasSelected, publications]
  );

  return (
    <section>
      <div className="flex flex-col items-start gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Research"
            width={32}
            height={32}
            className="inline-block mr-4"
          />
          <h2 className="font-serif text-3xl tracking-wide uppercase font-bold">
            Research
          </h2>
        </div>
        {hasSelected && (
          <div
            role="group"
            aria-label="Filter publications"
            className="inline-flex rounded-full border border-zinc-300 p-0.5 text-xs tracking-wider uppercase"
          >
            {(["selected", "all"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
                className={`px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer ${
                  filter === value
                    ? "bg-[#1e86c8] text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-8">
        {shown.map((publication, index) => (
          <div key={publication.title}>
            <PublicationEntry publication={publication} />
            {index < shown.length - 1 && (
              <div className="h-px bg-zinc-200 my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
