const UserOffersCard = (props) => {
  const { offersList } = props;

  const image = require("./../../../image/offer/" +
    offersList.offerId +
    ".jpg");

  return (
    <div>
      <br />
      <div className="card" style={{ width: "300px" }}>
        <img src={image} className="card-img-top" alt="..." height="200" />
        <div className="card-body">
          <h5 className="card-title">{offersList.title}</h5>
          <p className="card-text">{offersList.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              Time Period : {offersList.timePeriod}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserOffersCard;
