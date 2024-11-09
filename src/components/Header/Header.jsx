import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "Add a Product",
      link: "/add-product",
    },
  ];
  const authStatus = useSelector((state) => state.auth);
  return (
    <>
      <div className="bg-gray-900 p-3">
        <div className="flex flex-wrap justify-around text-white  text-lg">
          <div className="font-bold bg-orange-400 p-1 rounded-xl">
            <Link to={"/"}>RRA Shop</Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <span className="bg-gray-400 p-1 rounded-xl text-black w-14 flex items-center justify-center">
                <Link to={item.link}>{item.name}</Link>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
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
