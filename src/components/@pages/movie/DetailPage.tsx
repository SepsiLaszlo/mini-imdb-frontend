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
import { Movie, MovieWithComments } from "../../Dtos";
import { Link as RouterLink, useParams } from "react-router-dom";
import { BasicTheme } from "../../constants";
import { MovieComponent } from "./MovieComponent";
export const MovieDetailPage: FC = (props) => {
  const baseURL = "http://localhost:5000/api/Movies";
  let params = useParams();

  const [movie, setMovies] = useState<MovieWithComments>();
  useEffect(() => {
    axios.get(baseURL + `/${params.id}`).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <Page>
      {movie && (
        <MovieComponent movie={movie} withButton={false}></MovieComponent>
      )}
    </Page>
  );
};
