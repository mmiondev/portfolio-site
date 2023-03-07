import React from "react";
import { scrollToSection, SectionNames } from "@/utils";
import {
  Button,
  Divider,
  HStack,
  Flex,
  useBreakpointValue,
  FlexProps,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const headerHeight = 46;
const headerPaddingY = 8;
export const heightMinusHeader = `calc(100vh - ${
  headerHeight + headerPaddingY
}px)`;

const sectionButtons: SectionNames[] = ["about", "projects", "contact"];

//TODO: button variants depending on what section is active, change bg to transparent afterwards

export const Header = (props: FlexProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      py={`${headerPaddingY}px`}
      justify={{ base: "flex-end", sm: "center" }}
      bgColor="primary.600"
      shadow="xl"
      px="10"
      position="sticky"
      top="0"
      zIndex="banner"
      {...props}
    >
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon color="secondary.500" boxSize="10" />}
            variant="outline"
          />
          <MenuList bgColor="neutral.200">
            {sectionButtons.map((section) => (
              <MenuItem
                as={Button}
                key={section}
                bg="transparent"
                fontWeight="normal"
                color="primary.600"
                variant="iconPrimary"
                onClick={() => scrollToSection(section)}
              >
                {section.toUpperCase()}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing="1">
          {sectionButtons.map((section, index) => (
            <React.Fragment key={section}>
              <Button
                size="sm"
                fontWeight="normal"
                variant="iconSecondary"
                onClick={() => scrollToSection(section)}
              >
                {section.toUpperCase()}
              </Button>
              {index !== sectionButtons.length - 1 && (
                <Divider
                  orientation="vertical"
                  height={`${headerHeight}px`}
                  borderColor="secondary.500"
                />
              )}
            </React.Fragment>
          ))}
        </HStack>
      )}
    </Flex>
  );
};
