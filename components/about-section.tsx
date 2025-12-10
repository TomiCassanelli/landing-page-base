type AboutSectionProps = {
  title: string;
  subtitle: string;
  content: string;
  stats: {
    value: string;
    label: string;
  }[];
  image?: string;
};

export function AboutSection({
  title,
  subtitle,
  content,
  stats,
  image,
}: AboutSectionProps) {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {subtitle}
            </p>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              {content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {image ? (
              <img
                src={image}
                alt="About us"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            ) : (
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-background border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    Nuestra historia
                  </p>
                  <p className="text-muted-foreground">
                    Comprometidos con la excelencia desde el inicio
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
