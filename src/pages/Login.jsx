import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const SUPABASE_URL = "https://vdnhjxmsuykhvhnvjupi.supabase.co/auth/v1/token";
  const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbmhqeG1zdXlraHZobnZqdXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjIyNjUsImV4cCI6MjAyNTM5ODI2NX0.byaihexABIEbRtnd1-n8R33kkt4lIwcB1xsX6P6PUA8";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_API_KEY,
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("supabase.auth.token", data.access_token);
        navigate("/transactions");
      } else {
        throw new Error(data.error_description || "Failed to login");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading textAlign="center" mb={8}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={8} width="full">
          Login
        </Button>
        {error && (
          <Text color="red.500" mt={4} textAlign="center">
            {error}
          </Text>
        )}
      </form>
    </Box>
  );
};

export default Login;
