import { Box, Link, Button, HStack, StackDivider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { NavBarLink } from "./NavBarLink";

export const NavBar = () => (
  <Box bg="primary">
  <HStack spacing="24px" justify='space-between' maxW={800} m={"auto"}>
    <Box>
      <NavBarLink as={RouterLink} to="/">
        miniIMDB
      </NavBarLink>
    </Box>
    <HStack divider={<StackDivider borderColor="gray.200" />}>
      <NavBarLink as={RouterLink} to="/">
        Filemek
      </NavBarLink>
      <NavBarLink as={RouterLink} to="/">
        Kategóriák
      </NavBarLink>
      <NavBarLink as={RouterLink} to="/">
        Belépés
      </NavBarLink>
    </HStack>
  </HStack>
  </Box>
);
