import { HStack, VStack, Center } from "@chakra-ui/react";

import { links } from "../../../data/links";

import { NavLink } from "./NavLink";

export function NavBar() {
  return (
    <>
      <HStack as="nav" spacing="7" display={{ base: "none", lg: "contents" }}>
        {links.map(({ title, href, external = false }) => (
          <NavLink key={title} href={href} isExternal={external}>
            {title}
          </NavLink>
        ))}
      </HStack>
      <VStack
        as="navmobile"
        spacing="3"
        display={{ base: "contents", lg: "none" }}
      >
        {links.map(({ title, href, external = false }) => (
          <Center key={title}>
            <NavLink key={title} href={href} isExternal={external}>
              {title}
            </NavLink>
          </Center>
        ))}
      </VStack>
    </>
  );
}
