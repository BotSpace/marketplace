"use client";

import { TemplateListType } from "@/types/template";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function TemplateCardV2(template: TemplateListType) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 duration-300">
        {/* Image Section with Discount Badge */}
        <div className="group relative h-48 sm:h-64 overflow-hidden">
          <img
            src={template.image || "/placeholder.svg"}
            alt={template.name}
            className="h-full w-full rounded-t-xl sm:rounded-t-2xl object-cover transition-transform duration-300"
          />

          {/* Discount Badge */}
          <div className="absolute right-2 sm:right-4 top-2 sm:top-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-2.5 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-lg">
            {template.discount}% OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6">
          {/* Title */}
          <h2 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-2">
            {template.name}
          </h2>

          {/* Price Section */}
          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-baseline gap-1 sm:gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
              {+template.price === 0 ? "Bepul" : `${template.price} so'm`}
            </span>
            <span className="text-sm sm:text-base md:text-lg text-slate-400 line-through">
              {parseInt(template.original_price).toLocaleString("uz-UZ")} so'm
            </span>
          </div>

          {/* Stats Row */}
          <div className="mb-4 sm:mb-6 flex gap-4 border-b border-slate-700 pb-4 sm:pb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300">
              <Eye size={16} className="sm:w-[18px] sm:h-[18px] text-blue-400" />
              <span className="text-xs sm:text-sm font-medium">
                {template.views} ko'rildi
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 sm:mb-6">
            <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-400">
              Xususiyatlar
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {template.features.length > 3 ? (
                <>
                  {template.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300"
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
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="line-clamp-1">{feature.name}</span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Call to Action Button */}
          <Link
            href={`/template/${template.id}`}
            className="block w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-500 hover:shadow-xl active:scale-95"
          >
            Botni sinab ko'rish
          </Link>
        </div>
      </div>
    </div>
  );
}
