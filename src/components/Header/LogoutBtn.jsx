import React from "react";
import { logout } from "../../store/AuthSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => [dispatch(logout())]);
    navigate("/");
  };
  return (
    <div>
      <button onClick={logoutHandler} className="font-serif">
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
