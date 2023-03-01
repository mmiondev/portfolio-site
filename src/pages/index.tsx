import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Header } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Mion</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex direction="column" minH="100vh" bgColor="primary.600">
          <Header />
        </Flex>
      </main>
    </>
  );
}
