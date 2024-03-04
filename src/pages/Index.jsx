import { Box, Button, Container, Heading, Text, VStack, Image, Input, useToast } from "@chakra-ui/react";
import { FaArrowRight, FaLightbulb, FaRocket } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handlePrototypeSubmission = () => {
    toast({
      title: "Prototype Submission",
      description: "Your prototype idea has been submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Rapid Prototype Generator
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Transforming a single sentence into a functional web prototype.
          </Text>
        </Box>

        <Box p={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading as="h2" size="lg" mb={4}>
            Describe Your Idea
          </Heading>
          <Input placeholder="Enter a single sentence to describe your idea..." mb={4} />
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" onClick={handlePrototypeSubmission}>
            Generate Prototype
          </Button>
        </Box>

        <Box textAlign="center">
          <Heading as="h3" size="md" mb={2}>
            How It Works
          </Heading>
          <VStack spacing={4}>
            <Box textAlign="left">
              <FaLightbulb style={{ display: "inline" }} />
              <Text display="inline" ml={2}>
                Input your idea in a single sentence.
              </Text>
            </Box>
            <Box textAlign="left">
              <FaRocket style={{ display: "inline" }} />
              <Text display="inline" ml={2}>
                Our AI analyzes the input and creates a prototype.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h3" size="md" mb={2}>
            Your Prototype
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Text mb={4}>Once generated, your prototype will appear here!</Text>
            {/* Placeholder for the generated prototype */}
            <Image src="https://images.unsplash.com/photo-1461958508236-9a742665a0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb25jZXB0fGVufDB8fHx8MTcwOTUyNTA4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Prototype Placeholder" />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
