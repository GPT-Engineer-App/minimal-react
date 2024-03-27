import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TransactionsTable = ({ transactions, onEdit, onDelete, onRefresh }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Type</Th>
          <Th>Category</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td>{transaction.date}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.type}</Td>
            <Td>{transaction.category}</Td>
            <Td>
              <IconButton icon={<FaEdit />} aria-label="Edit" onClick={() => onEdit(transaction)} mr={2} />
              <IconButton icon={<FaTrash />} aria-label="Delete" onClick={() => onDelete(transaction.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TransactionsTable;
