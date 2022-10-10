import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";

const UserChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const updateUserPassword = () => {
    const userId = sessionStorage["userId"];
    if (oldPassword.length === 0) {
      toast.warning("Please enter old password");
    } else if (newPassword.length === 0) {
      toast.warning("Please enter new password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please confirm your password");
    } else if (newPassword !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        userId,
        oldPassword,
        newPassword,
      };
      const url = `${URL}/user/changepassword`;
      axios
        .post(url, body)
        .then((response) => {
          const result = response.data;
          console.log(result);
          if (result["status"] === "success") {
            toast.success("Successfully changed Password");
            navigate("/userhome");
          } else {
            toast.error(result["error"]);
          }
        })
        .catch((error) => {
          toast.error("Failed");
        });
    }
  };

  return (
    <div class="container">
      <br />
      <br />
      <div>
        <div className="row mb-5">
          <div className="p-5 m-auto shadow-sm rounded-lg bg-light col-lg-5 col-md-6 col-sm-12">
            <p>
              <h3 className="text-center">Change Password</h3>
            </p>
            <hr />
            <br />
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <button
                  onClick={updateUserPassword}
                  className="btn btn-primary"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChangePassword;
