import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

export type CardProps = {
  children: React.ReactNode;
} & Omit<FlexProps, "children">;

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Flex
      w={{ base: "100%", xl: "50%" }}
      h="lg"
      direction="column"
      bgColor="primary.600"
      py="2"
      opacity="0.8"
      borderRadius="lg"
      {...props}
    >
      {children}
    </Flex>
  );
};
