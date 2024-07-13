import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="rounded bg-midnight w-2/3 max-w-md pt-10 pb-24">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <div className="flex flex-col w-64">
            <label className="font-bold mb-2" htmlFor="email-login">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="rounded mb-4 p-2"
              type="text"
              id="email-login"
            />
            <label className="font-bold mb-2" htmlFor="password-login">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="rounded mb-4 p-2"
              type="password"
              id="password-login"
            />
            <button className="bg-blue-500 text-white font-bold py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
