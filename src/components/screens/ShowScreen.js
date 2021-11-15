import React from "react";
import MovieContainer from "../containers/MovieContainer";

const ShowScreen = ({ navigation, route }) => {
  const { title, image, overview, popularity, release_date } = route.params;

  return (
    <MovieContainer
      navigation={navigation}
      title={title}
      image={image}
      overview={overview}
      popularity={popularity}
      release_date={release_date}
    />
  );
};
export default ShowScreen;
