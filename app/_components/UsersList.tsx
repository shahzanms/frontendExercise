"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { UsersResponse } from "../_models/user.model";
import { getUsers } from "../_lib/data-service";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Spinner,
  Text,
  Center,
  AccordionIcon,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { UserCard } from "./UserCard";
import Pagination from "./Pagination";
import Header from "./Header";

const UsersList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery<UsersResponse, Error>({
    queryKey: ["users", currentPage],
    queryFn: () => getUsers(currentPage),
    retry: (failureCount, error) => {
      return (
        (failureCount < 1 && error.message === "Internal Server Error") ||
        error.message === "Service Unavailable"
      ); // Retry only twice for 500 or 503 errors
    },
  });
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header>
        <Center>
          <Box p={4}>
            <Text fontSize='lg' fontWeight='bold'>
              Users1
            </Text>
          </Box>
        </Center>
      </Header>
      {isLoading && (
        <Center>
          <Spinner size='xl' />
        </Center>
      )}
      {error && (
        <Center>
          <Alert status='error' width='lg'>
            <AlertIcon />
            Error: {(error as Error).message}
          </Alert>
        </Center>
      )}
      {!error && !isLoading && (
        <Center>
          <Box width='100%' maxW='lg'>
            <Accordion allowToggle>
              {data?.data.map((user) => (
                <AccordionItem key={user.id}>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {user.first_name} {user.last_name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Center>
                      <UserCard user={user} />
                    </Center>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <Pagination
              currentPage={data?.page!}
              totalPages={data?.total_pages!}
              onPageChange={handlePageChange}
            />
          </Box>
        </Center>
      )}
    </>
  );
};

export default UsersList;
