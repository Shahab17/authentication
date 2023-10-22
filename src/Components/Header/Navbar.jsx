import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logout successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <ul className="flex-row lg:flex gap-10 text-xl font-medium">
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box  "
          >
            {navLinks}
          </ul>
        </div>
        <a className=" font-extrabold text-2xl">Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
        user ?
        <>
        <span>{user.email}</span> 
        <a onClick={handleLogOut} className="btn">Sign Out</a>
        </> 
        :
        <Link to="/login" className="btn">Login</Link>
        
        }
      </div>
    </div>
  );
};

export default Navbar;
