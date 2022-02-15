import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} exact />}
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/users/add" element={<AddUser />} exact />
          <Route path="/users/edit/:id" element={<EditUser />} exact />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
