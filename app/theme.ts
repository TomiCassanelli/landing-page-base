export interface Theme {
  colors: {
    main: string // Color principal (Brand)
    secondary: string // Color secundario (Accent)
    background: string // Fondo de la página
    text: string // Color del texto principal
  }
}

export const theme: Theme = {
  colors: {
    main: "#1B5E3B", // Verde bosque de Seguridad 360
    secondary: "#2d7a4e", // Verde secundario más claro
    background: "#FAF8F5", // Fondo crema/beige cálido
    text: "#1a1a1a", // Texto oscuro para buena legibilidad
  },
}
