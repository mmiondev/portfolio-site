import {
  Button,
  Divider,
  HStack,
  Flex,
  useBreakpointValue,
  FlexProps,
} from "@chakra-ui/react";
import React from "react";
const sectionButtons = [
  { name: "ABOUT" },
  { name: "PROJECTS" },
  { name: "CONTACT" },
];

export const Header = (props: FlexProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      {...props}
      py="2"
      justify="center"
      bg="transparent"
      shadow="lg"
      position="sticky"
      top="0"
    >
      <HStack spacing="1">
        {sectionButtons.map((section, index) => (
          <React.Fragment key={section.name}>
            <Button size="sm">{section.name}</Button>
            {index !== sectionButtons.length - 1 && (
              <Divider
                orientation="vertical"
                height="46"
                borderColor="secondary.500"
              />
            )}
          </React.Fragment>
        ))}
      </HStack>
    </Flex>
  );
};
