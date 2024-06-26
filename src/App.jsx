import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const checkAuth = () => {
    setIsAuthenticated(!!localStorage.getItem("supabase.auth.token"));
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/transactions" element={isAuthenticated ? <Index /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
