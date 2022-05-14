import {
  Box,
} from "@chakra-ui/react";
import { NavBar } from "./NavBar";

export const Page = ({ children, ...props }) => (
  <>
    <NavBar></NavBar>
    <Box textAlign="center" fontSize="xl">
      Page
      {children}
    </Box>
  </>
);
