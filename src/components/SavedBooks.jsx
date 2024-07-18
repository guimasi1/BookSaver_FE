/* eslint-disable react-hooks/exhaustive-deps */
import ReadBookCard from "./elements/ReadBookCard";
import { useSelector } from "react-redux";

const SavedBooks = () => {
  const user = useSelector((state) => state.users.currentUser);
  const readBooks = useSelector((state) => state.books.readBooks);

  return (
    <div className="container">
      {user && (
        <div className="font-bold text-3xl mb-16">
          {user.username}&#39;s read books
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {readBooks.map((book) => (
          <ReadBookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default SavedBooks;
