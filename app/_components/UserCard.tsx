import { Box, Avatar, Text, HStack, VStack, Link } from "@chakra-ui/react";
import { User } from "../_models/user.model";
import NextLink from "next/link";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      maxW="lg"
    >
      <HStack spacing={4}>
        <Avatar size="xl" src={user.avatar} name={`${user.first_name} ${user.last_name}`} />
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">
            <Link as={NextLink} href={`/profile/${user.id}`} color="blue.500">
              {user.first_name}
            </Link>{" "}
            {user.last_name}
          </Text>
          <Text fontSize="md" color="gray.500">
            {user.email}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
