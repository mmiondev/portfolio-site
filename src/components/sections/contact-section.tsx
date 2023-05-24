import React from "react";
import {
  Button,
  Flex,
  FlexProps,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { GithubIcon, LinkedinIcon, PaperIcon } from "../icons";
import { AnimatedIcon } from "../reusable";
import { RevealInView } from "../reusable/reveal-in-view";

const iconProps = { color: "primary.600", boxSize: "10" };
export const ContactSection = (props: FlexProps) => {
  return (
    <RevealInView>
      <Flex
        as="section"
        direction="column"
        id="contact"
        bgColor="neutral.300"
        py={{ base: "10%", sm: "2%" }}
        {...props}
      >
        <VStack color="primary.600" fontSize="xl" spacing="8">
          <Text fontSize={"2xl"} fontWeight="semibold">
            Contact me!
          </Text>
          <VStack>
            <Text>Matthew Mion</Text>
            <HStack>
              <EmailIcon />
              <Text>mmiondev@gmail.com</Text>
            </HStack>
          </VStack>
          <HStack spacing="4">
            <VStack>
              <Link href="https://github.com/mmiondev" isExternal>
                <AnimatedIcon icon={GithubIcon} {...iconProps} />
              </Link>
              <Text fontSize="sm">Github</Text>
            </VStack>
            <VStack>
              <Link
                href="https://www.linkedin.com/in/matthew-mion-813b75148/"
                isExternal
              >
                <AnimatedIcon icon={LinkedinIcon} {...iconProps} />
              </Link>
              <Text fontSize="sm">LinkedIn</Text>
            </VStack>
            <VStack>
              <Button
                variant="iconSecondary"
                py="0"
                px="0"
                onClick={() =>
                  window.open(
                    String(`mailto:mmiondev^gmail.com`).replace("^", "@"),
                    "_self"
                  )
                }
              >
                <AnimatedIcon icon={EmailIcon} {...iconProps} />
              </Button>
              <Text fontSize="sm">Email</Text>
            </VStack>
            <VStack>
              <Link
                href="https://drive.google.com/file/d/1ya6SBPg557RiLxZoBwWwJU-DOhayqcI9/view?usp=sharing"
                isExternal
              >
                <AnimatedIcon icon={PaperIcon} {...iconProps} />
              </Link>
              <Text fontSize="sm">Resume</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </RevealInView>
  );
};
