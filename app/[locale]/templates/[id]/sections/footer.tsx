export function Footer() {
  const footerLinks = {
    Product: ["Templates", "Plugins", "Components", "Vectors", "Resources"],
    Company: ["About", "Careers", "Blog", "Press", "Support"],
    Creative: ["Templates", "Plugins", "Components", "Vectors", "Community"],
    Community: ["Resources", "Marketplace", "Integrations", "API", "Hiring"],
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Framer. All rights reserved.
          </p>
          <div className="mt-6 flex gap-6 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
