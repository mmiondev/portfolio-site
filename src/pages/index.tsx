import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import {
  AboutMeSection,
  ProjectsSection,
  Header,
  IntroSection,
  ContactSection,
  ParticlesBackground,
} from "@/components";
import { RevealInView } from "@/components/reusable/reveal-in-view";

//TODO: add fade as component mounts
export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Mion</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" direction="column" bgColor="primary.600">
        <Flex direction="column" bgColor="primary.600">
          <ParticlesBackground />
          <Header />
          <IntroSection />
          <AboutMeSection />
          <ProjectsSection />
          <ContactSection />
        </Flex>
      </Flex>
    </>
  );
}
