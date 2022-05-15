import {
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { MovieWithComments } from "../../Dtos";
import { useParams } from "react-router-dom";
import { baseURL } from "../../constants";
import { MovieComponent } from "../../MovieComponent";
export const MovieDetailPage: FC = (props) => {
  let params = useParams();

  const [movie, setMovies] = useState<MovieWithComments>();
  useEffect(() => {
    axios.get(baseURL + `/Movies/${params.id}`).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <Page>
      {movie && (
        <MovieComponent
          movie={movie}
          withButton={false}
          mt={5}
        ></MovieComponent>
      )}

      <Text fontSize="xl" mb={5}>
        Kommnetek:
      </Text>
      {(!movie || (movie && movie.comments.length == 0)) && (
        <Text fontSize="lg">Nincsenek kommentek</Text>
      )}
      {movie &&
        movie.comments &&
        movie.comments.map((comment) => (
          <VStack
            bg="gray.200"
            textAlign="start"
            alignItems="flex-start"
            divider={<StackDivider borderColor="gray.400" />}
            spacing={1}
            mb={5}
            p={5}
          >
            <Text>{comment.user.name}</Text>
            <Text>{comment.text}</Text>
          </VStack>
        ))}
    </Page>
  );
};
