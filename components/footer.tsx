type FooterProps = {
  branding: {
    logoText: string;
    description: string;
  };
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
  };
  links: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
  copyright: {
    text: string;
    year: string;
  };
  legalLinks: {
    privacy: string;
    terms: string;
  };
};

export function Footer({
  branding,
  whatsapp,
  links,
  copyright,
  legalLinks,
}: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {branding.logoText.charAt(0)}
                </span>
              </div>
              <span className="text-foreground font-semibold text-lg">
                {branding.logoText}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {branding.description}
            </p>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {copyright.year} {branding.logoText}. {copyright.text}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {legalLinks.privacy}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {legalLinks.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
