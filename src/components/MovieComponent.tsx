import {
  Box,
  Button,
  HStack,
  Link,
  SpaceProps,
  StackDivider,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Page } from "./Page";
import axios from "axios";
import { Movie } from "./Dtos";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { basicTheme } from "./constants";

export type MovieComponentProps = {
 movie: Movie,
 withButton?:boolean
}
export const MovieComponent: FC<MovieComponentProps & SpaceProps> = ({movie, withButton=true, children, ...props}) => {
  return (
    
        <VStack
          {...props}
          bg="gray.200"
          textAlign="start"
          alignItems="flex-start"
          divider={<StackDivider borderColor="gray.400" />}
          spacing={1}
          mb={5}
          p={5}
        >
          <HStack flexWrap="wrap">
            <Text fontSize="2xl">{movie.title}</Text>
            {movie.categories.map((category) => (
              <Tag bg="primary" color="white">
                {category.name}
              </Tag>
            ))}
          </HStack>
          <Text fontSize="lg">Értékelés: {movie.rating}</Text>
          <Text fontSize="lg">Megjelenés: {movie.releaseDate}</Text>
          <Text fontSize="lg">{movie.description}</Text>
          {withButton && (
          <Button as={RouterLink} to={`/movie/${movie.id}`} {...basicTheme}>
            Részletek
          </Button>
          )}
        </VStack>
  );
};
