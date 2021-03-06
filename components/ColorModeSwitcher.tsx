import { MoonIcon, SunIcon } from "@primer/octicons-react";
import {
  Box,
  ButtonInvisible,
  SelectMenu,
  StyledOcticon,
  useTheme,
} from "@primer/react";
import { NextPage } from "next";

declare type ColorMode = "day" | "night";
declare type ColorModeWithAuto = ColorMode | "auto";

interface Props {
  setColorMode: (mode: ColorModeWithAuto) => void;
}

const ColorModeSwitcher: NextPage<Props> = ({ setColorMode }) => {
  const { setDayScheme, setNightScheme, colorScheme } = useTheme();

  const setScheme = (schemeValue: string) => {
    if (schemeValue.includes("dark")) {
      document.cookie = `colorMode=night; samesite=strict; max-age=31536000`;
      document.cookie = `nightScheme=${schemeValue}; samesite=strict; max-age=31536000`;
      setColorMode("night");
      setNightScheme(schemeValue);
    } else {
      document.cookie = `colorMode=day; samesite=strict; max-age=31536000`;
      document.cookie = `dayScheme=${schemeValue}; samesite=strict; max-age=31536000`;
      setColorMode("day");
      setDayScheme(schemeValue);
    }
  };

  const schemes = [
    {
      name: "Light",
      value: "light",
      icon: SunIcon,
    },
    {
      name: "Light colorblind",
      value: "light_colorblind",
      icon: SunIcon,
    },
    {
      name: "Dark",
      value: "dark",
      icon: MoonIcon,
    },
    {
      name: "Dark colorblind",
      value: "dark_colorblind",
      icon: MoonIcon,
    },
    {
      name: "Dark high contrast",
      value: "dark_high_contrast",
      icon: MoonIcon,
    },
    {
      name: "Dark Dimmed",
      value: "dark_dimmed",
      icon: MoonIcon,
    },
  ];

  const current = schemes.find((scheme) => scheme.value === colorScheme)!;

  return (
    <Box position="absolute" top={0} right={0} p={3} zIndex={100}>
      <Box position="relative" display="flex" justifyContent="flex-end">
        <SelectMenu>
          <ButtonInvisible as="summary" variant="small">
            <StyledOcticon color="fg.default" icon={current.icon} size={20} />
          </ButtonInvisible>
          <SelectMenu.Modal align="right">
            <SelectMenu.List>
              {schemes.map((scheme) => (
                <SelectMenu.Item
                  key={scheme.value}
                  selected={scheme.value === colorScheme}
                  onClick={() => setScheme(scheme.value)}
                >
                  {scheme.name}
                </SelectMenu.Item>
              ))}
            </SelectMenu.List>
          </SelectMenu.Modal>
        </SelectMenu>
      </Box>
    </Box>
  );
};

export default ColorModeSwitcher;
