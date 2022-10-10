import { FacilityList } from "./FacilityList";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const Facility = () => {
    const [facilityList, setFacilityList] = useState([]);

  const getFacilityList = () => {
    const url = `${URL}/facility/allfacility`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
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
    <div className="container">
      <div>
        <table className="table shadow-lg p-3 my-5 bg-white rounded-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {facilityList.map((facilityList) => {
              return <FacilityList facilityList={facilityList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facility;
