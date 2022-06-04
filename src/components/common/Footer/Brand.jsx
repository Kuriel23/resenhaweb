import { VStack, Text, Link } from "@chakra-ui/react";

export function Brand() {
  return (
    <VStack spacing="6" textAlign={{base: "center", lg: "unset"}}>
      <VStack spacing="1" align="unset">
        <Text fontFamily="Barlow" fontSize="24" color="yellow">
          Resenha
        </Text>
        <Text fontFamily="sans-serif" fontSize="16" color="white">
          © {new Date().getFullYear()} Resenha - Design feito por <Link href="https://kurieldev.tk" color="yellow" _hover={{color: "yellow.300"}}>kurieldev.tk</Link>
        </Text>
      </VStack>
    </VStack>
  );
}
