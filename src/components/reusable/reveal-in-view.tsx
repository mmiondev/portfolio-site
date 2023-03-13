import { useInView } from "react-intersection-observer";
import React from "react";
import {
  GetRevealAnimationPropsOptions,
  RevealProps,
  getRevealAnimationProps,
} from "./reveal";
import { Box, BoxProps } from "@chakra-ui/react";

export type UseRevealInViewAnimationPropsOptions = Pick<
  GetRevealAnimationPropsOptions,
  "delay"
>;

export function useRevealInViewAnimationProps<
  T extends Element = HTMLDivElement
>(opts?: UseRevealInViewAnimationPropsOptions) {
  const { ref, inView } = useInView({ fallbackInView: true }); // `fallbackInView` is used on browsers which don't support `IntersectionObserver`
  return getRevealAnimationProps<T>({ show: inView, ...opts }, ref);
}

export type RevealInViewProps = BoxProps &
  Pick<RevealProps, "delay" | "children">;

export const RevealInView: React.VFC<RevealInViewProps> = ({
  children,
  delay,
  ...boxProps
}) => (
  <Box {...useRevealInViewAnimationProps({ delay })} {...boxProps}>
    {children}
  </Box>
);
