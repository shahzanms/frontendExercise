import UsersList from "./_components/UsersList";
import React from "react";

interface HomePageProps {
  dehydratedState: any;
}
const HomePage: React.FC<HomePageProps> = async () => {
  return (
      <UsersList />
  );
};
export default HomePage;
