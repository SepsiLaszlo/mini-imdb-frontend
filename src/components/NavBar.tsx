import {
  Box,
  Link,
  Button,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"


export const NavBar = () => (
    <Box textAlign="center" fontSize="xl">
      <Button colorScheme='blue'>btn</Button>
      <Link as={RouterLink} to="/movie">Movie</Link>
    </Box>
)
