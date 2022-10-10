import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";
import { Link } from "react-router-dom";

const SignUp = () => {
  //useState Hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  const signupUser = () => {
    if (firstName.length === 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length === 0) {
      toast.warning("Please enter last name");
    } else if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please enter confirm password");
    } else if (password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
      };

      // url to call the api
      const url = `${URL}/user/signup`;

      axios
        .post(url, body)
        .then((response) => {
          // get the data from the response
          const result = response.data;
          console.log(result);
          if (result["status"] === "success") {
            toast.success("Successfully signed up new user");
            // navigate to the signin page
            navigate("/signin");
          } else {
            toast.error(result["error"]);
          }
        })
        .catch((error) => {
          toast.error("Signup Failed");
        });
    }
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="p-4 m-auto shadow-sm rounded-lg bg-light col-lg-5 col-md-6 col-sm-12">
          <div>
            <h3 className="text-center">SIGN UP</h3>
          </div>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                className="form-control"
              />
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                className="form-control"
              />
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin">Signin here.</Link>
              </div>
              <button onClick={signupUser} className="btn btn-primary w-100">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
