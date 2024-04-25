import { Box, Flex, Input, Button, Text, VStack, HStack, IconButton, useToast } from '@chakra-ui/react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const toast = useToast();

  const sendMessage = () => {
    if (inputValue.trim() === '') {
      toast({
        title: "Cannot send an empty message.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="gray.100">
      <Box width="100%" maxW="480px" bg="white" p={5} borderRadius="lg" boxShadow="md">
        <VStack spacing={4}>
          <HStack justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">Chat App</Text>
            <IconButton icon={<FaUserCircle />} fontSize="24px" variant="ghost" aria-label="User Profile" />
          </HStack>
          <VStack spacing={4} height="400px" overflowY="auto" width="100%" bg="gray.50" p={4} borderRadius="md">
            {messages.map((message, index) => (
              <Flex key={index} direction="column" align={message.sender === 'user' ? 'end' : 'start'}>
                <Box p={3} bg={message.sender === 'user' ? 'green.200' : 'blue.100'} borderRadius="lg" maxWidth="80%">
                  <Text>{message.text}</Text>
                </Box>
              </Flex>
            ))}
          </VStack>
          <HStack width="100%">
            <Input
              placeholder="Type a message..."
              bg="white"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IconButton
              icon={<FaPaperPlane />}
              colorScheme="blue"
              onClick={sendMessage}
              aria-label="Send Message"
            />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;