import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import { useNavigate } from "react-router-dom";

export function IdproofList(props) {
  const { idproofList } = props;
  console.log(idproofList);
  
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };
  
  const deleteIdproof = () => {
    const url = `${URL}/idproof/delete/${idproofList.id}`;
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        toast.success("Deleted Successfully");
        refreshPage();
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };
  
  return (
    <tr key={idproofList.id}>
      <td>{idproofList.id}</td>
      <td>{idproofList.type}</td>
      <td>
        <button
          onClick={() => {
            navigate("/idproof/update/", {
              state: { id: idproofList.id },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={deleteIdproof} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
