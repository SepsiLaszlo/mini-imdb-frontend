import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  StackDivider,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "../../Page";
import axios from "axios";
import { MovieWithComments, User } from "../../Dtos";
import { useParams } from "react-router-dom";
import { baseURL, basicTheme } from "../../constants";
import { MovieComponent } from "../../MovieComponent";
export const MovieDetailPage: FC = (props) => {
  let params = useParams();

  useEffect(() => {
    if (user) {
      return;
    }
    const userId = window.localStorage.getItem("userId");
    if (userId === null) {
      return;
    }

    axios.get(baseURL + "/User/" + userId).then((response) => {
      setUser(response.data);
    });
  });
  const [user, setUser] = useState<User>();

  const [movie, setMovies] = useState<MovieWithComments>();
  useEffect(() => {
    axios.get(baseURL + `/Movies/${params.id}`).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);
  const toast = useToast();

  function sendComment() {
    console.log("Send comment...");
    const comment = (document.getElementById("comment") as HTMLInputElement)
      ?.value;

    axios
      .post(baseURL + "/comments", {
        text: comment,
        userId: user?.id,
        movieId: movie?.id,
      })
      .then((response: any) => {
        let updatedComments = movie?.comments;
        if (updatedComments && user && movie) {
          updatedComments.push({
            id: 1,
            text: comment,
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
              password: user.password,
            },
          });
          movie.comments=updatedComments
          setMovies(movie)
        }

        toast({
          title: "Komment elküldve!",
          description: "A kommentedet sikeresen elmentettük!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  }

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
        Kommentek:
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

      {!user && <Text>Kommentek írásához jelentkezz be!</Text>}
      {user && (
        <Box maxWidth="1000px" marginX="auto">
          <HStack>
            <Text>Komment</Text>
          </HStack>
          <HStack borderColor="primary" flexGrow={1}>
            <Input id="comment" type="text" borderWidth={3} flexGrow={1} />
            <Button
              flexGrow={1}
              px={10}
              maxW="500px"
              {...basicTheme}
              onClick={sendComment}
            >
              Komment beküldése
            </Button>
          </HStack>
        </Box>
      )}
    </Page>
  );
};
