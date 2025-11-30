"use client";

import { TemplateListType } from "@/types/template";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function TemplateCardV2(template: TemplateListType) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 duration-300 sm:rounded-2xl">
        {/* Image Section with Discount Badge */}
        <div className="group relative h-48 overflow-hidden sm:h-64">
          <img
            src={template.image || "/placeholder.svg"}
            alt={template.name || "Template image"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="rounded-t-xl object-cover transition-transform duration-300 sm:rounded-t-2xl"
          />

          {/* <img src={template.image} /> */}

          {/* Discount Badge */}
          <div className="absolute right-2 top-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-2.5 py-1 text-xs font-bold text-white shadow-lg sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm">
            {template.discount}% OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6">
          {/* Title */}
          <h2 className="mb-2 line-clamp-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
            {template.name}
          </h2>

          {/* Price Section */}
          <div className="mb-3 flex flex-col items-start gap-1 sm:mb-4 sm:flex-row sm:items-baseline sm:gap-2">
            <span className="text-xl font-bold text-blue-400 sm:text-2xl md:text-3xl">
              {+template.price === 0 ? "Bepul" : `${template.price} so'm`}
            </span>
            <span className="text-sm text-slate-400 line-through sm:text-base md:text-lg">
              {parseInt(template.original_price).toLocaleString("uz-UZ")} so'm
            </span>
          </div>

          {/* Stats Row */}
          <div className="mb-4 flex gap-4 border-b border-slate-700 pb-4 sm:mb-6 sm:pb-6">
            <div className="flex items-center gap-1.5 text-slate-300 sm:gap-2">
              <Eye
                size={16}
                className="text-blue-400 sm:h-[18px] sm:w-[18px]"
              />
              <span className="text-xs font-medium sm:text-sm">
                {template.views} ko'rildi
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 sm:mb-6">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:mb-3 sm:text-xs">
              Xususiyatlar
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {template.features.length > 3 ? (
                <>
                  {template.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-start gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm"
                    >
                      <span className="line-clamp-1">{feature.name}</span>
                    </li>
                  ))}
                  <b className="text-xs sm:text-sm">...</b>
                </>
              ) : (
                template.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-start gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm"
                  >
                    <span className="line-clamp-1">{feature.name}</span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Call to Action Button */}
          <Link
            href={`/template/${template.slug}`}
            className="block w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 py-2.5 text-center text-xs font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-500 hover:shadow-xl active:scale-95 sm:py-3 sm:text-sm md:text-base"
          >
            Botni sinab ko'rish
          </Link>
        </div>
      </div>
    </div>
  );
}
