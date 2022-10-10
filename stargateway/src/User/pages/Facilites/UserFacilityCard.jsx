const UserFacilityCard = (props) => {
  const { facilityList } = props;

  const image = require("./../../../image/facility/" +
    facilityList.facilityId +
    ".jpg");

  return (
    <div key={facilityList.facilityId}>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{facilityList.title}</h5>
          <p className="card-text">{facilityList.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFacilityCard;
