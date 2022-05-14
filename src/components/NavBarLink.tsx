import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NavBarLink = ({to, children,...props}) => (
  <Link {...props} as={RouterLink} to={to} p={2} color="white">
    {children}
  </Link>
);
