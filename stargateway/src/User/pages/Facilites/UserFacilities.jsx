import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UserFacilityCard from "./UserFacilityCard";
import axios from "axios";
import { URL } from "../../../config";

const UserFacilities = () => {
  const [facilityList, setFacilityList] = useState([]);

  const getFacilityList = () => {
    const url = `${URL}/facility/allfacility`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        //console.log(result);
        if (result["status"] == "success") {
          setFacilityList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getFacilityList();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {facilityList.map((facilityList) => {
        //[1,2,3,4]
        return <UserFacilityCard facilityList={facilityList} />;
      })}
    </div>

    // <div className="d-flex" >
    //   <div className="row">
    //     <div className="row-cols-1 row-cols-md-2 g-4">
    //       {facilityList.map((facilityList) => {
    //         return <UserFacilityCard facilityList={facilityList} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserFacilities;
