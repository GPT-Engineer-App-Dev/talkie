import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="gray.100">
      <Box width="100%" maxW="480px" bg="white" p={5} borderRadius="lg" boxShadow="md">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">About Chat App</Text>
          <Text fontSize="lg">
            The Chat App is designed to provide a simple and intuitive platform for users to communicate effectively.
            With real-time messaging capabilities, users can send and receive messages instantly.
          </Text>
          <Box fontSize="lg">
            Features include:
            <ul>
              <li>Real-time messaging</li>
              <li>User profiles</li>
              <li>Customizable themes</li>
            </ul>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default About;