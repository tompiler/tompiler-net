const size = {
  sm: "400px",
  md: "650px",
  lg: "768px",
  tablet: "1024px",
  desktopsm: "1200px",
  desktopmd: "1980px",
}

const breakpoints = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  tablet: `(max-width: ${size.tablet})`,
  desktopsm: `(max-width: ${size.desktopsm})`,
  desktopmd: `(max-width: ${size.desktopmd})`,
}

export const lightTheme = {
  background: "#ededed",
  color: "#383838",
  contactItem: { color: "#424242", hover: "#6A6A6A" },
  tompiler: { border: "#999999" },
  cv: {
    color: "#505050",
    hover: "#383838",
    line: { color: "#686868", hover: "#383838" },
    circle: { hover: "#7a7a7a" },
    toggle: { hover: "#bababa" },
    button: { background: "#d6d6d6", color: "#212121", border: "#adadad" },
  },
  scrollbar: { track: "#bababa", thumb: "#999999" },
  pageColours: {
    tompiler: { red: 74, green: 171, blue: 255, a: 0.7 }, // #4AABFF
    tutorials: { red: 250, green: 146, blue: 63, a: 0.7 }, // #FA923F
    contact: { red: 29, green: 129, blue: 98, a: 0.7 }, // #1D8162
    articles: { red: 221, green: 33, blue: 83, a: 0.6 }, // #DD2153
    cv: { red: 255, green: 201, blue: 3, a: 0.9 }, // #C29E0D
    aims: { red: 169, green: 39, blue: 207, a: 0.6 }, // #A927CF
  },
  breakpoints: breakpoints,
}

export const darkTheme = {
  background: "#323745",
  color: "#d4cac1",
  contactItem: { color: "#d4cac1", hover: "#F3E9DE" },
  tompiler: { border: "#d4cac1" },
  cv: {
    color: "#d4cac1",
    hover: "#DCDCDC",
    line: { color: "#d4cac1", hover: "#DCDCDC" },
    circle: { hover: "#aba49d" },
    toggle: { hover: "#414654" },
    button: { background: "#313e57", color: "#d4cac1", border: "#535e73" },
  },
  scrollbar: { track: "#414654", thumb: "#6a7080" },

  pageColours: {
    tompiler: { red: 125, green: 197, blue: 255, a: 1 }, // #A5D7FF
    tutorials: { red: 251, green: 174, blue: 112, a: 1 }, // #FBAE70
    contact: { red: 72, green: 153, blue: 98, a: 1 }, // #528172
    articles: { red: 221, green: 109, blue: 138, a: 1 }, // #DD8DA2
    cv: { red: 245, green: 218, blue: 116, a: 1 }, // #F5E39D
    aims: { red: 186, green: 130, blue: 207, a: 1 }, // #BA82CF
  },
  breakpoints: breakpoints,
}
