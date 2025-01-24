import { IThemeInterface } from ".";


export const darkTheme: IThemeInterface = {
  application: {
    accentColor: "#27954f",
    fontSize: "16px",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bgColor: "#1d1d1d",
    borderColor: "#3b3f44",
    padding: "5px",
    borderRedius: "5%",
  },
  scrollbar: {
    width: "10px",
    track: {
      bgColor: "#2f2f2f52",
    },
    thumb: {
      bgColor: "rgba(59, 59, 59, 0.747)",
      hoverBgColor: "#555",
    },
  },
  selection: {
    bgColor: "#27954f",
    color: "#fff",
  },
  typography: {
    lineHeight: "1.5"
  },
  button: {
    color: "#fff",
    border: "1px solid #222424",
    bgColor: "hsl(0, 0%, 22%)",
    hoverBgColor: "hsl(0, 0%, 24%)",
    activeBgColor: "hsl(0deg 0% 20%)",
    shadowColor: "#00000078",
  },
  title: {
    bar: {
      bgColor: "#252525",
      color: "hsl(0, 0%, 85%)",
      titleColor: "hsl(0, 0%, 85%)",
      menu: {
        borderColor: "#2d2c2c",
        titleHoverBgColor: "hsl(0deg 0% 12%)",
        titleActive: {
          bgColor: "#1e1e1e",
          borderColor: "#2d2c2c",
        },
        separator: {
          bgColor: "#2d2c2c",
        },
      },
      popup: {
        bgColor: "#1e1e1e",
        border: "1px solid #2d2c2c",
        shadow: "4px 10px 10px rgba(0, 0, 0, 0.2)",
        item: {
          nameColor: "hsl(0, 0%, 75%)",
          shortcutColor: "hsla(0, 0%, 55%, 0.8)",
          hover: {
            color: "hsl(0, 0%, 85%)",
            bgColor: "hsl(0 0% 16.22%)",
            shortcutColor: "#27954f",
          },
          nameShadowColor: "#151515",
        },
      },
    },
  },
  ittyni: {
    headingColor: "#ddddddec",
  },
  windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
};


export const lightTheme: IThemeInterface = {
  application: {
    accentColor: "#27954f",
    fontSize: "16px",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bgColor: "#e2e2e2",
    borderColor: "#eaeaea",
    padding: "5px",
    borderRedius: "5%",
  },
  scrollbar: {
    width: "10px",
    track: {
      bgColor: "#2f2f2f1f",
    },
    thumb: {
      bgColor: "rgb(59 59 59 / 30%)",
      hoverBgColor: "#27954f",
    },
  },
  selection: {
    bgColor: "#27954f",
    color: "#fff",
  },
  typography: {
    lineHeight: "1.5"
  },
  button: {
    color: "#424242",
    border: "1px solid #eaeaea",
    bgColor: "#fff",
    hoverBgColor: "hsl(0, 0%, 98%)",
    activeBgColor: "hsl(0, 0%, 96%)",
    shadowColor: "white",
  },
  title: {
    bar: {
      bgColor: "#d5d5d5c4",
      color: "#1f1f1f",
      titleColor: "#1f1f1f",
      menu: {
        borderColor: "#d3d6d8",
        titleHoverBgColor: "#e6e6e69e",
        titleActive: {
          bgColor: "hsl(0deg 0% 99%)",
          borderColor: "#d3d6d8",
        },
        separator: {
          bgColor: "#d3d6d8",
        },
      },
      popup: {
        bgColor: "hsl(0deg 0% 99%)",
        border: "1px solid #d3d6d8",
        shadow: "4px 10px 10px rgba(255, 255, 255, 0.8)",
        item: {
          nameColor: "#0e0e0e",
          shortcutColor: "#27954f",
          hover: {
            color: "#000000",
            bgColor: "#d6dadea2",
            shortcutColor: "#27954f",
          },
          nameShadowColor: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
  },
  ittyni: {
    headingColor: "#282828",
  },
  windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

}