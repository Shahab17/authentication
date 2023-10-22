import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";

const Login = () => {
  const { SignInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // signInUser using from AuthProvider
    SignInUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero  h-[80vh] flex items-center justify-center ">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  "
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn   bg-gradient-to-r from-cyan-100 to-blue-500">
              Login
            </button>
          </div>
          <p>
            New Here? Please{" "}
            <Link className="text-blue-500 font-medium" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
