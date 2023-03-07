import { ReactIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  GraphqlIcon,
  NodeIcon,
} from "./icons";
import { AnimatedIcon } from "./reusable";

export const AboutMeCardHeader = () => {
  return (
    <Flex w="100%" justify="space-evenly" mb="4">
      <AnimatedIcon icon={TypescriptIcon} />
      <AnimatedIcon icon={ReactIcon} />
      <AnimatedIcon icon={HtmlIcon} />
      <AnimatedIcon icon={CssIcon} />
      <AnimatedIcon icon={GraphqlIcon} />
      <AnimatedIcon icon={NodeIcon} />
    </Flex>
  );
};
