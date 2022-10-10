const BookingList = (props) => {
  const { bookingList } = props;
  return (
    <tr>
      <td>{bookingList.bookingId}</td>
      <td>{bookingList.roomId}</td>
      <td>{bookingList.bookingDate}</td>
      <td>{bookingList.checkIn}</td>
      <td>{bookingList.checkOut}</td>
      <td>{bookingList.remark}</td>
      <td>{bookingList.status}</td>
      <td>{bookingList.payment}</td>
    </tr>
  );
};

export default BookingList;
