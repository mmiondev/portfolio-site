import { Flex, FlexProps, Stack } from "@chakra-ui/react";

import React from "react";
import { ScrollButton } from "../reusable/scroll-button";
import { AboutMeCopy } from "../about-me-copy";
import { AboutMeCard } from "../about-me-card";
import { RevealInView } from "../reusable/reveal-in-view";

// TODO: fix scroll to show icon when scrollable
// TODO: add more to recreational activities

export const AboutMeSection = (props: FlexProps) => {
  return (
    <RevealInView>
      <Flex
        as="section"
        direction="column"
        justify="space-between"
        align="center"
        id="about"
        bgColor="tertiary.400"
        minH="100vh"
        {...props}
      >
        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing="16"
          pt="15%"
          px={{ base: "2", md: "8" }}
          h="100%"
        >
          <AboutMeCopy boxSize={{ base: "100%", xl: "50%" }} />
          <AboutMeCard />
        </Stack>
        <ScrollButton
          section="projects"
          variant="iconPrimary"
          aria-label="scroll to projects section"
        />
      </Flex>
    </RevealInView>
  );
};
