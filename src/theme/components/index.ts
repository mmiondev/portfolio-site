import { theme as chakraTheme } from '@chakra-ui/react';
import { Button } from './button';

export const components = {
    ...chakraTheme.components,
    Button
} as const