import { useNavigate } from "react-router";

export const SignOut = () => {
  const navigate = useNavigate();

  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("firstName");
  sessionStorage.removeItem("lastName");
  sessionStorage.removeItem("loginStatus");
  sessionStorage.removeItem("role");
  navigate("/");
  
};
