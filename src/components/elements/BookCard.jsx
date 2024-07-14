import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookToRead } from "../../redux/actions/bookActions";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const numberOfReviews = book.reviews.length;

  const goToBook = () => {
    navigate(`/books/${book._id}`);
  };

  const handleAddBookToRead = () => {
    dispatch(addBookToRead(book._id));
  };

  return (
    <div className="border border-none cursor-pointer bg-midnight rounded py-2 w-full h-72 flex flex-col justify-between col-span-1">
      <div onClick={goToBook}>
        <div>{book.imageUrl}</div>
        <div className="font-bold text-xl">{book.title}</div>
        <div className="px-2 text-left">
          <div className="text-xs mt-3">{book.description}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-left">
          <span className="font-semibold ms-3 me-1 mb-2">Reviews:</span>{" "}
          {numberOfReviews}
        </div>
        <div className="mb-1 mt-2">
          <button
            onClick={handleAddBookToRead}
            className="font-bold bg-grapefruit px-4 py-1 rounded"
          >
            Add book
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
