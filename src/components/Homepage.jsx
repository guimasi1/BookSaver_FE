/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/actions/bookActions";
import BookCard from "./elements/BookCard";

const Homepage = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const [searchTitle, setSearchTitle] = useState();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getBooks(searchTitle));
    }, 300);
  }, [searchTitle]);

  return (
    <div className="container">
      <h1 className="font-bold text-4xl mb-12">BookSaver</h1>
      <div className="">
        <label htmlFor="search-books" className="mt-3 me-2">
          <span className="material-icons">search</span>
        </label>
        <input
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
          className="p-2"
          type="text"
          id="search-books"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mt-10">
        {books && books.map((book) => <BookCard book={book} key={book._id} />)}
      </div>
    </div>
  );
};

export default Homepage;
