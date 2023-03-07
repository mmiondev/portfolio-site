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

const iconProps = { color: "primary.600", boxSize: "10" };
export const ContactSection = (props: FlexProps) => {
  return (
    <Flex
      as="section"
      direction="column"
      id="contact"
      bgColor="neutral.200"
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
        <HStack>
          <Link href="https://github.com/mmiondev" isExternal>
            <AnimatedIcon icon={GithubIcon} {...iconProps} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/matthew-mion-813b75148/"
            isExternal
          >
            <AnimatedIcon icon={LinkedinIcon} {...iconProps} />
          </Link>
          <Button
            variant="iconSecondary"
            onClick={() =>
              window.open(
                String(`mailto:mmiondev^gmail.com`).replace("^", "@"),
                "_self"
              )
            }
          >
            <AnimatedIcon icon={EmailIcon} {...iconProps} />
          </Button>
          <Link
            href="https://docs.google.com/document/d/141IMvHtL-4Wlm6-RK3bnHdmzMnRTconPh_LfeD4nblw/edit?usp=sharing"
            isExternal
          >
            <AnimatedIcon icon={PaperIcon} {...iconProps} />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};
