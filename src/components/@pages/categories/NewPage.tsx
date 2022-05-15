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

export const CategoryNewPage: FC = (props) => {
  let navigate = useNavigate();

  function saveMovie() {
    console.log("Started saving movie...");
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    

    axios
      .post(baseURL + "/Category", {
        name: name,
      })
      .then((response:any) => {
        navigate("/category/"+response.data.id);
      });
  }

  return (
    <Page>
      <Text fontSize="3xl" mt={5}>
        Új Film létrehozása
      </Text>
      <FormControl borderColor="primary" maxW="800px" marginX="auto">
        <FormLabel htmlFor="name">Név</FormLabel>
        <Input id="name" type="text" />
        <HStack mt={5} justifyContent="center">
          <Button flexGrow={1} maxW="400px" onClick={saveMovie} {...basicTheme}>
            Létrehozás
          </Button>
        </HStack>
      </FormControl>
    </Page>
  );
};
