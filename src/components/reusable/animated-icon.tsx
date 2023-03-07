import { ComponentWithAs, Icon, IconProps } from "@chakra-ui/react";
import React from "react";

type AnimatedIconProps = {
  icon: ComponentWithAs<"svg", IconProps>;
} & IconProps;
export const AnimatedIcon = ({ icon, ...props }: AnimatedIconProps) => {
  return (
    <Icon
      as={icon}
      color="secondary.500"
      boxSize={{ base: "8", sm: "12", lg: "14" }}
      transition="transform 1s"
      transitionDelay="0.1s"
      _hover={{
        color: "tertiary.500",
        transform: "translate(2px, -1%) rotateY(360deg) scale(1.1)",
        transition: "transform 1s",
      }}
      _not={{
        color: "primary.500",
      }}
      {...props}
    />
  );
};
