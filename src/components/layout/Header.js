import React from "react";
import { HStack, Text, Box, StatusBar } from "native-base";

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#2C3E50" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#2C3E50">
        <HStack
          bg="#2C3E50"
          px={1}
          py={3}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="#fff"
            fontSize={24}
            fontWeight="900"
            fontFamily="Bebas Neue"
          >
            NETSFLICK
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
