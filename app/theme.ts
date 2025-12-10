export interface Theme {
  colors: {
    main: string; // Color principal (Brand)
    secondary: string; // Color secundario (Accent)
    background: string; // Fondo de la página
    text: string; // Color del texto principal
  };
}

export const theme: Theme = {
  colors: {
    main: "#007bff", // Azul principal
    secondary: "#6c757d", // Gris secundario
    background: "#130303ff", // Fondo blanco
    text: "#ffffffff", // Texto oscuro
  },
};
