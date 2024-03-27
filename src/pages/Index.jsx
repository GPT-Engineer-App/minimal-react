import { Box, Heading } from "@chakra-ui/react";
import TransactionsTable from "../components/TransactionsTable";

const Index = () => {
  return (
    <Box as="section" maxW="6xl" mx="auto" mt={20} px={4}>
      <Heading as="h2" size="xl" mb={8}>
        Transactions
      </Heading>
      <TransactionsTable />
    </Box>
  );
};

export default Index;
