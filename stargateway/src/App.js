import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./Admin/component/SideBar";
import AdminChangePassword from "./Admin/pages/AdminAccount/AdminChangePassword";
import { AdminProfile } from "./Admin/pages/AdminAccount/AdminProfile";
import EditAdminProfile from "./Admin/pages/AdminAccount/EditAdminProfile";
import AdminDashboard from "./Admin/pages/AdminDashBoard/AdminDashboard";
import Booking from "./Admin/pages/Booking/Booking";
import AdminContactUs from "./Admin/pages/ContactUs/AdminContactUs";
import Enquiry from "./Admin/pages/Enquiry/Enquiry";
import AddFacility from "./Admin/pages/Facility/AddFacility";
import Facility from "./Admin/pages/Facility/Facility";
import UpdateFacility from "./Admin/pages/Facility/UpdateFacility";
import { AddIdproof } from "./Admin/pages/Idproof/AddIdProof";
import { Idproof } from "./Admin/pages/Idproof/Idproof";
import UpdateIdproof from "./Admin/pages/Idproof/UpdateIdproof";
import AddOffer from "./Admin/pages/Offer/AddOffer";
import Offer from "./Admin/pages/Offer/Offer";
import AddRoomCategory from "./Admin/pages/RoomCategory/AddRoomCategory";
import RoomCategory from "./Admin/pages/RoomCategory/RoomCategory";
import RoomCategoryUpdate from "./Admin/pages/RoomCategory/RoomCategoryUpdate";
import AddRoom from "./Admin/pages/Rooms/AddRoom";
import Rooms from "./Admin/pages/Rooms/Rooms";
import UpdateRoom from "./Admin/pages/Rooms/UpdateRoom";
import SearchBookingByDates from "./Admin/pages/Search/SearchBookingByDates";
import SearchByBookingId from "./Admin/pages/Search/SearchByBookingId";
import SearchBookingById from "./Admin/pages/Search/SearchByBookingId";
import SearchByUserId from "./Admin/pages/Search/SearchByUserId";
import User from "./Admin/pages/User/User";
import SignIn from "./Landing/SignIn";
import { SignOut } from "./Landing/SignOut";
import SignUp from "./Landing/SignUp";
import UserFooter from "./User/components/UserFooter";
import UserNavbar from "./User/components/UserNavbar";
import UserAddBooking from "./User/pages/Booking/UserAddBooking";
import UserBooking from "./User/pages/Booking/UserBooking";
import UserBookRoom from "./User/pages/Booking/UserBookRoom";
import UserRooms from "./User/pages/Booking/UserRooms";
import ContactUs from "./User/pages/ContactUs/ContactUs";
import UserEnquiry from "./User/pages/Enquiry/UserEnquiry";
import UserFacilities from "./User/pages/Facilites/UserFacilities";
import UserHome from "./User/pages/Home/UserHome";
import UserChangePassword from "./User/pages/MyAccount/UserChangePassword";
import UserEditUserProfile from "./User/pages/MyAccount/UserEditUserProfile";
import UserProfile from "./User/pages/MyAccount/UserProfile";
import UserOffers from "./User/pages/Offers/UserOffers";
import EditUserRole from "./Admin/pages/User/EditUserRole";
import UserList from "./Admin/pages/User/UserList";

function App() {
  const role = sessionStorage.getItem("role");
  const isAdmin = role === "admin" ? true : false;

  return (
    <div>
      <BrowserRouter>
        {!isAdmin && <UserNavbar />}
        {isAdmin && <SideBar />}
        {/* <SideBar /> */}
        <Routes>
          {/* homepage routes */}
          <Route path="/" element={<UserHome />} />

          {/* user page routes */}
          <Route path="/user/facilities" element={<UserFacilities />} />
          <Route path="/user/rooms" element={<UserRooms />} />
          <Route path="/user/offers" element={<UserOffers />} />
          <Route path="/user/enquiry" element={<UserEnquiry />} />
          <Route path="/user/contactus" element={<ContactUs />} />

          <Route path="/user/booking/bookroom" element={<UserBookRoom />} />
          <Route path="/user/booking" element={<UserBooking />} />
          <Route
            path="user/booking/bookroom/addbooking"
            element={<UserAddBooking />}
          />

          <Route path="/user/userprofile" element={<UserProfile />} />
          <Route
            path="/user/edituserprofile"
            element={<UserEditUserProfile />}
          />
          <Route path="/user/changepassword" element={<UserChangePassword />} />

          {/* admin routes */}
          <Route path="/adminhome" element={<AdminDashboard />} />
          <Route path="/account/profile" element={<AdminProfile />} />
          <Route path="/account/profile/edit" element={<EditAdminProfile />} />
          <Route
            path="/account/changepassword"
            element={<AdminChangePassword />}
          />
          <Route path="/idproof/list" exact element={<Idproof />} />
          <Route path="/idproof/update" exact element={<UpdateIdproof />} />
          <Route path="/idproof/add" exact element={<AddIdproof />} />
          <Route path="/category/list" exact element={<RoomCategory />} />
          <Route
            path="/category/update"
            exact
            element={<RoomCategoryUpdate />}
          />
          <Route path="/category/add" exact element={<AddRoomCategory />} />
          <Route path="/facility/list" exact element={<Facility />} />
          <Route path="/facility/update" exact element={<UpdateFacility />} />
          <Route path="/facility/add" exact element={<AddFacility />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="/rooms/update" exact element={<UpdateRoom />} />
          <Route path="/rooms/add" exact element={<AddRoom />} />
          <Route path="/booking" exact element={<Booking />} />
          <Route path="/users" exact element={<User />} />
          <Route path="/users/list" exact element={<UserList />} />
          <Route
            path="/users/edit/changerole"
            exact
            element={<EditUserRole />}
          />
          <Route path="/enquiry" exact element={<Enquiry />} />
          <Route path="/offer" exact element={<Offer />} />
          <Route path="/offer/add" exact element={<AddOffer />} />
          <Route
            path="/search/bookingbydate"
            exact
            element={<SearchBookingByDates />}
          />
          <Route
            path="/search/bookingid"
            exact
            element={<SearchByBookingId />}
          />
          <Route path="/search/userid" exact element={<SearchByUserId />} />

          <Route path="/contactus" exact element={<AdminContactUs />} />

          {/* landing page routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </BrowserRouter>
      <UserFooter />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
