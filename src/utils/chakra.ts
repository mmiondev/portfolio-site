import { theme as chakraTheme } from '@chakra-ui/react';

export const getChakraFoundations = () => {
  const { blur, borders, breakpoints, colors, radii, shadows, sizes, space, transition, zIndices,  } =
    chakraTheme;
  const { letterSpacings, lineHeights, fontWeights, fonts, fontSizes } = chakraTheme;
  const typography = { letterSpacings, lineHeights, fontWeights, fonts, fontSizes };
  return {
    blur,
    borders,
    breakpoints,
    colors,
    radii,
    shadows,
    sizes,
    space,
    transition,
    ...typography,
    zIndices,
  };
};
