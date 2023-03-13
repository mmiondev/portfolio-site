import {
  Box,
  Button,
  Flex,
  FlexProps,
  Img,
  Link,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ScrollButton } from "../reusable/scroll-button";
import hosekiWebsite from "../../assets/hoseki-website.png";
import { RevealInView } from "../reusable/reveal-in-view";

export const ProjectsSection = (props: FlexProps) => {
  const [overlayDisplay, setOverlayDisplay] = useState<boolean>(false);
  return (
    <RevealInView>
      <Flex
        as="section"
        direction="column"
        justify="space-between"
        align="center"
        px="2"
        id="projects"
        bgColor="secondary.500"
        h="100vh"
        {...props}
      >
        <VStack spacing="10" boxSize="100%">
          <Text
            mt={{ base: "15%", md: "5%" }}
            textAlign="center"
            fontSize="4xl"
            color="primary.600"
          >
            Recent Projects
          </Text>
          <Box
            w={{
              base: "300px",
              sm: "400px",
              md: "500px",
              lg: "600px",
              xl: "700px",
            }}
            borderRadius="lg"
            transition="transform 1s"
            overflow="hidden"
            zIndex="docked"
            position="relative"
            onMouseOver={() => setOverlayDisplay(true)}
            onMouseOut={() => setOverlayDisplay(false)}
          >
            <Img
              src={hosekiWebsite.src}
              transition="transform 1s"
              transform={overlayDisplay ? "scale(1.2)" : "scale(1)"}
              borderRadius="lg"
            />
            {overlayDisplay && (
              <Flex
                position="absolute"
                direction="column"
                top="0"
                bottom="0"
                left="0"
                right="0"
                ml="auto"
                mr="auto"
                bgColor="rgba(0,0,0,0.7)"
                align="center"
                justify="space-around"
                textAlign={{ base: "center", sm: "start" }}
                px={{ base: "2", sm: "8" }}
              >
                <Text fontSize={{ sm: "xl" }}>
                  Developed Hoseki user facing web app and static site from the
                  ground up on a team of two engineers using React.js, GraphQL
                  and Typescript.
                </Text>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  align="center"
                  justify="space-evenly"
                  w="100%"
                >
                  <ScaleFade in={overlayDisplay}>
                    <Link
                      href="https://my.hoseki.app"
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      <Button
                        size={{ base: "sm", sm: "md" }}
                        variant="tertiary"
                      >
                        Hoseki Webapp
                      </Button>
                    </Link>
                  </ScaleFade>
                  <ScaleFade in={overlayDisplay}>
                    <Link
                      href="https://www.hoseki.app/"
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      <Button
                        size={{ base: "sm", sm: "md" }}
                        variant="tertiary"
                      >
                        Hoseki Website
                      </Button>
                    </Link>
                  </ScaleFade>
                </Stack>
              </Flex>
            )}
          </Box>
        </VStack>
        <ScrollButton
          section="contact"
          variant="iconTertiary"
          aria-label="scroll to contact section"
        />
      </Flex>
    </RevealInView>
  );
};
