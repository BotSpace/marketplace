import { Bot, ArrowRight, Heart, Eye, Tag } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemplateListType } from "@/types/template";
import Link from "next/link";

interface TemplateCardProps {
  data: TemplateListType;
}

export const TemplateCard = ({ data }: TemplateCardProps) => {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      {/* Template Preview Area */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        <img className="relative z-30" src={data.image} alt={data.name} />
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
              {data.name}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm"></CardDescription>
          </div>
          {data.discount && (
            <span className="absolute top-2 z-30 whitespace-nowrap rounded-2xl bg-yellow-500 px-2 py-1 text-xs font-bold text-white">
              {data.discount_type === "percent"
                ? `${data.discount}%`
                : data.discount}
            </span>
          )}
        </div>

        {/* Categories */}
        {data.categories && data.categories.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {data.categories.slice(0, 2).map((category) => (
              <Badge key={category.id} variant="outline" className="text-xs">
                <Tag className="mr-1 h-3 w-3" />
                {category.name}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <ul className="space-y-2">
          {data.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-muted-foreground">{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t border-border/50 pt-4">
        {/* Stats Row */}
        <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{data.views}</span>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-baseline">
            <span className="text-2xl font-bold">
              {data.price == "0" ? "Free" : data.price}
            </span>
            {data.original_price && (
              <span className="text-sm text-muted-foreground line-through">
                {data.original_price}
              </span>
            )}
            <span className="text-xs text-muted-foreground">bir marta</span>
          </div>
          <Button asChild variant={"hero"}>
            <Link href={`/templates/${data.slug}`}>
              Ko'rish
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
