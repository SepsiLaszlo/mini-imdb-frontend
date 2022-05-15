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
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { NONAME } from "dns";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, basicTheme } from "../../constants";
import { Category } from "../../Dtos";
import { Page } from "../../Page";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage: FC = (props) => {
  let navigate = useNavigate();

  function loginUser() {
    console.log("Started login...");
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;

    axios
      .post(baseURL + "/user/login", {
        email: email,
        password: password
      })
      .then((response: any) => {
        window.localStorage.setItem('userId',response.data.id)
        navigate("/profile");
      });
  }

  return (
    <Page>
      <Text fontSize="3xl" mt={5}>
        Belépés
      </Text>
      <FormControl borderColor="primary" maxW="800px" marginX="auto">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="text" />
        <FormLabel htmlFor="password">Jelszó</FormLabel>
        <Input id="password" type="text" />
        <HStack mt={5} justifyContent="center">
          <Button flexGrow={1} maxW="400px" onClick={loginUser} {...basicTheme}>
            Belépés
          </Button>
        </HStack>
      </FormControl>
      <HStack bgColor="gray.200" p={2} mt={5} justifyContent="space-around"
      maxW="800px" marginX="auto">
        <Text>Még nincs felhasználód?</Text>
        <Button
          as={RouterLink}
          to="/registration"
          {...basicTheme}
          flexGrow={1}
          maxW="400px"
        >
          Regiszráció
        </Button>
      </HStack>
    </Page>
  );
};
