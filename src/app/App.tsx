import React from 'react';
import {Route, Routes} from "react-router-dom";

import {CssBaseline, ThemeProvider} from "@mui/material";

import {mainDarkTheme} from "./themas/dark";
import {Layout} from "../shared/ui/Layout/Layout";

import {MyOrganizationPage} from "../pages/myOrganisation";

function App() {
  return (
    <ThemeProvider theme={mainDarkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyOrganizationPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
