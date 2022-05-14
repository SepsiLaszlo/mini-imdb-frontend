import {
  Box,
  Button,
  HStack,
  Link,
  StackDivider,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { Movie } from "../../Dtos";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { BasicTheme } from "../../constants";
import { MovieComponent } from "./MovieComponent";
export const MovieIndexPage: FC = (props) => {
  const baseURL = "http://localhost:5000/api/Movies";

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <Page>
      <Text fontSize="3xl" mb={5}>
        {" "}
        Movies
      </Text>
      {movies.map((movie) => (
       <MovieComponent movie={movie}></MovieComponent>
      ))}
    </Page>
  );
};
