import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const signupData = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };
    fetch("https://blog-api-production-9f47.up.railway.app/signup", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const passwordConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className="border-2 border-white text-white p-8 flex flex-col gap-5 ">
        <h1 className="bold text-2xl font-bold w-fit m-auto">Sign up</h1>
        <form onSubmit={submitForm} className="flex flex-col gap-5">
          <div>
            <label className="block w-max" htmlFor="username" required>
              UserName:
            </label>
            <input onChange={usernameChange} value={username} />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password:
            </label>
            <input
              onChange={passwordChange}
              value={password}
              type="password"
              autoComplete="on"
              required
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Confirm Password:
            </label>
            <input
              onChange={passwordConfirmChange}
              value={confirmPassword}
              type="password"
              autoComplete="on"
              required
            />
          </div>
          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-3 px-8 rounded">
            Sign Up
          </button>
        </form>
        <span>
          <Link className="font-bold hover:underline " to="/login">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};
