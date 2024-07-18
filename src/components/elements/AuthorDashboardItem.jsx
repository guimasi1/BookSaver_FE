import { useDispatch } from "react-redux";
import { deleteAuthor } from "../../redux/actions/bookActions";

const AuthorDashboardItem = ({ author }) => {
  const dispatch = useDispatch();

  const handleDeleteAuthor = () => {
    dispatch(deleteAuthor(author._id));
  };

  return (
    <div className="flex justify-between items-center mx-3">
      <div className="flex-1 text-center single-cell-user">
        {author?.firstname}
      </div>
      <div className="flex-1 text-center single-cell-user">
        {author?.firstname}
      </div>
      <div className="flex-1 text-center single-cell-user">
        {author?.books.length}
      </div>
      <div
        className="w-10 text-center cursor-pointer"
        onClick={handleDeleteAuthor}
      >
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default AuthorDashboardItem;
