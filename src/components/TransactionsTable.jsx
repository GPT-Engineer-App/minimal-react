import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("https://vdnhjxmsuykhvhnvjupi.supabase.co/rest/v1/transactions", {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbmhqeG1zdXlraHZobnZqdXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjIyNjUsImV4cCI6MjAyNTM5ODI2NX0.byaihexABIEbRtnd1-n8R33kkt4lIwcB1xsX6P6PUA8",
        },
      });
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Type</Th>
          <Th>Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td>{transaction.date}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.type}</Td>
            <Td>{transaction.category}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TransactionsTable;
