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
  ];
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <div className="bg-gray-800 p-5">
        <div className="flex flex-wrap justify-around text-white  text-lg">
          <div className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg font-serif font-bold">
            <Link to={"/"}>RRA Shop</Link>
          </div>
          <div className="flex flex-wrap gap-10">
            {navItems.map((item) => (
              <span
                className="   text-white font-mono flex items-center justify-center gap-3"
                key={item.name}
              >
                <Link to={item.link}>{item.name}</Link>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            {!authStatus && (
              <>
                <Link
                  to={"/login"}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-lg font-serif"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-serif"
                >
                  Signup
                </Link>
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
