import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/actions/bookActions";

const BookDashboardItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook(book._id));
  };

  return (
    <div className="flex justify-between items-center mx-3">
      <div className="flex-1 text-center single-cell-user">{book?.title}</div>
      <div className="flex-1 text-center single-cell-user">
        {book?.authorId?.firstname} {book?.authorId?.lastname}
      </div>
      <div className="flex-1 text-center single-cell-user">
        {book?.description}
      </div>
      <div
        className="w-10 text-center cursor-pointer"
        onClick={handleDeleteBook}
      >
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default BookDashboardItem;
