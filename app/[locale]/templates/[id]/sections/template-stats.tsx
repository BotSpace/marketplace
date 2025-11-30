import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Package, PackagePlus, Eye, Star } from "lucide-react";

export function TemplateStats() {
  return (
    <section className="mx-auto max-w-7xl border-y border-border/50 px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4 lg:grid-cols-6">
        {/* Creator */}
        <div className="text-center">
          <Avatar className="mx-auto h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">Matias Fernandez</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Creator</p>
        </div>

        {/* Release Date */}
        <div className="text-center">
          <Clock className="mx-auto h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">Released</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Oct 15, 2024</p>
        </div>

        {/* Version */}
        <div className="text-center">
          <Package className="mx-auto h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">Version</p>
          <p className="text-[10px] sm:text-xs text-gray-400">v 2.4</p>
        </div>

        {/* Views */}
        <div className="text-center">
          <Eye className="mx-auto h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">Views</p>
          <p className="text-[10px] sm:text-xs text-gray-400">2 hours</p>
        </div>

        {/* Likes */}
        <div className="text-center">
          <Star className="mx-auto h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">Likes</p>
          <p className="text-[10px] sm:text-xs text-gray-400">0 stars</p>
        </div>
      </div>
    </section>
  );
}
