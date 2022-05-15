import { Button, HStack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { CategoryWithMovie, MovieWithComments } from "../../Dtos";
import { useParams } from "react-router-dom";
import { baseURL, basicTheme } from "../../constants";
import { MovieComponent } from "../../MovieComponent";
import { Link as RouterLink } from "react-router-dom";
export const CategoryDetailPage: FC = (props) => {
  let params = useParams();

  const [category, setCategory] = useState<CategoryWithMovie>();
  useEffect(() => {
    axios.get(baseURL + `/Category/${params.id}`).then((response) => {
      console.log(response.data);
      setCategory(response.data);
    });
  }, []);

  return (
    <Page>
      {category && <Text fontSize="2xl" marginY={5}>{category.name}</Text>}
      
     
      
      
      {category && category.movies.length>0 && category.movies.map((movie) =>  (
        <MovieComponent movie={movie}></MovieComponent>
      ))}
    </Page>
  );
};
