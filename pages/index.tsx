import { Box, Button, useTheme } from "@primer/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const {
    theme,
    colorScheme,
    colorMode,
    resolvedColorMode,
    resolvedColorScheme,
    dayScheme,
    nightScheme,
    setColorMode,
    setDayScheme,
    setNightScheme,
  } = useTheme();

  const handleSetColorMode = () => {
    setColorMode(colorMode === "day" ? "night" : "day");
  };

  const handleSetNightSheme = () => {
    setNightScheme(nightScheme === "dark" ? "light" : "dark");
  };

  const handleSetDaySheme = () => {
    setDayScheme(dayScheme === "light" ? "dark" : "light");
  };

  return (
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
        <Box>colorScheme: {colorScheme}</Box>
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
      </Box>
    </Box>
  );
};

export default Home;
