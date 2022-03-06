import { Box, Button, Link, ThemeProvider, useTheme } from "@primer/react";
import Cookie from "js-cookie";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

declare type ColorMode = "day" | "night";
declare type ColorModeWithAuto = ColorMode | "auto";

const Home: NextPage = () => {
  const { resolvedColorMode, resolvedColorScheme } = useTheme();
  const [colorMode, setColorMode] = useState<ColorModeWithAuto>(
    resolvedColorMode || "day"
  );
  const [dayScheme, setDayScheme] = useState(resolvedColorScheme || "light");
  const [nightScheme, setNightScheme] = useState("dark");
  const [cookieColorMode, setCookieColorMode] = useState<string>();
  const [cookieDayScheme, setCookieDayScheme] = useState<string>();
  const [cookieNightScheme, setCookieNightScheme] = useState<string>();
  const [debugInfo, setDebugInfo] = useState<string>();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (Cookie.get("colorMode")) {
        setCookieColorMode(Cookie.get("colorMode"));
      }
      if (Cookie.get("dayScheme")) {
        setCookieDayScheme(Cookie.get("dayScheme"));
      }
      if (Cookie.get("nightScheme")) {
        setCookieNightScheme(Cookie.get("nightScheme"));
      }
    }
  }, []);

  const handleSetColorMode = () => {
    const mode = colorMode === "day" ? "night" : "day";
    setColorMode(mode);
    Cookie.set("colorMode", mode);
    setDebugInfo(`setting colorMode to ${mode}`);
  };

  const handleSetNightSheme = () => {
    const scheme = nightScheme === "dark" ? "light" : "dark";
    setNightScheme(scheme);
    Cookie.set("nightScheme", scheme);
    setDebugInfo(`setting nightScheme to ${scheme}`);
  };

  const handleSetDaySheme = () => {
    const scheme = dayScheme === "light" ? "dark" : "light";
    setDayScheme(scheme);
    Cookie.set("dayScheme", scheme);
    setDebugInfo(`setting dayScheme to ${scheme}`);
  };

  useEffect(() => {
    if (Cookie.get("colorMode")) {
      setCookieColorMode(Cookie.get("colorMode"));
    }
    if (Cookie.get("dayScheme")) {
      setCookieDayScheme(Cookie.get("dayScheme"));
    }
    if (Cookie.get("nightScheme")) {
      setCookieNightScheme(Cookie.get("nightScheme"));
    }
  }, [colorMode, dayScheme, nightScheme]);

  const handleClearCookies = () => {
    Cookie.remove("colorMode");
    Cookie.remove("dayScheme");
    Cookie.remove("nightScheme");
    setCookieColorMode(undefined);
    setCookieDayScheme(undefined);
    setCookieNightScheme(undefined);
  };

  return (
    <ThemeProvider
      colorMode={colorMode}
      dayScheme={dayScheme}
      nightScheme={nightScheme}
    >
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="canvas.default"
        color="fg.default"
      >
        <Box
          sx={{
            ">*": {
              margin: 2,
            },
          }}
        >
          <Box>colorMode: {colorMode}</Box>
          <Box>dayScheme: {dayScheme}</Box>
          <Box>nightScheme: {nightScheme}</Box>
          <Box>resolvedColorMode: {resolvedColorMode}</Box>
          <Box>resolvedColorScheme: {resolvedColorScheme}</Box>
          <Box>
            <Button onClick={handleSetColorMode}>
              ColorMode {colorMode === "day" ? "Night" : "Day"}
            </Button>
          </Box>
          <Box>
            <Button onClick={handleSetNightSheme}>
              NightScheme {nightScheme === "dark" ? "Light" : "Dark"}
            </Button>
          </Box>
          <Box>
            <Button onClick={handleSetDaySheme}>
              DayScheme {dayScheme === "light" ? "Dark" : "Light"}
            </Button>
          </Box>
          <Box>colorMode cookie: {cookieColorMode || "not set"}</Box>
          <Box>dayScheme cookie: {cookieDayScheme || "not set"}</Box>
          <Box>nightScheme cookie: {cookieNightScheme || "not set"}</Box>
          <Box>
            <Button onClick={handleClearCookies}>Clear cookies</Button>
          </Box>
          <Box>
            <Link href="/page">Page</Link>
          </Box>
          <Box>{debugInfo}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
