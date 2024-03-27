import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.100" py={4}>
        <Box maxW="6xl" mx="auto">
          <Heading as="h1" size="xl">
            My App
          </Heading>
        </Box>
      </Box>

      {/* Hero */}
      <Box as="section" pt={20} pb={28} px={4} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Powerful Features to Grow Your Business
        </Heading>
        <Text fontSize="xl" mb={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet odio sed vestibulum dictum.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Box>

      {/* Features */}
      <Box as="section" maxW="6xl" mx="auto" mt={20} px={4}>
        <Flex flexWrap="wrap">
          <Box flex={["0 0 100%", "0 0 33.33%"]} mb={8} px={4}>
            <FaRocket size={48} />
            <Heading as="h3" size="lg" mt={4} mb={4}>
              Launch Quickly
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</Text>
          </Box>
          <Box flex={["0 0 100%", "0 0 33.33%"]} mb={8} px={4}>
            <FaChartLine size={48} />
            <Heading as="h3" size="lg" mt={4} mb={4}>
              Grow Your Revenue
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</Text>
          </Box>
          <Box flex={["0 0 100%", "0 0 33.33%"]} mb={8} px={4}>
            <FaUsers size={48} />
            <Heading as="h3" size="lg" mt={4} mb={4}>
              Manage Your Team
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.100" py={10} mt={20} textAlign="center">
        <Text>&copy; 2023 My App. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
