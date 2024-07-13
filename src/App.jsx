import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
