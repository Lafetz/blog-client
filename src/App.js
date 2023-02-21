import { Routes, Route, BrowserRouter } from "react-router-dom";

import { HomePage } from "./components/home";
import { Blog } from "./components/blog";
import { Login } from "./components/Login";
import { SignUp } from "./components/signUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
