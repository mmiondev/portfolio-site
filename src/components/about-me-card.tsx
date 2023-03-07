import React from "react";
import { Flex } from "@chakra-ui/react";
import { AboutMeCardHeader } from "./about-me-card-header";
import { AboutMeCardTabs } from "./about-me-card-tabs";
import { Card } from "./reusable";

export const AboutMeCard = () => {
  return (
    <Card>
      <AboutMeCardHeader />
      <AboutMeCardTabs />
    </Card>
  );
};
