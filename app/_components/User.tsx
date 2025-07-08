"use client";

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter, notFound } from "next/navigation";
import { getUserById } from "../_lib/data-service";
import Header from "./Header";
import { UserResponse } from "../_models/user.model";

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const router = useRouter();
  const { data, error, isLoading } = useQuery<UserResponse, Error>({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    retry: (failureCount, error) => {
      return (
        (failureCount < 1 && error.message === "Internal Server Error") ||
        error.message === "Service Unavailable"
      ); // Retry only twice for 500 or 503 errors
    },
  });

  if (error?.message === "Not found") {
     notFound();
  }
  

  return (
    <>
      <Header>
        <Button onClick={() => router.push("/")} colorScheme='blue'>
          Back
        </Button>
        <Text fontSize='lg' fontWeight='bold' textAlign='center' flex='1'>
          User Profile
        </Text>
      </Header>
      {error && (
        (
      <Center>
        <Alert status='error' width='lg'>
          <AlertIcon />
          Error: {(error as Error).message}
        </Alert>
      </Center>
    )
      )}
      {isLoading && (
        <Center>
          <Spinner size='xl' />
        </Center>
      )}
      {!isLoading && !error && (
        <Center>
          <Box
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            p={5}
            maxW='md'
          >
            <VStack spacing={4}>
              <Image
                borderRadius='full'
                boxSize='150px'
                src={data?.data.avatar}
                alt={`${data?.data.first_name} ${data?.data.last_name}`}
              />
              <Text fontSize='md' fontWeight='light'>
                First Name:{" "}
                <Text as='span' fontWeight='bold'>
                  {data?.data.first_name}
                </Text>
              </Text>
              <Text fontSize='md' fontWeight='light'>
                Last Name:{" "}
                <Text as='span' fontWeight='bold'>
                  {data?.data.last_name}
                </Text>
              </Text>
              <Text fontSize='md' fontWeight='light'>
                Email:{" "}
                <Text as='span' fontWeight='bold'>
                  {data?.data.email}
                </Text>
              </Text>
            </VStack>
          </Box>
        </Center>
      )}
    </>
  );
};

export default UserProfile;
