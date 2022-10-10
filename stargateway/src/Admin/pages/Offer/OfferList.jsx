import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import { useNavigate } from "react-router-dom";

const OfferList = (props) => {
  const { offerList } = props;

  const navigate = useNavigate();
  
  const refreshPage = () => {
    window.location.reload(false);
  };

  const DeleteOffer = () => {
    const url = `${URL}/offers/delete/${offerList.offerId}`;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("Deleted Successfully");
          refreshPage();
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  return (
    <tr key={offerList.offerId}>
      <td>{offerList.offerId}</td>
      <td>{offerList.title}</td>
      <td>{offerList.description}</td>
      <td>{offerList.timePeriod}</td>

      <td>
        <button
          onClick={() => {
            navigate("/offer/update", {
              state: { offerId: offerList.offerId },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={DeleteOffer} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OfferList;
