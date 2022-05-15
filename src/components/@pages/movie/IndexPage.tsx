import {
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { Movie } from "../../Dtos";
import { baseURL, basicTheme } from "../../constants";
import { MovieComponent } from "../../MovieComponent";
import {Link as RouterLink} from "react-router-dom"
export const MovieIndexPage: FC = (props) => {

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    axios.get(baseURL+"/Movies").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <Page>
      <Text fontSize="3xl" mb={5}>
        Filmek
      </Text>

    <HStack mb={5}>
      <Button as={RouterLink} to='/movie/new'
      {...basicTheme}
      flexGrow={1} maxW="400px" >Film felvétele</Button>
    </HStack>
      
      {movies.map((movie) => (
       <MovieComponent movie={movie}></MovieComponent>
      ))}
    </Page>
  );
};
