import { useNavigate } from "react-router-dom";

const UserBookRoomCard = (props) => {
  const { roomsList, checkIn, checkOut } = props;

  const navigate = useNavigate();

  const image = require("./../../../image/rooms/" +
    roomsList.roomCategory.categoryId +
    ".jpg");

  return (
    <div className="card" key={roomsList.roomId} style={{ width: "500px" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{roomsList.roomCategory.title}</h5>
        <p className="card-text">{roomsList.description}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Price : {roomsList.price}</li>
          <li class="list-group-item"> Adult Count : {roomsList.adultCount}</li>
          <li class="list-group-item">Child Count : {roomsList.childCount}</li>
          <li class="list-group-item">
            <strong>Facilities :</strong>
            {roomsList.facility.map((facility) => {
              return <UserBookRoomFacility facility={facility} />;
            })}
          </li>
        </ul>
        <button
          onClick={() => {
            navigate("/user/booking/bookroom/addbooking", {
              state: {
                roomId: roomsList.roomId,
                checkIn: checkIn,
                checkOut: checkOut,
              },
            });
          }}
          className="btm btn-primary mt-4 p-1"
        >
          Book Room
        </button>
      </div>
    </div>
  );
};

export const UserBookRoomFacility = (props) => {
  const { facility } = props;

  return (
    <div>
      <ul>
        <li>
          {facility.title} : {facility.description}
        </li>
      </ul>
    </div>
  );
};

export default UserBookRoomCard;
