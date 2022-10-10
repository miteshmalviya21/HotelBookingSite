
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import OfferList from "./OfferList";

const Offer = () => {
  const [offerList, setOfferList] = useState([]);
  const getOfferList = () => {
    const url = `${URL}/offers/alloffers`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setOfferList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };
  useEffect(() => {
    getOfferList();
  }, []);
  return (
    <div className="container">
      <div className="table-responsive-md">
        <table className="table shadow-lg p-3 my-5 bg-white rounded-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Duration</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {offerList.map((offerList) => {
              return <OfferList offerList={offerList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Offer;
