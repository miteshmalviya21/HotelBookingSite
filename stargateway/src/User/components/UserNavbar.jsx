import { NavLink } from "react-router-dom";
import "./Navbar.css";

const UserNavbar = () => {
  // const [state, setState] = useState(null);
  // const [loginStatus, setLoginStatus] = useState(null);
  // const [roleOfUser, setRoleOfUser] = useState(null);

  // const sendDataToParent = (index)=>{
  //   const userData = index

  //   const {loginStatus , roleOfUser } = userData
  //   setLoginStatus(loginStatus)
  //   setRoleOfUser(roleOfUser)
  // }

  // const [isUser,setIsUser] = useState(false)
  const role = sessionStorage.getItem("role");
  const loginStatus = sessionStorage.getItem("loginStatus");
  const isUser = role === "user" ? true : false;
  const isLoginStatus = loginStatus === 1 ? true : false;

  // setIsUser(role === "user" ? true : false)

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2>
              <i> StarGateWay</i>
            </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {isUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/booking/bookroom">
                    BookRoom
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/facilities">
                  Facilities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/rooms">
                  Rooms
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/user/offers">
                  Offers
                </NavLink>
              </li>
              {isUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/booking">
                    MyBooking
                  </NavLink>
                </li>
              )}

              <li className="nav-item">
                <NavLink className="nav-link" to="/user/enquiry">
                  Enquiry
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/contactus">
                  Contact Us
                </NavLink>
              </li>
              {isUser && (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    // to="/user/userprofile"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MyAccount
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/user/userprofile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/user/changepassword"
                      >
                        Change Password
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        onClick={refreshPage}
                        className="dropdown-item"
                        to="/signout"
                      >
                        Sign Out
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              {!isUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    SignUp
                  </NavLink>
                </li>
              )}

              {!isUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    SignIn
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
