import { IdproofList } from "./IdproofList";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { URL } from '../../../config'

export const Idproof = () => {
    const [idproofList, setIdproofList] = useState([]);
     
    const getIdproofList = () => {
      const url = `${URL}/idproof/allidproof`;
      axios.get(url).then((response) => {
        const result = response.data;
        // console.log(result);
        if (result["status"] === "success") {
          setIdproofList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    };
  
    useEffect(() => {
      getIdproofList();
    }, []);
  
    return (
      <div class="container">
        <div className="table-responsive-md">
          <table class="table shadow-lg p-3 my-5 bg-white rounded-3">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Type</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {idproofList.map((idproofList) => {
                return <IdproofList idproofList={idproofList} />;
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  