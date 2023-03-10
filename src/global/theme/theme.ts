export default {
  colors: {
    header: "#1B1B1F",

    background_primary: "#F4F5F6",
    background_secondary: "#FFFF",

    text: "#7A7A80",
    text_details: "#AEAEB3",
    title: "#47474D",

    line: "#EBEBF0",

    main: "#DC1637",
    main_light: "#FDEDEF",

    success: "#03B252",

    shape: "#E1E1E8",
    shape_dark: "#29292E",

    start_icon: "#FFBF00",
  },
  fonts: {
    primary_400: "Inter_400Regular",
    primary_500: "Inter_500Medium",

    secondary_400: "Archivo_400Regular",
    secondary_500: "Archivo_500Medium",
    secondary_600: "Archivo_600SemiBold",
  },
};

export type TFonts =
  | "primary_400"
  | "primary_500"
  | "secondary_400"
  | "secondary_500"
  | "secondary_600";

export type TColors =
  | "header"
  | "background_primary"
  | "background_secondary"
  | "text"
  | "text_details"
  | "title"
  | "line"
  | "main"
  | "main_light"
  | "success"
  | "shape"
  | "shape_dark";
