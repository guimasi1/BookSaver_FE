/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userAction";
import UserDashboardItem from "../elements/UserDashboardItem";

const UsersListView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <h1 className="font-bold text-4xl">Users</h1>
      <div className="flex justify-between items-center mx-3 font-semibold mt-8 border-b pb-4">
        <div className="flex-1 text-center">Username</div>
        <div className="flex-1 text-center">Firstname</div>
        <div className="flex-1 text-center">Lastname</div>
        <div className="flex-1 text-center">Email</div>
        <div className="flex-1 text-center">Role</div>
        <div className="w-10"></div>
      </div>
      <div>
        {users.map((user) => (
          <UserDashboardItem key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersListView;
