import { Box, Button, useTheme } from "@primer/react";
import type { NextPage } from "next";
import { useState } from "react";

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

  const [isDefault, setIsDefault] = useState<boolean>(true);

  const handleSetColorMode = () => {
    setColorMode(isDefault ? "night" : "day");
    setNightScheme(isDefault ? "dark" : "light");
    setDayScheme(isDefault ? "dark" : "light");
    setIsDefault((prev) => !prev);
    console.log(theme);
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
      className="stack"
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
      </Box>
      <Box mt={2}>
        <Button onClick={handleSetColorMode}>
          {isDefault ? "Night" : "Day"}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
