"use client";

import { TemplateListType } from "@/types/template";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function TemplateCardV2(template: TemplateListType) {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 duration-300">
        {/* Image Section with Discount Badge */}
        <div className="group relative h-64 overflow-hidden">
          <img
            src={template.image || "/placeholder.svg"}
            alt={template.name}
            className="h-full w-full rounded-2xl object-cover transition-transform duration-300"
          />

          {/* Discount Badge */}
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-bold text-white shadow-lg">
            {template.discount}% OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="mb-2 text-2xl font-bold text-white">
            {template.name}
          </h2>

          {/* Price Section */}
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-blue-400">
              {+template.price === 0 ? "Bepul" : `${template.price} so'm`}
            </span>
            <span className="text-lg text-slate-400 line-through">
              {parseInt(template.original_price).toLocaleString("uz-UZ")} so'm
            </span>
          </div>

          {/* Stats Row */}
          <div className="mb-6 flex gap-4 border-b border-slate-700 pb-6">
            <div className="flex items-center gap-2 text-slate-300">
              <Eye size={18} className="text-blue-400" />
              <span className="text-sm font-medium">
                {template.views} ko'rildi
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Xususiyatlar
            </p>
            <ul className="space-y-2">
              {template.features.length > 3 ? (
                <>
                  {template.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span>{feature.name}</span>
                    </li>
                  ))}
                  <b>...</b>
                </>
              ) : (
                template.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span>{feature.name}</span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Call to Action Button */}

          <Link
            href={`/template/${template.id}`}
            className="block w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-500 hover:shadow-xl active:scale-95"
          >
            Botni sinab ko'rish
          </Link>
        </div>
      </div>
    </div>
  );
}
