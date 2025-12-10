"use client";

type HeaderProps = {
  branding: {
    logoText: string;
    logoImage?: string;
  };
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
    buttonText: string;
  };
};

export function Header({ branding, whatsapp }: HeaderProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsapp.defaultMessage);
    window.open(
      `https://wa.me/${whatsapp.phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* White-label logo - easily replaceable */}
          <div className="flex items-center gap-2">
            {branding.logoImage ? (
              <img
                src={
                  branding.logoImage.startsWith("http") ||
                  branding.logoImage.startsWith("/")
                    ? branding.logoImage
                    : `/${branding.logoImage}`
                }
                alt={branding.logoText}
                className="w-10 h-10 rounded-lg object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-xl">
                  {branding.logoText.charAt(0)}
                </span>
              </div>
            )}
            <span className="text-foreground font-semibold text-lg">
              {branding.logoText}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center rounded-md border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {whatsapp.buttonText}
        </button>
      </div>
    </header>
  );
}
