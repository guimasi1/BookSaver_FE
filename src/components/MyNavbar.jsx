import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <nav className="container mx-0 font-bold flex justify-between text-lg mb-10 mt-0">
      <div className="">BookSaver</div>
      <div className="flex gap-2 justify-center">
        <div
          className={`cursor-pointer px-3 rounded-2xl py-1 ${
            location.pathname === "/" ? "bg-grapefruit" : ""
          }`}
          onClick={goToHome}
        >
          Home
        </div>
        <div
          className={`cursor-pointer px-3 rounded-2xl py-1 ${
            location.pathname === "/saved-books" ? "bg-grapefruit" : ""
          }`}
        >
          Saved books
        </div>
      </div>
      <div>
        {!loggedIn && (
          <div className={`cursor-pointer px-3 rounded-2xl py-1 `}>Logout</div>
        )}
        {loggedIn && (
          <div
            className={` cursor-pointer px-3 rounded-2xl py-1 ${
              location.pathname === "/login" ? "bg-grapefruit" : ""
            }`}
          >
            <div onClick={goToLogin}>Login</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MyNavbar;
