/* eslint-disable react-hooks/exhaustive-deps */
import ReadBookCard from "./elements/ReadBookCard";
import { useSelector } from "react-redux";

const SavedBooks = () => {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <div className="container">
      {user && (
        <div className="font-bold text-3xl mb-16">
          {user.username}&#39;s read books
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {user?.readBooks.map((book) => (
          <ReadBookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default SavedBooks;
