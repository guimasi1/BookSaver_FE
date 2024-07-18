import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/userAction";

const UserDashboardItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteUser(user._id));
  };

  return (
    <div className="flex justify-between items-center mx-3 border-b py-1">
      <div className="flex-1 text-center single-cell-user">
        {user?.username}
      </div>
      <div className="flex-1 text-center single-cell-user">
        {user?.firstname}
      </div>
      <div className="flex-1 text-center single-cell-user">
        {user?.lastname}
      </div>
      <div className="flex-1 text-center single-cell-user">{user?.email}</div>
      <div className="flex-1 text-center single-cell-user">{user?.role}</div>
      <div
        className="w-10 text-center cursor-pointer"
        onClick={handleDeleteBook}
      >
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default UserDashboardItem;
