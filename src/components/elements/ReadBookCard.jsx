import { useNavigate } from "react-router-dom";

const ReadBookCard = ({ book }) => {
  const navigate = useNavigate();

  const goToBook = () => {
    navigate(`/books/${book._id}`);
  };

  return (
    <div className="border border-none cursor-pointer bg-midnight rounded py-2 w-full h-36 flex flex-col justify-between col-span-1">
      <div onClick={goToBook}>
        <div>{book.imageUrl}</div>
        <div className="font-bold text-xl">{book.title}</div>
        <div className="px-2 text-left">
          <div className="text-xs mt-3">{book.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
