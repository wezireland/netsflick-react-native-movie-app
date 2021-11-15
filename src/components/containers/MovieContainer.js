import React from "react";
import { Box, Center, Text, Image } from "native-base";

const MovieContainer = ({
  title,
  image,
  overview,
  popularity,
  release_date,
}) => {
  return (
    <>
      <Box width="100%">
        <Center py={10}>
          <Text fontSize={24} fontWeight="700">
            {title}
          </Text>
          <Image
            mt={10}
            alt={title}
            source={{ uri: `http://image.tmdb.org/t/p/w500${image}` }}
            size={"2xl"}
          />
          <Text px={10} mt={10}>
            {overview}
          </Text>
          <Text mt={10} fontWeight="600" fontSize={18}>
            Popularity: {popularity} | Release Date: {release_date}
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default MovieContainer;
