import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../config";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const navigate = useNavigate();

  const [userId, setuserId] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [idproofObject, setIdproofObject] = useState(0);
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const loadDetails = () => {
    const userId = sessionStorage["userId"];
    const url = `${URL}/user/${userId}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          const {
            userId,
            lastName,
            firstName,
            email,
            idproofObject,
            gender,
            mobile,
            address,
            city,
            state,
            zipcode,
          } = result["data"];
          setuserId(userId);
          setLastName(lastName);
          setFirstName(firstName);
          setEmail(email);
          setIdproofObject(idproofObject);
          setGender(gender);
          setMobile(mobile);
          setAddress(address);
          setCity(city);
          setState(state);
          setZipcode(zipcode);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="p-5 m-auto shadow-sm rounded-lg bg-light col-lg-5 col-md-6 col-sm-12">
          <h3 className="text-center">Profile</h3>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                value={email}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                value={mobile}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Idproof
              </label>
              <input
                type="text"
                className="form-control"
                value={idproofObject.type}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                value={gender}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                value={address}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                City
              </label>
              <input
                type="text"
                className="form-control"
                value={city}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                State
              </label>
              <input
                type="text"
                className="form-control"
                value={state}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                ZipCode
              </label>
              <input
                type="text"
                className="form-control"
                value={zipcode}
                readOnly
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => {
                  navigate("/account/profile/edit", {
                    state: { userId: userId },
                  });
                }}
                className="btn btn-primary"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
