import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./Pages";

export const Public = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            Home in Public <Link to="/login">to Login</Link>
          </>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
