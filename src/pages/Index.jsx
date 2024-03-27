import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TransactionsTable from "../components/TransactionsTable";
import TransactionForm from "../components/TransactionForm";

const API_URL = "https://vdnhjxmsuykhvhnvjupi.supabase.co/rest/v1/transactions";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbmhqeG1zdXlraHZobnZqdXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjIyNjUsImV4cCI6MjAyNTM5ODI2NX0.byaihexABIEbRtnd1-n8R33kkt4lIwcB1xsX6P6PUA8";

const Index = () => {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    });
    const data = await response.json();
    setTransactions(data);
  };

  const addTransaction = async (transaction) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
      body: JSON.stringify(transaction),
    });
    onClose();
    fetchTransactions();
  };

  const updateTransaction = async (transaction) => {
    await fetch(`${API_URL}?id=eq.${editTransaction.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
      body: JSON.stringify(transaction),
    });
    setEditTransaction(null);
    onClose();
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await fetch(`${API_URL}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
      },
    });
    fetchTransactions();
  };

  return (
    <Box as="section" maxW="6xl" mx="auto" mt={20} px={4}>
      <Heading as="h2" size="xl" mb={8}>
        Transactions
      </Heading>
      <TransactionsTable
        transactions={transactions}
        onEdit={(transaction) => {
          setEditTransaction(transaction);
          onOpen();
        }}
        onDelete={deleteTransaction}
      />
      <TransactionForm isOpen={isOpen} onClose={onClose} onSubmit={editTransaction ? updateTransaction : addTransaction} transaction={editTransaction} />
    </Box>
  );
};

export default Index;
