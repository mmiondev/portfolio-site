import { heightMinusHeader } from "@/pages";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Intro } from "./intro";

export const IntroSection = () => {
  return (
    <Flex
      as="section"
      direction="column"
      justify="space-between"
      h={heightMinusHeader}
    >
      <Intro mt={{ base: "16", sm: "40" }} />
      <IconButton
        icon={<TriangleDownIcon boxSize="8" />}
        aria-label="move to next section"
        variant="icon"
        mb="4"
      />
    </Flex>
  );
};
