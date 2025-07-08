import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Page = () => {
  return (
    <Center height='100vh'>
      <Box textAlign='center'>
        <Heading size='xl' mb={4}>
          Not Found
        </Heading>
        <Text fontSize='lg'>This route doesn't exist</Text>
        <Link href='/'>
          <Button colorScheme='blue'>Go Back to Users List</Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Page;
