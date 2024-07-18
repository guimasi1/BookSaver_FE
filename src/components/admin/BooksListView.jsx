/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookDashboardItem from "../elements/BookDashboardItem";
import { getBooks } from "../../redux/actions/bookActions";

const BookListView = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      <h1 className="font-bold text-4xl">Books</h1>
      <div className="flex justify-between items-center mx-3 font-semibold mt-8">
        <div className="flex-1 text-center">Title</div>
        <div className="flex-1 text-center">Author</div>
        <div className="flex-1 text-center">Description</div>
        <div className="w-10"></div>
      </div>
      <div>
        {books &&
          // books.map((book) => <BookDashboardItem key={book._id} book={book} />)}
          books.map((book) => (
            <div key={book._id}>
              <BookDashboardItem book={book} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookListView;
