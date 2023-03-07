import { Box, Stack, StackProps, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const strings = [
  "Web Apps",
  "React Apps",
  "Crispy UIs",
  "Excellent UX",
  "Chicken Coops",
];

export const Intro = (props: StackProps) => {
  return (
    <VStack
      spacing="6"
      alignSelf="center"
      w={{ base: "xs", md: "xl" }}
      {...props}
    >
      <VStack spacing="2" alignSelf="center" textAlign="center">
        <Text fontSize={{ base: "4xl", sm: "5xl" }}>Hello!</Text>
        <Text fontSize={{ base: "2xl", sm: "4xl" }}>My name is Matthew</Text>
        <Text fontSize={{ base: "xl", sm: "3xl" }}>
          I&apos;m a Frontend Developer
        </Text>
      </VStack>
      <Text
        as="span"
        alignSelf={{ base: "center", sm: "start" }}
        fontSize={{ base: "2xl", sm: "3xl" }}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Text as="span" fontSize="3xl">
            I love to build
          </Text>
          <Box
            display="inline"
            sx={{
              ".Typewriter__wrapper": {
                color: "secondary.500",
              },
            }}
          >
            <Typewriter
              options={{
                strings,
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
        </Stack>
      </Text>
    </VStack>
  );
};
