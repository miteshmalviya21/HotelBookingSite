const UserRoomCard = (props) => {
  const { roomsList } = props;
  const image = require("./../../../image/rooms/" +
    roomsList.roomCategory.categoryId +
    ".jpg");
  return (
    <div key={roomsList.categoryId}>
      <br />
      <div className="card" style={{ width: "500px" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{roomsList.roomCategory.title}</h5>
          <p className="card-text">{roomsList.description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> Price : {roomsList.price}</li>
            <li class="list-group-item">
              {" "}
              Adult Count : {roomsList.adultCount}
            </li>
            <li class="list-group-item">
              Child Count : {roomsList.childCount}
            </li>
            <li class="list-group-item">
              Facilities :
              {roomsList.facility.map((facility) => {
                return <UserRoomFacility facility={facility} />;
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const UserRoomFacility = (props) => {
  const { facility } = props;

  return (
    <div>
      <ul>
        <li>
          {" "}
          {facility.title} : {facility.description}
        </li>
      </ul>
    </div>
  );
};

export default UserRoomCard;
