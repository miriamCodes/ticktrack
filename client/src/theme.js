//  set up mateereial-ui theme

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light", // 'light' for the default light theme, 'dark' for dark mode (can be toggled later)
    primary: {
      main: "#66717E", //blue-grey-ish color for primary buttons/inputs
    },
    secondary: {
      main: "#D4D6B9", // pearl, muted mustard kind of
    },
    signalcolor: {
      main: "#BE6E46", // orange-ish
    },
    background: {
      default: "#F1F5F2", // white background
    },
  },
});

// const darkTheme = createTheme({
//   palette: {
//     type: "dark", // dark for dakr mode
//     primary: {
//       main: "#66717E", //blue-grey-ish color for primary buttons/inputs
//     },
//     secondary: {
//       main: "#D4D6B9", // pearl, muted mustard kind of
//     },
//     signalcolor: {
//       main: "#BE6E46", // orange-ish
//     },
//     background: {
//       default: "#383B53", // dark blue background
//     },
//   },
// });

export default theme;
