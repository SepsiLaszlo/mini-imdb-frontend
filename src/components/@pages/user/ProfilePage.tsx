import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { NONAME } from "dns";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, basicTheme } from "../../constants";
import { Category, User } from "../../Dtos";
import { Page } from "../../Page";
import { Link as RouterLink } from "react-router-dom";

export const ProfilePage: FC = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }
    const userId = window.localStorage.getItem("userId");
    if (userId === null) {
      return;
    }

    axios.get(baseURL + "/User/" + userId).then((response) => {
      setUser(response.data);
    });
  });
  const [user, setUser] = useState<User>();
  const toast = useToast();

  function updateUser() {
    console.log("Started login...");
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;

    axios
      .put(baseURL + "/user/" + user?.id, {
        name: name,
        email: email,
        password: password,
      })
      .then((response: any) => {
        toast({
          title: "Sikeres frisstés!",
          description: "A profilod módosítása megtörtént!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/profile");
      });
  }

  function logoutUser() {
    window.localStorage.removeItem("userId");
    navigate("/");
  }

  return (
    <Page>
      <Text fontSize="3xl" mt={5}>
        Profilom
      </Text>
      {user && (
        <FormControl borderColor="primary" maxW="800px" marginX="auto">
          <FormLabel htmlFor="name">Név</FormLabel>
          <Input defaultValue={user.name} id="name" type="text" />
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input defaultValue={user.email} id="email" type="text" />
          <FormLabel htmlFor="password">Jelszó</FormLabel>
          <Input defaultValue={user.password} id="password" type="text" />
          <HStack mt={5} justifyContent="center">
            <Button
              flexGrow={1}
              maxW="400px"
              onClick={updateUser}
              {...basicTheme}
            >
              Frissítés
            </Button>
          </HStack>
        </FormControl>
      )}

      <HStack
        bgColor="gray.200"
        p={2}
        mt={5}
        justifyContent="space-around"
        maxW="800px"
        marginX="auto"
      >
        <Text>Szeretnél kijelentkezni?</Text>
        <Button onClick={logoutUser} {...basicTheme} flexGrow={1} maxW="400px">
          Kijelentkezés
        </Button>
      </HStack>
    </Page>
  );
};
