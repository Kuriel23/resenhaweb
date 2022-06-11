import { Footer } from "../components/common/Footer";
import { SEO } from "../components/forward/SEO";
import { Container } from "../styles/pages/home";
import { Header } from "../components/common/Header";
import { Section } from "../styles/pages/home";
import Lottie from "react-lottie";
import formsJson from "../../public/forms.json";
import {
  Text,
  Heading,
  Box,
  Image,
  Center,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Forms() {
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
                animationData: formsJson,
              }}
              isClickToPauseDisabled
              style={{ maxWidth: "500px", cursor: "default" }}
              display={{ base: "none", lg: "initial" }}
            />
          </Box>
          <Heading mt="-50px" color="white" align="center" p="15px">
            Formulários
          </Heading>
          <Text color="gray.300" align="center" mb="10px">
            Clique na função que gostaria de exercer para realizar um
            formulário.
          </Text>
          <Box bg="yellow" ml="auto" mr="auto" w="30%" h="1px" mb="15px" />
          <Center>
            <Grid
              w={{ base: "90%", xl: "59%" }}
              align="center"
              templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
              gap={{ base: 0, xl: 6 }}
              mb="20px"
            >
              <GridItem mb="10px">
                <Link
                  href="/forms/mod"
                  isExternal
                >
                  <Box
                    borderBottomRadius={50}
                    borderColor="yellow"
                    borderWidth="1px"
                  >
                    <Image src="https://cdn.discordapp.com/attachments/913540708420419656/959767108605071400/linha_8-3-1-3-1-1-1-1-2-1-1-1-1-1.gif" />
                    <Box p={3} borderBottomRadius={50} bg="#2C2F33">
                      <Image src="/moderação.gif" w="150px" />
                      <Text color="white" fontSize="xl">
                        Moderação
                      </Text>
                      <Text color="gray.300" fontSize="lg">
                        Quer se responsabilizar quando o assunto é punir
                        usuários rebeldes? Então seja O Justiceiro do servidor e
                        a sua tarefa será punir os rebeldes, responder dúvidas,
                        sempre mantendo a ordem, paz e amor no servidor!
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </GridItem>
              <GridItem mb="10px">
                <Link href="/forms/rec" isExternal>
                <Box
                  borderBottomRadius={50}
                  borderColor="yellow"
                  borderWidth="1px"
                >
                  <Image src="https://cdn.discordapp.com/attachments/913540708420419656/959767108605071400/linha_8-3-1-3-1-1-1-1-2-1-1-1-1-1.gif" />
                  <Box p={3} borderBottomRadius={50} bg="#2C2F33">
                    <Image src="/recepcionista.gif" w="150px" />
                    <Text color="white" fontSize="xl">
                      Recepcionista
                    </Text>
                    <Text color="gray.300" fontSize="lg">
                      Receba as pessoas do nosso servidor com muito carinho e
                      atenção, responda a dúvidas que pessoas novas têm e você
                      esteja apto a responder e por fim ainda{" "}
                      <Text as="s">dê amor</Text> seja feliz com os novos
                      membros.
                    </Text>
                  </Box>
                </Box>
                </Link>
              </GridItem>
              <GridItem mb="10px">
                <Link href="/forms/mc" isExternal>
                <Box
                  borderBottomRadius={50}
                  borderColor="yellow"
                  borderWidth="1px"
                >
                  <Image src="https://cdn.discordapp.com/attachments/913540708420419656/959767108605071400/linha_8-3-1-3-1-1-1-1-2-1-1-1-1-1.gif" />
                  <Box p={3} borderBottomRadius={50} bg="#2C2F33">
                    <Image src="/movchat.gif" w="150px" />
                    <Text color="white" fontSize="xl">
                      Mov. Chat
                    </Text>
                    <Text color="gray.300" fontSize="lg">
                      A função de Mov. Chat é preciso ser talentoso na arte de
                      chamar atenção nos chats, principalmente em horas de pico,
                      estamos sempre á procura de pessoas que queiram exercer
                      essa função!
                    </Text>
                  </Box>
                </Box>
                </Link>
              </GridItem>
              <GridItem mb="10px">
                <Link href="/forms/mv" isExternal>
                <Box
                  borderBottomRadius={50}
                  borderColor="yellow"
                  borderWidth="1px"
                >
                  <Image src="https://cdn.discordapp.com/attachments/913540708420419656/959767108605071400/linha_8-3-1-3-1-1-1-1-2-1-1-1-1-1.gif" />
                  <Box p={3} borderBottomRadius={50} bg="#2C2F33">
                    <Image src="/movcall.gif" w="150px" />
                    <Text color="white" fontSize="xl">
                      Mov. Call
                    </Text>
                    <Text color="gray.300" fontSize="lg">
                      A função de Mov. Call é preciso também ter um certo
                      talento em chamar atenção das pessoas por voz, será que
                      você consegue exercer esta função e aceitar o desafio?
                    </Text>
                  </Box>
                </Box>
                </Link>
              </GridItem>
              <GridItem mb="10px">
                <Link
                  href="/forms/sp"
                  isExternal
                >
                  <Box
                    borderBottomRadius={50}
                    borderColor="yellow"
                    borderWidth="1px"
                  >
                    <Image src="https://cdn.discordapp.com/attachments/913540708420419656/959767108605071400/linha_8-3-1-3-1-1-1-1-2-1-1-1-1-1.gif" />
                    <Box p={3} borderBottomRadius={50} bg="#2C2F33">
                      <Image src="/partner.gif" w="150px" />
                      <Text color="white" fontSize="xl">
                        Fechador de Parceria
                      </Text>
                      <Text color="gray.300" fontSize="lg">
                        Então, você quer se responsabilizar pelas parcerias do nosso servidor, é? Este é um cargo que poderá exigir um pouco de esforço e tempo, mas sempre acaba valendo a pena, acredito em você, soldado!
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </GridItem>
            </Grid>
          </Center>
        </Section>
        <Footer />
      </Container>
    </>
  );
}
