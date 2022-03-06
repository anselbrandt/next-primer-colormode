import { Box, ThemeProvider } from "@primer/react";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <ThemeProvider>
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
        <Box>Page</Box>
      </Box>
    </ThemeProvider>
  );
};

export default Page;
