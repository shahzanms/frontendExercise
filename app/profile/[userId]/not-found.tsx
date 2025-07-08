import { Box, Center, Heading, Text, Button, Link } from "@chakra-ui/react";

const Page = () => {

  return (
    <Center height='100vh'>
      <Box textAlign='center'>
        <Heading size='xl' mb={4}>
          Not Found
        </Heading>
        <Text fontSize='lg' mb={4}>
          This user doesn't exist
        </Text>
        <Link href='/'>
          <Button colorScheme='blue'>Go Back to Users List</Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Page;
