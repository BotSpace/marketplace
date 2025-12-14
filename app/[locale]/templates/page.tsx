"use client";

import { TemplateCard } from "@/components/TemplateCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useReactQueryAction } from "@/services/use-react-query-action";
import { Category, Feature, TemplateListType } from "@/types/template";
import { APIListResponse } from "@/types/http";
import Pagination from "@/components/pagination";
import Link from "next/link";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category[] | []>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[] | []>([]);
  const [page, setPage] = useState(1);

  const { data: templates } = useReactQueryAction<
    APIListResponse<TemplateListType[]>
  >({
    url: "/api/template",
    debounceTime: 400,
    query: {
      search: searchQuery,
      features: selectedFeatures.map((item) => item.id),
      categories: selectedCategory.map((item) => item.id),
      page,
    },
  });

  const { data: categories } = useReactQueryAction<APIListResponse<Category[]>>(
    {
      url: "/api/category",
    },
  );

  useEffect(() => {
    // Enhanced scroll animationsz
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          entry.target.classList.add("animate-visible");
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const scrollElements = document.querySelectorAll(".scroll-animate");
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [templates]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-muted/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
              <Bot className="mr-1.5 h-3.5 w-3.5" />
              Tayyor Telegram Bot Shablonlari
            </Badge>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Telegram botni{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                sotib oling va ishga tushiring
              </span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground">
              Biznesingiz uchun tayyor bot shablonlarini tanlang, sotib oling va
              bir necha soat ichida ishga tushiring
            </p>

            <div className="mx-auto max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Shablon qidirish..."
                  className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section with Filters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex gap-2 py-3">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory([])}
              className={`rounded-full transition-all ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "hover:border-primary/50"
              }`}
            >
              <X />
              Tozalash
            </Button>

            {categories ? (
              categories.data.results.map(({ id, name }) => {
                const isSelected = selectedCategory.some(
                  (cat) => cat.id === id,
                );
                return (
                  <Button
                    key={`category-${id}`}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      if (isSelected) {
                        setSelectedCategory(
                          selectedCategory.filter((cat) => cat.id !== id),
                        );
                      } else {
                        setSelectedCategory([
                          ...selectedCategory,
                          { id, name },
                        ]);
                      }
                    }}
                    className={`rounded-full transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "hover:border-primary/50"
                    }`}
                  >
                    {name}
                  </Button>
                );
              })
            ) : (
              <>
                {/* <CategoryButtonSkeleton />
                <CategoryButtonSkeleton />
                <CategoryButtonSkeleton />
                <CategoryButtonSkeleton />
                <CategoryButtonSkeleton /> */}
              </>
            )}
          </div>

          {/* Templates Grid */}
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates?.data.results.map((template, idx) => (
              <TemplateCard key={idx} data={template} />
            ))}
          </div>
        </div>
      </section>

      {templates && (
        <Pagination
          current_page={templates.data.current_page}
          total_pages={templates.data.total_pages}
          onPageChange={(e) => setPage(e)}
        />
      )}

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Telegram bot kerakmi?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Shablonlardan birini tanlang va biznesingizni avtomatlashtirishni
              boshlang
            </p>
            <Button asChild variant="default" size="lg">
              <Link href={"https://t.me/muhiddin_kabraliev_office"}>
                <Bot className="mr-2 h-5 w-5" />
                Telegram orqali bog'laning
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
