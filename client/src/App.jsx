import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Test from "./components/Test";
import Result from "./components/Result";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import Form from "./components/Form";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/cw-admin" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
