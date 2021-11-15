import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";

const MovieCard = (props) => {
  const { image, title, release_date, popularity, navigation, overview } =
    props;

  return (
    <Box mb={4}>
      <VStack space={4} flexDirection="row" divider={<Divider />}>
        <Box>
          <Image
            alt={title}
            source={{ uri: `http://image.tmdb.org/t/p/w500${image}` }}
            size={"lg"}
          />
        </Box>
        <Box ml={2} flexShrink={1}>
          <Heading size="xs">{title}</Heading>
          <Text fontSize={12}>Popularity: {popularity}</Text>
          <Text fontSize={12}>Release Date: {release_date}</Text>
          <Button
            backgroundColor="#8F0000"
            minWidth="100%"
            maxWidth="100%"
            onPress={() =>
              navigation.navigate("Show", {
                title: title,
                image: image,
                overview: overview,
                popularity: popularity,
                release_date: release_date,
              })
            }
          >
            More Details
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default MovieCard;
