import React, { Suspense, lazy } from "react";
import { useDarkMode } from "./hooks";
import { ThemeProvider } from "styled-components";
import lightTheme, { darkTheme } from "./theming/themeContext";
import GlobalStyles from "./theming/global";
import { AppWrapper, Landing } from "./pages";
import { ScrollTop } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Movie = lazy(() => import("./pages").then((m) => ({ default: m.Movie })));
const VulnPage = lazy(() =>
  import("./pages").then((m) => ({ default: m.VulnPage })),
);
const DevopsPage = lazy(() =>
  import("./pages").then((m) => ({ default: m.DevopsPage })),
);
const EA1 = lazy(() => import("./pages").then((m) => ({ default: m.EA1 })));
const Scheduler = lazy(() =>
  import("./pages").then((m) => ({ default: m.Scheduler })),
);
const MarketingSite = lazy(() =>
  import("./pages").then((m) => ({ default: m.MarketingSite })),
);

const App = () => {
  const [mode, toggleMode, spread, componentMounted, setDisableScroll] =
    useDarkMode();
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <AppWrapper>
                  <Landing
                    setDisableScroll={setDisableScroll}
                    spread={spread}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </AppWrapper>
              }
            />
            <Route
              path="/movie"
              element={
                <AppWrapper>
                  <Movie spread={spread} mode={mode} toggleMode={toggleMode} />
                </AppWrapper>
              }
            />
            <Route
              path="/vuln"
              element={
                <AppWrapper>
                  <VulnPage
                    spread={spread}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </AppWrapper>
              }
            />
            <Route
              path="/devops"
              element={
                <AppWrapper>
                  <DevopsPage
                    spread={spread}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </AppWrapper>
              }
            />

            <Route
              path="/ea1"
              element={
                <AppWrapper>
                  <EA1 spread={spread} mode={mode} toggleMode={toggleMode} />
                </AppWrapper>
              }
            />
            <Route
              path="/schedule"
              element={
                <AppWrapper>
                  <Scheduler
                    setDisableScroll={setDisableScroll}
                    spread={spread}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </AppWrapper>
              }
            />
            <Route
              path="/marketing-site"
              element={
                <AppWrapper>
                  <MarketingSite
                    setDisableScroll={setDisableScroll}
                    spread={spread}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </AppWrapper>
              }
            />
          </Routes>
          <ScrollTop />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
