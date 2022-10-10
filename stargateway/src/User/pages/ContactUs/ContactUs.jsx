import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({});

  const getContactUs = () => {
    const url = `${URL}/contactus`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setContactUs(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getContactUs();
  }, []);

  return (
    <div className="container">
      <span class="border border-secondary">
        <br />
        <br />
        <div className="p-5 text-center bg-light shadow-lg p-3 mb-5 bg-body rounded-3">
          <h1 class="mb-3">StarGateWay Hotel Booking Website</h1>
          <h5 class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </h5>
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <h3 className="mb-3">{contactUs.email}</h3>
              <h3 className="mb-3">{contactUs.mobileNo}</h3>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ContactUs;
