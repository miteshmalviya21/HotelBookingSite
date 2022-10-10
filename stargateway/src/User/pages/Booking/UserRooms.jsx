import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserRoomCard from "./UserRoomCard";

const UserRooms = () => {
  const [roomsList, setRoomsList] = useState([]);

  const getRoomsList = () => {
    const url = `${URL}/rooms/allrooms`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setRoomsList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getRoomsList();
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
      {roomsList.map((roomsList) => {
        return <UserRoomCard roomsList={roomsList} />;
      })}
    </div>
  );
};

export default UserRooms;
