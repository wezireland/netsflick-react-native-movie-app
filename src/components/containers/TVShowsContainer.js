import React, { useState } from "react";
import { Box } from "native-base";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList";

const TVShowsContainer = ({ navigation, TVShowsOfType }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box mx="auto" mt={0} p={5}>
      {/* <Box mx="auto" mt={10} p={0}> */}
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList navigation={navigation} moviesOfType={TVShowsOfType} />
      )}
    </Box>
  );
};

export default TVShowsContainer;
