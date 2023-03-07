import { VStack, Divider, Text } from "@chakra-ui/react";
import React from "react";

export const AboutMeCopy = () => {
  return (
    <VStack
      color="primary.600"
      boxSize={{ base: "100%", lg: "50%" }}
      fontSize={{ base: "xl", sm: "2xl" }}
      textAlign={{ base: "center", md: "start" }}
    >
      <Text>
        I have a lifelong passion of tinkering and continue my endless quest for
        knowledge by developing intuitive applications. I specialize in
        Typescript and React, but I am always looking to expand my skill set.
      </Text>
      <Divider
        borderStyle="dashed"
        borderWidth="2px"
        borderColor="primary.600"
      />
      <Text>
        Aside from developing, I enjoy raising chickens, outdoor activites and
        gaming.
      </Text>
    </VStack>
  );
};
