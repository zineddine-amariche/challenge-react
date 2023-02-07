// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#EDEDED",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#555555",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#d4e2fc",
    200: "#a9c5f9",
    300: "#7ea8f7",
    400: "#538bf4",
    500: "#286ef1",
    600: "#2058c1",
    700: "#184291",
    800: "#102c60",
    900: "#081630",
  },
  secondary: {
    // yellow
    100: "#d6d6d6",
    200: "#adadad",
    300: "#858585",
    400: "#5c5c5c",
    500: "#333333",
    600: "#292929",
    700: "#1f1f1f",
    800: "#141414",
    900: "#0a0a0a",
  },

  pink: {
    100: "#e9d4ef",
    200: "#d3a8e0",
    300: "#bc7dd0",
    400: "#a651c1",
    500: "#9026b1",
    600: "#731e8e",
    700: "#56176a",
    800: "#3a0f47",
    900: "#1d0823",
  },

  green: {
    100: "#dcf6ea",
    200: "#baedd4",
    300: "#97e3bf",
    400: "#75daa9",
    500: "#52d194",
    600: "#42a776",
    700: "#317d59",
    800: "#21543b",
    900: "#102a1e",
  },
  blue: {
    // blue
    100: "#d4e2fc",
    200: "#a9c5f9",
    300: "#7ea8f7",
    400: "#538bf4",
    500: "#286ef1",
    600: "#2058c1",
    700: "#184291",
    800: "#102c60",
    900: "#081630",
  },
};
// function that reverses color
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode !== "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.grey[0],
              dark: tokensDark.secondary[800],
              grey:tokensDark.grey[50],
              
            },
            secondary: {
              ...tokensDark.secondary,
              ...tokensLight.pink,
              ...tokensDark.green,

              main: tokensDark.secondary[500],
              light: tokensDark.primary[100],
              contrastText:tokensDark.pink[700],
              dark:tokensDark.green[600]

            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.secondary[900],
              alt: tokensDark.primary[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              ...tokensDark.green,

              main: tokensDark.primary[900],
              light: tokensDark.grey[0],
              dark: tokensDark.grey[900],
              grey:tokensDark.grey[900],


            },
            secondary: {
              ...tokensLight.secondary,
              ...tokensLight.pink,
              ...tokensDark.green,

              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
              contrastText:tokensDark.pink[700],
              dark:tokensDark.green[600]


            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[500],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
