import {
  Box,
} from "@chakra-ui/react";
import { NavBar } from "./NavBar";

export const Page = ({ children, ...props }) => (
  <Box>
    <NavBar></NavBar>
    <Box textAlign="center" fontSize="xl" paddingX={10}>
      {children}
    </Box>
  </Box>
);
