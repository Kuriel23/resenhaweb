import { Text, Link } from '@chakra-ui/react';

import { ActiveLink } from '../../forward/ActiveLink';

export function NavLink({ children, href, ...rest }) {
  return (
    <ActiveLink href={href} passHref>
      <Link
        display="flex"
        align="center"
        style={{ textDecoration: 'none' }}
        {...rest}
      >
        <Text
          ml="4"
          fontSize="lg"
          fontFamily="Barlow"
          fontWeight="medium"
          _hover={{ color: 'white' }}
        >
          {children}
        </Text>
      </Link>
    </ActiveLink>
  );
}
