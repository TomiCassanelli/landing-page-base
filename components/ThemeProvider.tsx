"use client";

import React, { useEffect } from "react";
import { theme } from "../app/theme";

function getContrastColor(hexColor: string) {
  // Remove hash if present
  const hex = hexColor.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance (perceived brightness)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white based on luminance
  return yiq >= 128 ? "#000000" : "#ffffff";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;

    // Calculate contrast colors automatically
    const primaryForeground = getContrastColor(theme.colors.main);
    const secondaryForeground = getContrastColor(theme.colors.secondary);

    // Core Colors
    root.style.setProperty("--primary", theme.colors.main);
    root.style.setProperty("--primary-foreground", primaryForeground);
    root.style.setProperty("--secondary", theme.colors.secondary);
    root.style.setProperty("--secondary-foreground", secondaryForeground);
    root.style.setProperty("--background", theme.colors.background);
    root.style.setProperty("--foreground", theme.colors.text);

    // Derived Colors (Automatic variations)
    // Cards are slightly tinted with primary color (5%) on top of background
    root.style.setProperty(
      "--card",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.main} 3%)`
    );
    root.style.setProperty("--card-foreground", theme.colors.text);

    root.style.setProperty(
      "--popover",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.main} 3%)`
    );
    root.style.setProperty("--popover-foreground", theme.colors.text);

    root.style.setProperty(
      "--muted",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.text} 5%)`
    );
    root.style.setProperty(
      "--muted-foreground",
      `color-mix(in srgb, ${theme.colors.text}, transparent 40%)`
    );

    root.style.setProperty(
      "--accent",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.main} 10%)`
    );
    root.style.setProperty("--accent-foreground", theme.colors.main);

    root.style.setProperty("--destructive", "#ef4444");
    root.style.setProperty("--destructive-foreground", "#ffffff");

    root.style.setProperty(
      "--border",
      `color-mix(in srgb, ${theme.colors.text}, transparent 85%)`
    );
    root.style.setProperty(
      "--input",
      `color-mix(in srgb, ${theme.colors.text}, transparent 85%)`
    );
    root.style.setProperty("--ring", theme.colors.main);

    // WhatsApp specific (Fixed brand colors)
    root.style.setProperty("--whatsapp-green", "#25d366");
    root.style.setProperty("--whatsapp-green-dark", "#128c7e");

    // Sidebar (derived from card/surface)
    root.style.setProperty(
      "--sidebar",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.main} 3%)`
    );
    root.style.setProperty("--sidebar-foreground", theme.colors.text);
    root.style.setProperty("--sidebar-primary", theme.colors.main);
    root.style.setProperty(
      "--sidebar-primary-foreground",
      primaryForeground
    );
    root.style.setProperty(
      "--sidebar-accent",
      `color-mix(in srgb, ${theme.colors.background}, ${theme.colors.main} 10%)`
    );
    root.style.setProperty("--sidebar-accent-foreground", theme.colors.main);
    root.style.setProperty(
      "--sidebar-border",
      `color-mix(in srgb, ${theme.colors.text}, transparent 85%)`
    );
    root.style.setProperty("--sidebar-ring", theme.colors.main);
  }, []);

  return <>{children}</>;
}
