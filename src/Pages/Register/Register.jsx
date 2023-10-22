import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // create user in firebase
    createUser(email, password)
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
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
              placeholder="Your Password"
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
            <button className="btn bg-gradient-to-r from-cyan-100 to-blue-500 ">Register</button>
          </div>
          <p>
            Already Have An Account? Please{" "}
            <Link className="text-blue-500 font-medium" to="/login">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
