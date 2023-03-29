import { ThemeProvider, createTheme } from "@mui/material/styles";
import palette from "../contants/palette";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface HOCFunctionalComponent<T = {}>
  extends FunctionComponent<PropsWithChildren<T>> {}

const AppThemeProvider: HOCFunctionalComponent = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
    spacing: 4,
    shape: { borderRadius: 8 },
    typography: {
      fontFamily: "Ravi",
      fontSize: 14,
      button: {
        fontSize: 14,
        fontWeight: 600,
      },
    },
    palette,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
