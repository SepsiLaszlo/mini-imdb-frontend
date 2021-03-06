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
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, basicTheme } from "../../constants";
import { Category } from "../../Dtos";
import { Page } from "../../Page";

export const MovieNewPage: FC = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get(baseURL + "/Category").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);
  let selectedCategories: any = [];
  function toggleCategory(category) {
    const selected = selectedCategories.filter((c) => c == category);
    if (selected.length != 0) {
      selectedCategories = selectedCategories.filter((c) => c != category);
    } else {
      selectedCategories.unshift(category);
    }
    return;
  }

  let navigate = useNavigate();

  function saveMovie() {
    console.log("Started saving movie...");
    const title = (document.getElementById("title") as HTMLInputElement)?.value;
    const rating = (document.getElementById("rating") as HTMLInputElement)
      ?.value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    )?.value;
    const releaseDate = (
      document.getElementById("releaseDate") as HTMLInputElement
    )?.value;

    axios
      .post(baseURL + "/Movies", {
        title: title,
        rating: rating,
        description: description,
        releaseDate: releaseDate,
        categories: selectedCategories,
      })
     
      .then((response: any) => {

        selectedCategories.forEach((cId) => {
          axios.post(baseURL + "/Movies/MovieCategory",
           { movieId: response.data.id, categoryId:cId}).then();
        });
        navigate("/movie/" + response.data.id);

      });
  }

  return (
    <Page>
      <Text fontSize="3xl" mt={5}>
        ??j Film l??trehoz??sa
      </Text>
      <FormControl borderColor="primary" maxW="800px" marginX="auto">
        <FormLabel htmlFor="title">C??m</FormLabel>
        <Input id="title" type="text" />
        <FormLabel htmlFor="rating">??rt??kel??s</FormLabel>
        <NumberInput id="rating" step={0.1} defaultValue={5} min={0} max={5}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel htmlFor="releaseDate">Megjelen??s</FormLabel>
        <Input id="releaseDate" type="date" />

        <FormLabel htmlFor="description">Le??r??s</FormLabel>
        <Input id="description" type="text" />

        {categories &&
          categories.map((category) => (
            <VStack mt={5} alignItems="flex-start">
              <Checkbox
              colorScheme="purple"
                className="checkbox"
                value={category.id}
                onChange={() => {
                  toggleCategory(category.id);
                }}
              >
                {category.name}
              </Checkbox>
            </VStack>
          ))}
        <HStack mt={5} justifyContent="center">
          <Button flexGrow={1} maxW="400px" onClick={saveMovie} {...basicTheme}>
            L??trehoz??s
          </Button>
        </HStack>
      </FormControl>
    </Page>
  );
};
