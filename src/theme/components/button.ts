const disabledColors = {
    bgColor: 'neutral.200',
    color: 'neutral.400',
  } as const;
  
  const baseStyle = {
    fontWeight: 'semibold',
    lineHeight: 'base',
    borderRadius: '3px',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _hover: {
      transitionDuration: '0ms',
      _disabled: {
        ...disabledColors,
      },
    },
    _active: {
      transitionTimingFunction: 'ease-in-out', // Chakra overrides this with `cubic-bezier(0.4, 0, 0.2, 1)`, don't know how to disable this yet
      transitionDuration: '150ms',
    },
    _disabled: {
      ...disabledColors,
    },
  } as const;
  
  const sizes = {
    lg: {
      px: '20px',
      py: '14px',
      fontSize: 'xl',
    },
    md: {
      px: '18px',
      py: '12px',
      fontSize: 'md',
    },
    sm: {
      px: '12px',
      py: '8px',
      fontSize: 'sm',
    },
  } as const;
  
  const variants = {
    primary: {
      bgColor: 'secondary.500',
      color: 'neutral.900',
      _hover: {
        bgColor: 'tertiary.500',
      },
      _active: {
        bgColor: 'tertiary.600',
      },
    },
    secondary: {
      bgColor: 'secondary.400',
      color: 'neutral.900',
      _hover: {
        bgColor: 'secondary.300',
      },
      _active: {
        bgColor: 'secondary.500',
      },
    },
    icon:{
      bgColor: 'transparent',
      color: 'secondary.500',
      _hover: {
        color: 'tertiary.500',
      },
      _active: {
        color: 'tertiary.600',
      },
    }
  }

  
  const defaultProps = {
    size: 'md',
    variant: 'primary',
  } as const;
  
  /** See: https://www.figma.com/file/2sLeuoy2vF9LEQH648zYZC/Hoseki-Design-System?node-id=3%3A13 */
  export const Button = {
    baseStyle,
    sizes,
    variants,
    defaultProps,
  } as const;
  