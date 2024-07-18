import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import SavedBooks from "./components/SavedBooks";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/read-books" element={<SavedBooks />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
