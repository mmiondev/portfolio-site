import { Flex } from "@chakra-ui/react";
import React from "react";
import { heightMinusHeader } from "../header";
import { Intro } from "../intro";
import { ScrollButton } from "../reusable/scroll-button";

export const IntroSection = () => {
  return (
    <Flex
      as="section"
      direction="column"
      justify="space-between"
      align="center"
      h={heightMinusHeader}
    >
      <Intro mt={{ base: "16", sm: "40" }} />
      <ScrollButton
        section="about"
        variant="iconSecondary"
        aria-label="scroll to about me"
      />
    </Flex>
  );
};
