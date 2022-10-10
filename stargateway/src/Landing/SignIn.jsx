import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };

  const signinUser = () => {
    if (email.length === 0) {
      toast.warning("please enter email");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      const url = `${URL}/user/signin`;
      // console.log(body);
      axios
        .post(url, body)
        .then((response) => {
          const result = response.data;
          // console.log(result);
          if (result != null && result["status"] === "success") {
            toast.success("Welcome to the application");

            const { userId, firstName, lastName, role } = result["data"];

            sessionStorage["userId"] = userId;
            sessionStorage["firstName"] = firstName;
            sessionStorage["lastName"] = lastName;
            sessionStorage["loginStatus"] = 1;
            sessionStorage["role"] = role;

            if (role === "admin") {
              navigate("/adminhome");
              refreshPage();
            } else {
              navigate("/");
              refreshPage();
            }
          } else {
            toast.error("Invalid user name or password");
          }
        })
        .catch((error) => {
          toast.error("Invalid user name or password");
        });
    }
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-5 col-md-6 col-sm-12 bg-light shadow-lg rounded-lg p-5 m-auto ">
          <div>
            <h3 className="text-center">SIGN IN</h3>
          </div>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <br />
              <button onClick={signinUser} className="btn btn-primary w-100">
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
