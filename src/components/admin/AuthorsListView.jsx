/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorDashboardItem from "../elements/AuthorDashboardItem";
import { getAllAuthors } from "../../redux/actions/bookActions";

const UsersListView = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.books.authors);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return (
    <div>
      <h1 className="font-bold text-4xl">Authors</h1>
      <div className="flex justify-between items-center mx-3 font-semibold mt-8">
        <div className="flex-1 text-center">Firstname</div>
        <div className="flex-1 text-center">Lastname</div>
        <div className="flex-1 text-center">Written books</div>
        <div className="w-10"></div>
      </div>
      <div>
        {authors.map((author) => (
          <AuthorDashboardItem key={author._id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default UsersListView;
