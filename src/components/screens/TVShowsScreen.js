import React, { useState, useEffect } from "react";
import { Box, Select } from "native-base";
import TVShowsContainer from "../containers/TVShowsContainer";
import { API_KEY, BASE_TVSHOWS_URL } from "../config/api_config";
import axios from "axios";

const TVShowsScreen = ({ navigation }) => {
  const [selectedTVShowFilter, setSelectedTVShowFilter] = useState("popular");
  const [TVShowsOfType, setTVShowsOfType] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      axios(
        `${BASE_TVSHOWS_URL}${selectedTVShowFilter}?api_key=${API_KEY}`
      ).then(({ data }) => {
        let results = data.results;
        setTVShowsOfType(results);
      });
    };
    fetchTVShows();
  }, [selectedTVShowFilter]);

  return (
    <Box>
      <Box width="50%" alignSelf="center" mt={5}>
        <Select
          selectedValue={selectedTVShowFilter}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedTVShowFilter(itemValue);
          }}
        >
          <Select.Item label="Airing Today" value="airing_today" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="On The Air" value="on_the_air" />
        </Select>
      </Box>
      {TVShowsOfType && (
        <TVShowsContainer
          navigation={navigation}
          selectedTVShowFilter={selectedTVShowFilter}
          TVShowsOfType={TVShowsOfType}
        />
      )}
    </Box>
  );
};
export default TVShowsScreen;
