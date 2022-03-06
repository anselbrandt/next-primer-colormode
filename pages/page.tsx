import {
  FileDirectoryIcon,
  GitBranchIcon,
  PersonIcon,
  SearchIcon,
  ToolsIcon,
} from "@primer/octicons-react";
import { Box, ThemeProvider, useTheme } from "@primer/react";
import type { NextPage } from "next";
import { useState } from "react";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import IconPair from "../components/IconPair";
import SideNav from "../components/SideNav";

declare type ColorMode = "day" | "night";
declare type ColorModeWithAuto = ColorMode | "auto";

interface Props {
  newFileCount?: number;
  pendingChangesCount?: number;
}

const Page: NextPage<Props> = ({ newFileCount, pendingChangesCount }) => {
  const size = 24;

  const { resolvedColorMode } = useTheme();
  const [colorMode, setColorMode] = useState<ColorModeWithAuto>(
    resolvedColorMode || "day"
  );
  const [selectedTab, setSelectedTab] = useState("explorer");

  const handleSelectedTab = (tab: string) => {
    setSelectedTab(tab);
    console.log(tab);
  };

  return (
    <ThemeProvider colorMode={colorMode}>
      <Box height="100vh" bg="canvas.default" color="fg.default">
        <ColorModeSwitcher setColorMode={setColorMode} />
        <Box
          sx={{
            ">*": {
              margin: 2,
            },
          }}
        ></Box>
        <Box>
          <SideNav>
            <SideNav.Link
              onClick={() => handleSelectedTab("explorer")}
              selected={selectedTab === "explorer"}
            >
              <IconPair
                size={size}
                icon={FileDirectoryIcon}
                count={
                  newFileCount && newFileCount > 0 ? newFileCount : undefined
                }
              />
            </SideNav.Link>
            <SideNav.Link
              onClick={() => handleSelectedTab("search")}
              selected={selectedTab === "search"}
            >
              <IconPair size={size} icon={SearchIcon} />
            </SideNav.Link>
            <SideNav.Link
              onClick={() => handleSelectedTab("git")}
              selected={selectedTab === "git"}
            >
              <IconPair
                size={size}
                icon={GitBranchIcon}
                count={
                  pendingChangesCount && pendingChangesCount > 0
                    ? pendingChangesCount
                    : undefined
                }
              />
            </SideNav.Link>
            <SideNav.Link
              onClick={() => handleSelectedTab("settings")}
              selected={selectedTab === "settings"}
            >
              <IconPair size={size} icon={ToolsIcon} />
            </SideNav.Link>
            <SideNav.Link
              onClick={() => handleSelectedTab("user")}
              selected={selectedTab === "user"}
            >
              <IconPair size={size} icon={PersonIcon} />
            </SideNav.Link>
          </SideNav>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Page;
