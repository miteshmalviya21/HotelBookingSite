import React from "react";
import BookingList from "./BookingList";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from '../../../config'

const Booking = () => {
    const [bookingList, setBookingList] = useState([]);

    const getBookingList = () => {
        const url = `${URL}/booking/allbooking`;
        axios.get(url).then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            setBookingList(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        }).catch((error)=>{
          toast.error("Failed")
        });
      };

    useEffect(()=>{
        getBookingList()
    },[])

  return (
    <div clasName="container">
      <div className="table-responsive-md">
        <table className="table shadow-lg p-3 my-5 bg-white rounded-3">
          <thead>
            <tr>
              <th scope="col">BookingId</th>
              <th scope="col">UserId</th>
              <th scope="col">RoomId</th>
              <th scope="col">BookingDate</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col">Remark</th>
              <th scope="col">Status</th>
              <th scope="col">Payment</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((bookingList) => {
              return <BookingList bookingList={bookingList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
