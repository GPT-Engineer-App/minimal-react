import React from "react";
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const TransactionForm = ({ transaction, onSubmit }) => {
  const [date, setDate] = React.useState(transaction?.date || "");
  const [amount, setAmount] = React.useState(transaction?.amount || "");
  const [type, setType] = React.useState(transaction?.type || "");
  const [category, setCategory] = React.useState(transaction?.category || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, amount, type, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Amount</FormLabel>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Type</FormLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        {transaction ? "Update Transaction" : "Add Transaction"}
      </Button>
    </form>
  );
};

export default TransactionForm;
