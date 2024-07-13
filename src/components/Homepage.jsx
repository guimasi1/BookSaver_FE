/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/actions/bookActions";
import BookCard from "./elements/BookCard";

const Homepage = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-4xl">BookSaver</h1>
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books && books.map((book) => <BookCard book={book} key={book._id} />)}
      </div>
    </div>
  );
};

export default Homepage;
