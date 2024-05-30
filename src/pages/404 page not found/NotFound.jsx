import React from "react";
import { Box, Center, Heading, Text, Button, Link } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box className="min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Center className="place-items-center">
        <Box textAlign="center">
          <Text fontSize="base" fontWeight="semibold" color="indigo.600">
            404
          </Text>
          <Heading
            as="h1"
            mt={4}
            fontSize={{ base: "3xl", sm: "5xl" }}
            fontWeight="bold"
            lineHeight="tight"
            color="gray.900"
          >
            Page not found
          </Heading>
          <Text mt={6} fontSize="base" lineHeight="7" color="gray.600">
            Sorry, we couldn't find the page your'e looking for.
          </Text>
          <Box mt={10} display="flex" justifyContent="center" gap={6}>
            <Button
              as={Link}
              href="#"
              bg="blue.600"
              px={3.5}
              py={2.5}
              fontSize="sm"
              fontWeight="semibold"
              color="white"
              shadow="sm"
              _hover={{ bg: "indigo.500" }}
              _focus={{
                outline: "2px solid",
                outlineColor: "indigo.600",
                outlineOffset: "2px",
              }}
            >
              Go back home
            </Button>
            <Link href="#" fontSize="sm" fontWeight="semibold" color="gray.900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default NotFound;
