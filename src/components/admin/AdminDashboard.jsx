import { useState } from "react";
import UsersListView from "./UsersListView";
import BookListView from "./BooksListView";
import AuthorsListView from "./AuthorsListView";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [itemsChosenToView, setItemsChosenToView] = useState("users");

  return (
    <div>
      <div className="flex full-height">
        <AdminSidebar setItemsChosenToView={setItemsChosenToView} />

        <div className="flex basis-11/12 flex-col pt-10">
          {itemsChosenToView === "users" && (
            <div className="flex flex-col" id="users-admin-view">
              <UsersListView />
            </div>
          )}
          {itemsChosenToView === "books" && (
            <div className="flex flex-col" id="books-admin-view">
              <BookListView />
            </div>
          )}
          {itemsChosenToView === "authors" && (
            <div className="flex flex-col" id="authors-admin-view">
              <AuthorsListView />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
