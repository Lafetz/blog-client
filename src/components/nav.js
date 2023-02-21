import { Link } from "react-router-dom";

export const NavBar = ({ user }) => {
  return (
    <div className="m-auto py-3 text-white bg-slate-700">
      <div className=" max-w-screen-lg m-auto flex justify-around items-center h-16">
        <Link to="/">
          <h1 className="text-4xl font-bold">Blog</h1>
        </Link>

        {user && (
          <button className=" uppercase shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white  py-3 px-4 rounded">
            logout
          </button>
        )}
        {!user && (
          <div>
            <span className="font-bold text-xl hover:underline border-2 border-white">
              <Link to="/login">Log in </Link>
            </span>
            or
            <span>
              {" "}
              <Link
                to="/signup"
                className="font-bold text-xl hover:underline border-2 border-white"
              >
                {" "}
                Sign up
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
