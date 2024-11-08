import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const authStatus = useSelector((state) => state.auth);
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-around">
          <div>
            <Link to={"/"}>RRA Shop</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/cart"}>Cart</Link>
          </div>
          <div className="flex flex-wrap">
            {!authStatus && (
              <>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Signup</Link>
              </>
            )}
            {authStatus && <LogoutBtn />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
