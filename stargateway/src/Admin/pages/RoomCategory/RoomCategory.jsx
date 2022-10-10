import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import RoomCategoryList from "./RoomCategoryList";

const RoomCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = () => {
    const url = `${URL}/roomCategory/allroomCategory`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setCategoryList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="container">
      <div className="table-responsive-md">
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
            {categoryList.map((categoryList) => {
              return <RoomCategoryList categoryList={categoryList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomCategory;
