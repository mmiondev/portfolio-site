import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Header, IntroSection } from "@/components";

export const heightMinusHeader = "calc(100vh - 62px)";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Mion</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        direction="column"
        bgColor="primary.600"
        border="solid 1px green"
      >
        <Flex direction="column" bgColor="primary.600">
          <Header />
          <IntroSection />
        </Flex>
      </Flex>
    </>
  );
}
