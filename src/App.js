import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";

import { HomePage } from "./components/home";
import { Blog } from "./components/blog";
import { Login } from "./components/Login";
import { SignUp } from "./components/signUp";
function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
