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
  const goToReadBooks = () => {
    navigate("/read-books");
  };

  return (
    <div>
      {!location.pathname.startsWith("/admin") && (
        <nav className="container mx-0 font-bold flex justify-between text-lg mb-10 mt-0">
          <div className="cursor-pointer" onClick={goToHome}>
            BookSaver
          </div>
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
              onClick={goToReadBooks}
              className={`cursor-pointer px-3 rounded-2xl py-1 ${
                location.pathname === "/read-books" ? "bg-grapefruit" : ""
              }`}
            >
              Read books
            </div>
          </div>
          <div>
            {loggedIn ? (
              <div className="cursor-pointer px-3 rounded-2xl py-1">Logout</div>
            ) : (
              <div
                className={` cursor-pointer px-3 rounded-2xl py-1 ${
                  location.pathname === "/login" ? "bg-grapefruit" : ""
                }`}
                onClick={goToLogin}
              >
                Login
              </div>
            )}
            <div
              className={` cursor-pointer px-3 rounded-2xl py-1 ${
                location.pathname === "/login" ? "bg-grapefruit" : ""
              }`}
              onClick={goToLogin}
            >
              Login
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MyNavbar;
