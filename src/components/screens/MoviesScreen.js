import React, { useState, useEffect } from "react";
import { View, Box, Select } from "native-base";
import MoviesContainer from "../containers/MoviesContainer";
import { API_KEY, BASE_MOVIES_URL } from "../config/api_config";
import axios from "axios";

const MoviesScreen = ({ navigation }) => {
  const [selectedMovieFilter, setSelectedMovieFilter] = useState("popular");
  const [moviesOfType, setMoviesOfType] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      axios(`${BASE_MOVIES_URL}${selectedMovieFilter}?api_key=${API_KEY}`).then(
        ({ data }) => {
          let results = data.results;
          setMoviesOfType(results);
        }
      );
    };
    fetchMovies();
  }, [selectedMovieFilter]);

  return (
    <View>
      <Box width="50%" alignSelf="center" mt={5}>
        <Select
          selectedValue={selectedMovieFilter}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedMovieFilter(itemValue);
          }}
        >
          <Select.Item label="Now Playing" value="now_playing" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
      </Box>
      <Box px={4}>
        {moviesOfType && (
          <MoviesContainer
            navigation={navigation}
            selectedMovieFilter={selectedMovieFilter}
            moviesOfType={moviesOfType}
          />
        )}
      </Box>
    </View>
  );
};
export default MoviesScreen;
