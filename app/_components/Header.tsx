import { Box, Text, Center, HStack } from "@chakra-ui/react";

const Header: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <HStack justifyContent='center' alignItems="center" p={4} bg="gray.100" borderBottomWidth="1px">
      {children}
    </HStack>
  );
};

export default Header;
