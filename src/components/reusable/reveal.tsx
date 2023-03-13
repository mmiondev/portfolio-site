import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

export type GetRevealAnimationPropsOptions = {
  delay?: BoxProps["transitionDelay"];
  show?: boolean;
};

export type RevealProps = BoxProps &
  GetRevealAnimationPropsOptions & {
    children: React.ReactNode;
  };

export function getRevealAnimationProps<T extends Element = HTMLDivElement>(
  { show, delay }: GetRevealAnimationPropsOptions,
  ref: ForwardedRef<T>
) {
  return {
    ref,
    opacity: show ? 1 : 0,
    transition: "opacity .2s ease-in,transform .8s",
    transitionDelay: delay,
  };
}

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, show, delay, ...boxProps }, ref) => (
    <Box {...getRevealAnimationProps({ show, delay }, ref)} {...boxProps}>
      {children}
    </Box>
  )
);
Reveal.displayName = "Reveal";
