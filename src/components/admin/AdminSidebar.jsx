const AdminSidebar = ({ setItemsChosenToView }) => {
  return (
    <div
      className="md:basis-1/12 border-e-8 divide-y px-3"
      id="admin-dashboard-sidebar"
    >
      <ul className="flex flex-col text-left mt-10">
        <li
          className="hover:bg-grapefruit rounded-md px-3 py-1 mb-4 list-none font-semibold cursor-pointer"
          onClick={() => {
            setItemsChosenToView("users");
          }}
        >
          Users
        </li>
        <li
          className="hover:bg-grapefruit rounded-md px-3 py-1 mb-4 list-none font-semibold cursor-pointer"
          onClick={() => {
            setItemsChosenToView("books");
          }}
        >
          Books
        </li>
        <li
          className="hover:bg-grapefruit rounded-md px-3 py-1 mb-4 list-none font-semibold cursor-pointer"
          onClick={() => {
            setItemsChosenToView("authors");
          }}
        >
          Authors
        </li>
      </ul>
    </div>
  );
};
export default AdminSidebar;
