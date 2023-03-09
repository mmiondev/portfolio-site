import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  HStack,
  Img,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import hosekiLogo from "../assets/hoseki-logo.jpg";

const tabProps = { _selected: { color: "tertiary.500" } };

const recentWorkTaskList = [
  "Developed Hoseki user facing dashboard from the ground up on a team of two engineers using React.js, GraphQL and Typescript",

  "Created custom component library using ChakraUI that consisted of 100+ components used across suite of apps, iframes and static sites",

  "Implemented automated UI testing using Storybook to prevent bugs and test components in isolation, reducing development time by 20%",
];

// TODO: fix date display in mobile view
const RecentWorkTab = () => {
  return (
    <TabPanel>
      <HStack>
        <Img
          boxSize="10"
          borderRadius="md"
          src={hosekiLogo.src}
          alt="Hoseki logo"
          alignSelf="start"
        />
        <VStack align="start">
          <HStack w="100%" justify="space-between">
            <Text fontSize={{ base: "2xl", sm: "3xl" }}>Hoseki</Text>
            <Text fontSize="xs">Dec 2021-Feb 2023</Text>
          </HStack>
          <Text fontSize="xl">Frontend Engineer</Text>
          <List spacing={3} maxH="250px" overflow="auto">
            {recentWorkTaskList.map((task) => (
              <ListItem key="task">
                <ListIcon as={ChevronRightIcon} />
                {task}
              </ListItem>
            ))}
          </List>
        </VStack>
      </HStack>
    </TabPanel>
  );
};

const skillsToolsList = [
  "SKILLS & TOOLS",
  "Languages:",
  "TypeScript, JavaScript, HTML, CSS/SCSS, GraphQL, SQL",
  "Libraries & Frameworks:",
  " React, Next.js, Electron.js, ChakraUI, Express, Node, Storybook",
  " Testing:",
  "Jest, Cypress",
  "Concepts & Tools:",
  "Responsive Design, Git, Figma, Linear, Jira, Agile, OOP, TDD",
];

const SkillsToolsTab = () => {
  return (
    <TabPanel>
      <VStack align="start" px="2" maxH="330px" overflow="auto">
        {skillsToolsList.map((item, i) => (
          <Text
            color={i % 2 ? "tertiary.500" : "secondary.500"}
            fontSize={i % 2 || i === 0 ? "lg" : "md"}
            borderBottom={i === 0 ? "solid 1px" : "none"}
            key={item}
          >
            {item}
          </Text>
        ))}
      </VStack>
    </TabPanel>
  );
};

export const AboutMeCardTabs = () => {
  return (
    <Tabs variant="enclosed" isFitted color="secondary.500" {...tabProps}>
      <TabList>
        <Tab {...tabProps}>Recent Work</Tab>
        <Tab {...tabProps}>Skills & Tools</Tab>
      </TabList>
      <TabPanels>
        <RecentWorkTab />
        <SkillsToolsTab />
      </TabPanels>
    </Tabs>
  );
};
