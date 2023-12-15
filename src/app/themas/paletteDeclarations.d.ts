import {CSSProperties} from "react";

declare module '@mui/material/styles' {
  interface Palette {
    grayScale: {
      gray1: CSSProperties['color'],
      gray2: CSSProperties['color'],
      gray3: CSSProperties['color'],
      gray4: CSSProperties['color'],
      gray5: CSSProperties['color'],
      gray6: CSSProperties['color']
    }
  }

  interface PaletteOptions {
    grayScale: {
      gray1: CSSProperties['color'],
      gray2: CSSProperties['color'],
      gray3: CSSProperties['color'],
      gray4: CSSProperties['color'],
      gray5: CSSProperties['color'],
      gray6: CSSProperties['color']
    }
  }
}