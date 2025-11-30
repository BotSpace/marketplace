"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TemplateDetailType } from "@/types/template";

export function AboutSection({ data }: { data: TemplateDetailType }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2">
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
            className="prose prose-sm sm:prose-base max-w-none text-primary md:col-span-2"
          />

          {/* Features list */}
          <div className="mt-8 sm:mt-12">
            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-foreground">
              Features
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {data.features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() =>
                    setExpandedId(expandedId === feature.id ? null : feature.id)
                  }
                  className="group flex w-full items-center justify-between rounded-lg border border-border/50 p-3 sm:p-4 text-left transition-colors hover:bg-accent/50 min-h-[44px]"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-sm sm:text-base font-semibold text-foreground">
                      {feature.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-muted-foreground transition-transform ${expandedId === feature.id ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {data.categories.map((cat) => (
                <a
                  key={`cat-${cat.id}`}
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground min-h-[32px]"
                >
                  <span>•</span>
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
