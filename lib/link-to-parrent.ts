"use client";

import { useParams } from "next/navigation";
import env from "@/lib/env";

type UseLinkToParentOptions = {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export function useLinkToParent(options: UseLinkToParentOptions = {}) {
  const { lang } = useParams();

  function handleClick() {
    if (window) {
      const targetUrl = options.href || env.ADMIN_PANEL + `/${lang}`;
      window.location.href = targetUrl;
    }
  }

  return { handleClick };
}

// Foydalanish misoli:
/*
function MyComponent() {
  const { handleClick } = useLinkToParent({ 
    href: "/dashboard",
    onClick: (e) => console.log("Clicked!") 
  });

  return (
    <Button onClick={handleClick}>
      Go to Dashboard
    </Button>
  );
}

// Yoki oddiygina:
function MyComponent() {
  const { handleClick } = useLinkToParent();

  return (
    <div onClick={handleClick}>
      Click me to go parent
    </div>
  );
}
*/
