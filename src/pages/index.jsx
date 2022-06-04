import { Footer } from "../components/common/Footer";
import { SEO } from "../components/forward/SEO";
import { Container } from "../styles/pages/home";
import { Header } from "../components/common/Header";
import { Section } from "../styles/pages/home";
import Lottie from "react-lottie";
import discordJson from "../../public/discord.json";
import {
  useBreakpointValue,
  Text,
  Heading,
  Box,
  Button,
  Link,
  HStack,
} from "@chakra-ui/react";

export default function Home() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <SEO />

      <Container>
        <Section>
          <Header />
          <Box mt="20px">
          <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: discordJson,
                }}
                isClickToPauseDisabled
                style={{ maxWidth: "500px", cursor: "default" }}
                display={{ base: "none", lg: "initial" }}
              />
              </Box>
          <Heading color="white" align="center" p="15px">
            Resenha, um simples servidor do Discord!
          </Heading>
          <HStack m="auto" mb="20px">
            <Link href="/discord">
            <Button
              bg="#454FBF"
              _hover={{ background: "indigo" }}
              color="white"
            >
              Convite!
            </Button>
            </Link>
            <Link href="/sobre">
            <Button bg="yellow" _hover={{ background: "yellow.300" }}>
              Conte-me mais!
            </Button>
            </Link>
          </HStack>
        </Section>
        <Footer />
      </Container>
    </>
  );
}
