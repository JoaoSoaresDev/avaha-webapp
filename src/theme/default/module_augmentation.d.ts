import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    offBlack: Palette["primary"];
    offWhite: Palette["primary"];
    surface: Palette["primary"];
  }

  interface PaletteOptions {
    offBlack: PaletteOptions["primary"];
    offWhite: PaletteOptions["primary"];
    surface: PaletteOptions["primary"];
  }
}
