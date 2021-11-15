import React from "react";
import Header from "./src/components/layout/Header";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "./src/components/screens/MoviesScreen";
import TVShowsScreen from "./src/components/screens/TVShowsScreen";
import SearchResultScreen from "./src/components/screens/SearchResultScreen";
import ShowScreen from "./src/components/screens/ShowScreen";

const MovieStack = createNativeStackNavigator();

const MoviesStackScreen = () => {
  return (
    <MovieStack.Navigator screenOptions={{ headerShown: false }}>
      <MovieStack.Screen name="Movies List" component={MoviesScreen} />
      <MovieStack.Screen name="Show" component={ShowScreen} />
    </MovieStack.Navigator>
  );
};

const TVShowStack = createNativeStackNavigator();

const TVShowStackScreen = () => {
  return (
    <TVShowStack.Navigator screenOptions={{ headerShown: false }}>
      <TVShowStack.Screen name="TVShows List" component={TVShowsScreen} />
      <TVShowStack.Screen name="Show" component={ShowScreen} />
    </TVShowStack.Navigator>
  );
};

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        name="Search Result List"
        component={SearchResultScreen}
      />
      <SearchStack.Screen name="Show" component={ShowScreen} />
    </SearchStack.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            ({ headerShown: false },
            { tabBarLabelStyle: { textTransform: "none" } })
          }
        >
          <Tab.Screen name="Movies" component={MoviesStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="TV Shows" component={TVShowStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
