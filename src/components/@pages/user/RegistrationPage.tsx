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

export const RegistrationPage: FC = (props) => {
  let navigate = useNavigate();

  function registerUser() {
    console.log("Started saving movie...");
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;

    axios
      .post(baseURL + "/User", {
        name: name,
        email: email,
        password: password
      })
      .then((response: any) => {
        navigate("/login");
      });
  }

  return (
    <Page>
      <Text fontSize="3xl" mt={5}>
        Regisztráció
      </Text>
      <FormControl borderColor="primary" maxW="800px" marginX="auto">
      <FormLabel htmlFor="name">Név</FormLabel>
        <Input id="name" type="text" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="text" />
        <FormLabel htmlFor="password">Jelszó</FormLabel>
        <Input id="password" type="password" />
        <HStack mt={5} justifyContent="center">
          <Button flexGrow={1} maxW="400px" onClick={registerUser} {...basicTheme}>
            Regisztráció
          </Button>
        </HStack>
      </FormControl>
    </Page>
  );
};
