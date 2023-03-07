import {colors} from './colors';
import { getChakraFoundations } from '../../utils';

export const foundations = {
  ...getChakraFoundations(),
  colors,
} as const;
