/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { BASE_URL } from "../redux/actions/authActions";
import { booksURI } from "../redux/actions/bookActions";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const params = useParams();
  const { bookId } = params;
  const [book, setBook] = useState(null);
  const getBook = async () => {
    try {
      const res = await fetch(BASE_URL + booksURI + `/${bookId}`);
      if (!res.ok) throw new Error("Couldn't get the book with id " + bookId);
      const data = await res.json();
      setBook(data.book);
      console.log(data.book);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="container">
      {book && (
        <div>
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <div className="mt-10 text-left">{book.description}</div>
        </div>
      )}{" "}
    </div>
  );
};

export default BookDetails;
