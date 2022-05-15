import { Box, HStack, StackDivider } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { baseURL } from "./constants";
import { User } from "./Dtos";
import { NavBarLink } from "./NavBarLink";

export const NavBar: FC = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if(user) {return;}
    const userId = window.localStorage.getItem("userId");
    if (userId === null) {
      return;
    }

    axios.get(baseURL + "/User/" + userId).then((response) => {
      setUser(response.data);
    });
  });
  const [user, setUser] = useState<User>();
  return (
    <Box bg="primary">
      <HStack spacing="24px" justify="space-between" maxW={1000} m={"auto"}>
        <Box>
          <NavBarLink as={RouterLink} to="/">
            miniIMDB
          </NavBarLink>
        </Box>
        <HStack divider={<StackDivider borderColor="gray.200" />}>
          <NavBarLink as={RouterLink} to="/movie">
            Filmek
          </NavBarLink>
          <NavBarLink as={RouterLink} to="/category">
            Műfajok
          </NavBarLink>
          {!user && (
            <NavBarLink as={RouterLink} to="/login">
              Belépés
            </NavBarLink>
          )}

          {user && (
            <NavBarLink as={RouterLink} to="/profile">
              {user.name}
            </NavBarLink>
          )}
        </HStack>
      </HStack>
    </Box>
  );
};
