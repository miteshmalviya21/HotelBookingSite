import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const BookingList = (props) => {
  const { bookingList } = props;

  const refreshPage = () => {
    window.location.reload(false);
  };

  const DeleteBooking = () => {
    const url = `${URL}/booking/delete/${bookingList.bookingId}`;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("Deleted Successfully");
          refreshPage();
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  return (
    <tr key={bookingList.bookingId}>
      <td>{bookingList.bookingId}</td>
      <td>{bookingList.userId}</td>
      <td>{bookingList.roomId}</td>
      <td>{bookingList.bookingDate}</td>
      <td>{bookingList.checkIn}</td>
      <td>{bookingList.checkOut}</td>
      <td>{bookingList.remark}</td>
      <td>{bookingList.status}</td>
      <td>{bookingList.payment}</td>
      <td>
        <button onClick={DeleteBooking} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookingList;
