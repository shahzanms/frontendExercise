import { Box, Button, HStack } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box mt={4}>
      <HStack spacing={4} justify="center">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default Pagination;
