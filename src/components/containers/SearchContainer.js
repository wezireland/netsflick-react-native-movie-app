import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../config/api_config";
import { StyleSheet, View, Text } from "react-native";
import {
  Button,
  Icon,
  Input,
  Select,
  HStack,
  VStack,
  FormControl,
} from "native-base";
import MoviesContainer from "./MoviesContainer";
import { Ionicons } from "@expo/vector-icons";

const SearchContainer = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const [searchSelect, setSearchSelect] = useState("multi");

  const search = () => {
    if (searchSelect == "movie") {
      axios(
        `https://api.themoviedb.org/3/search/movie?query=${state.s}&api_key=${API_KEY}`
      ).then(({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    } else if (searchSelect == "tv_show") {
      axios(
        `https://api.themoviedb.org/3/search/tv?query=${state.s}&api_key=${API_KEY}`
      ).then(({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    } else {
      axios(
        `https://api.themoviedb.org/3/search/multi?query=${state.s}&api_key=${API_KEY}`
      ).then(({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  return (
    <View style={styles.container}>
      <VStack>
        <FormControl isRequired>
          <FormControl.Label fontSize="sm">
            Search Movie/TV Show Name
          </FormControl.Label>
          <Input
            variant="filled"
            bg="gray.200"
            px={3}
            placeholder="Enter a name..."
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            onChangeText={(text) =>
              setState((prevState) => {
                return { ...prevState, s: text };
              })
            }
            value={state.s}
          />
          <FormControl.Label style={styles.title}>
            Choose Search Type
          </FormControl.Label>
          <HStack>
            <Select
              flexGrow={1}
              mr={4}
              selectedValue={searchSelect}
              onValueChange={(itemValue, itemIndex) => {
                setSearchSelect(itemValue);
              }}
            >
              <Select.Item label="Movie" value="movie" />
              <Select.Item label="Multi" value="multi" />
              <Select.Item label="TV Show" value="tv_show" />
            </Select>
            <Button
              bgColor="#8F0000"
              onPress={search}
              height="8"
              startIcon={<Icon as={Ionicons} name="ios-search" />}
            >
              Search
            </Button>
          </HStack>
          <Text style={styles.description}>Please select a search type</Text>
        </FormControl>
      </VStack>
      {state.results.length > 0 ? (
        <MoviesContainer moviesOfType={state.results} />
      ) : (
        <Text style={styles.emptySearch}>Please initiate a search</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    fontSize: 9,
  },
  emptySearch: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 80,
  },
});

export default SearchContainer;
