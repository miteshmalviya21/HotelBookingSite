import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserOffersCard from "./UserOffersCard";

const UserOffers = () => {
  const [offersList, setOffersList] = useState([]);

  const getOffersList = () => {
    const url = `${URL}/offers/alloffers`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setOffersList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getOffersList();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {offersList.map((offersList) => {
        return <UserOffersCard offersList={offersList} />;
      })}
    </div>
  );
};

export default UserOffers;
