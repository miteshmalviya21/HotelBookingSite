import { OfferList } from "./OfferList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const AddOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  const navigate = useNavigate();

  const saveOffer = () => {
    if (title.length === 0) {
      toast.warning("please enter title");
    } else if (description.length === 0) {
      toast.warning("please enter description");
    } else if (timePeriod.length === 0) {
      toast.warning("please enter timePeriod");
    } else {
      const body = {
        title,
        description,
        timePeriod,
      };

      const url = `${URL}/offers/add`;
      axios
        .post(url, body)
        .then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            toast.success("added new facility..");
            navigate("/offer");
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
    <div className="addf">
      <div className="container">
        <form className="shadow-lg p-3 my-5 bg-white rounded-3">
          <h2 className="text-center">
            <b>Add Offer</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Offer Title</h3>
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Description</h3>
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Time Period</h3>
            </label>
            <textarea
              onChange={(e) => {
                setTimePeriod(e.target.value);
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Time Duration"
            ></textarea>
          </div>

          <div class="form-group">
            <button onClick={saveOffer} type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default AddOffer;
