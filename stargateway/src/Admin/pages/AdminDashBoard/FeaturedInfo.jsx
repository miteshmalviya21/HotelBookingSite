import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../../config";

const FeaturedInfo = () => {
  const [roomsCount, setRoomsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  const loadRoomsCount = () => {
    const url = `${URL}/rooms/roomscount`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setRoomsCount(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };
  const loadUsersCount = () => {
    const url = `${URL}/users/userscount`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setUsersCount(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  const loadBookingCount = () => {
    const url = `${URL}/booking/bookingcount`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setBookingCount(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    loadRoomsCount();
    loadBookingCount();
    loadUsersCount();
  }, []);

  return (
    <div className="row my-3 ">
      <div className="col-md-4 my-3">
        <div className="card shadow-lg bg-light p-3 rounded">
          <div className="card-body">
            <h2 className="card-title text-center text-uppercase font-weight-bold">
              User Count
            </h2>
            <h1 className="card-text text-center font-weight-bold">
              {usersCount}
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-4 my-3">
        <div className="card shadow-lg bg-light p-3 rounded">
          <div className="card-body">
            <h2 className="card-title text-center text-uppercase font-weight-bold">
              Rooms Count
            </h2>
            <h1 className="card-text text-center font-weight-bold">
              {roomsCount}
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-4 my-3">
        <div className="card shadow-lg bg-light p-3 rounded">
          <div className="card-body">
            <h2 className="card-title text-center text-uppercase font-weight-bold">
              Booking Count
            </h2>
            <h1 className="card-text text-center font-weight-bold">
              {bookingCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
