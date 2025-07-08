import UsersList from "./_components/UsersList";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getUsers } from "./_lib/data-service";
import { UsersResponse } from "./_models/user.model";
import React from "react";
import Header from "./_components/Header";
import { Box, Center, Text } from "@chakra-ui/react";

interface HomePageProps {
  dehydratedState: any;
}
const HomePage: React.FC<HomePageProps> = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<UsersResponse, Error>({
    queryKey: ["users", 1],
    queryFn: () => getUsers(1)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersList />
    </HydrationBoundary>
  );
};

export default HomePage;
