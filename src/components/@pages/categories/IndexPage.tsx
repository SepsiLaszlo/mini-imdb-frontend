import { Button, HStack, Link, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { Category, Movie } from "../../Dtos";
import { baseURL, basicTheme } from "../../constants";
import { MovieComponent } from "../../MovieComponent";
import { Link as RouterLink } from "react-router-dom";
export const CategoryIndexPage: FC = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    axios.get(baseURL + "/Category").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

  return (
    <Page>
      <Text fontSize="3xl" mb={5}>
        Műfajok
      </Text>
      <HStack mb={5}>
      <Button as={RouterLink} to='/category/new'
      {...basicTheme}
      flexGrow={1} maxW="400px" >Műfaj felvétele</Button>
    </HStack>
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        {categories.map((category) => (
          <Link as={RouterLink} to={"/category/" + category.id}>{category.name}</Link>
        ))}
      </VStack>
    </Page>
  );
};
