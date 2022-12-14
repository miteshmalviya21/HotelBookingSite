import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../../config";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import CheckBox from "./CheckBox";

const UpdateRoom = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [roomId, setRoomId] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [bedCount, setBedCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [facilityIdList, setFacilityIdList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [facilityList, setFacilityList] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(facilityList.length).fill(false)
  );

  const loadRoom = () => {
    const { roomId } = state;

    const url = `${URL}/rooms/${roomId}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          const {
            roomId,
            categoryId,
            childCount,
            adultCount,
            bedCount,
            price,
            description,
          } = result["data"];

          setRoomId(roomId);
          setCategoryId(categoryId);
          setChildCount(childCount);
          setAdultCount(adultCount);
          setBedCount(bedCount);
          setPrice(price);
          setRoomId(roomId);
          setDescription(description);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  const loadCategory = () => {
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

  const loadFacility = () => {
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
    loadRoom();
    loadCategory();
    loadFacility();
  }, []);

  const saveRoom = (e) => {
    e.preventDefault();
    if (categoryId === 0) {
      toast.warning("please enter category");
    } else if (bedCount === 0) {
      toast.warning("please enter bedCount");
    } else if (adultCount === 0) {
      toast.warning("please enter adultCount");
    } else if (price === 0) {
      toast.warning("please enter price");
    } else {
      const body = {
        roomId,
        categoryId,
        childCount,
        adultCount,
        bedCount,
        price,
        description,
        facilityIdList,
      };
      console.log(body);

      const url = `${URL}/rooms/edit/${roomId}`;
      axios
        .post(url, body)
        .then((response) => {
          console.log(response);
          toast.success("Updated Room");
          navigate("/rooms");
        })
        .catch((error) => {
          console.log(error.Error);
          toast.error("Something went wrong!");
        });
    }
  };

  const handleOnChange = (position, e) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    if (e.target.checked) {
      setFacilityIdList((prevState) => [...prevState, e.target.value]);
    }

    if (!e.target.checked) {
      const updatedList = facilityIdList.filter(
        (ele) => ele !== e.target.value
      );
      setFacilityIdList([...updatedList]);
    }
    console.log(updatedCheckedState, e.target.value);

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="rooms">
      <div class="container">
        <form
          onSubmit={saveRoom}
          className="shadow-lg p-3 my-5 bg-white rounded-3"
        >
          <div className="text-center">
            <h2>
              <b>Update Room</b>
            </h2>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="" className="label-control">
              <h3>Room Category</h3>
            </label>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
            >
              {categoryList.map((category) => {
                return (
                  <option value={category.categoryId}>{category.title}</option>
                );
              })}
            </select>
          </div>
          <br />
          <div class="form-group">
            <label for="example">
              <h3>Price</h3>
            </label>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              class="form-control"
              id="example"
              value={price}
            />
          </div>
          <br />
          <div class="form-group">
            <div class="row">
              <div class="col-sm">
                <h4>Max Adult</h4>
              </div>
              <div class="col-sm">
                <h4>Max Child</h4>
              </div>
              <div class="col-sm">
                <h4>No.of Bed</h4>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div class="row">
              <div class="col">
                <input
                  onChange={(e) => {
                    setAdultCount(e.target.value);
                  }}
                  type="number"
                  class="form-control"
                  value={adultCount}
                />
              </div>
              <div class="col">
                <input
                  onChange={(e) => {
                    setChildCount(e.target.value);
                  }}
                  type="number"
                  class="form-control"
                  value={childCount}
                />
              </div>
              <div class="col">
                <input
                  onChange={(e) => {
                    setBedCount(e.target.value);
                  }}
                  type="number"
                  class="form-control"
                  value={bedCount}
                />
              </div>
            </div>
          </div>
          <br />
          <div class="form-group">
            <label for="example">
              <h3>Description</h3>
            </label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              class="form-control"
              id="example"
              value={description}
            />
          </div>
          {/* <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Upload
              </span>
            </div>
            <input
              type="file"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div> */}
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>
                <h3>Select Facility :</h3>
              </label>
              <CheckBox facilityList={facilityList} onChange={handleOnChange} />
            </div>
            <br />
          </div>
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoom;
