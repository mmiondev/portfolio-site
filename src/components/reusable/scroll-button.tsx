import { scrollToSection } from "@/utils";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";

type ScrollButtonProps = {
  section: "intro" | "about" | "projects" | "contact";
} & IconButtonProps;
export const ScrollButton = ({ section, ...props }: ScrollButtonProps) => {
  return (
    <IconButton
      onClick={() => scrollToSection(section)}
      id={`${section}-scroll`}
      icon={<TriangleDownIcon boxSize="8" />}
      variant="iconPrimary"
      mb={{ base: "14", sm: "20" }}
      {...props}
    />
  );
};
