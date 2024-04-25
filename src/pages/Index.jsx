import { Box, Flex, Input, Button, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="gray.100">
      <Box width="100%" maxW="480px" bg="white" p={5} borderRadius="lg" boxShadow="md">
        <VStack spacing={4}>
          <HStack justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">Chat App</Text>
            <IconButton icon={<FaUserCircle />} fontSize="24px" variant="ghost" />
          </HStack>
          <VStack spacing={4} height="400px" overflowY="auto" width="100%" bg="gray.50" p={4} borderRadius="md">
            {/* Messages will be displayed here */}
            <Flex direction="column" align="start">
              <Box p={3} bg="blue.100" borderRadius="lg" maxWidth="80%">
                <Text>Hello! How can I help you today?</Text>
              </Box>
            </Flex>
            <Flex direction="column" align="end">
              <Box p={3} bg="green.200" borderRadius="lg" maxWidth="80%">
                <Text>I need help with a project.</Text>
              </Box>
            </Flex>
          </VStack>
          <HStack width="100%">
            <Input placeholder="Type a message..." bg="white" />
            <IconButton icon={<FaPaperPlane />} colorScheme="blue" />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;