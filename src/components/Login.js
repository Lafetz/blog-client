import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const [error, setError] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    fetch("https://blog-api-production-9f47.up.railway.app/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        if (res.status === 200) {
          setError("");
          navigate("/");
        } else {
          setError("Wrong username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className="border-2 border-white text-white p-8 flex flex-col gap-5 ">
        <h1 className="bold text-2xl font-bold w-fit m-auto">Log in</h1>
        <form onSubmit={submitForm} className="flex flex-col gap-5">
          <div>
            <label className="block w-max" htmlFor="username">
              UserName:
            </label>
            <input onChange={usernameChange} value={username} required />
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

          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-3 px-8 rounded">
            Log in
          </button>
          <span className="text-red-500">{error}</span>
        </form>
        <Link className="font-bold hover:underline " to="/signup">
          Sign up{" "}
        </Link>
      </div>
    </div>
  );
};
