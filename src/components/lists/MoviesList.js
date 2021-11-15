import { FlatList } from "native-base";
import React from "react";
import MovieCard from "../listItems/MovieCard";

const MoviesList = ({ navigation, moviesOfType }) => {
  return (
    <FlatList
      data={moviesOfType}
      renderItem={({ item }) => (
        <MovieCard
          navigation={navigation}
          keyExtractor={item.id}
          key={item.id}
          image={item.poster_path}
          title={item.title ? item.title : item.name}
          overview={item.overview}
          release_date={
            item.release_date ? item.release_date : item.first_air_date
          }
          popularity={item.popularity}
        />
      )}
      keyExtractor={(item) => item.id}
      key={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MoviesList;
