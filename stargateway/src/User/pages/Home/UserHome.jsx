import CarouselContainer from "./CarouselContainer";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-4 py-md-5">
          <section className="text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Hello, Welcome</h1>
              <p className="lead text-muted">
                StarGateWay has a wide range of luxury and budget-friendly
                rooms. We have the finest rooms in India with world-class
                amenities. We bring you not only a stay option, but an
                experience in your budget to enjoy the luxury. Book your room
                with StarGateWay and don’t forget to grab an amazing deal to
                save huge on your stay.
              </p>
              <p>
                <Link to="/user/rooms" className="btn btn-primary m-2">
                  Check Rooms
                </Link>
                <Link to="/user/offers" className="btn btn-secondary m-2">
                  Check Offers
                </Link>
              </p>
            </div>
          </section>
        </div>
        <div className="col-md-6 my-5">
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
