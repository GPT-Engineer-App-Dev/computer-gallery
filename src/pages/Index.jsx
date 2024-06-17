import { Container, Text, VStack, SimpleGrid, Image, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to the Computer Gallery</Heading>
        <Text fontSize="lg" textAlign="center">
          Explore our collection of modern and high-end computer setups. Whether you're looking for a professional desktop, a gaming laptop, or a cozy home office setup, we have something for everyone.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/computer1.jpg" alt="Modern Desktop Setup" />
          </Box>
          <Box boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/computer2.jpg" alt="Gaming Laptop" />
          </Box>
          <Box boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/computer3.jpg" alt="Home Office Setup" />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;