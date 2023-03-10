"use client"; // TODO : TypeError: createContext only works in Client Components. By adding this we can use material icon

// Header Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { signIn, signOut, useSession } from "next-auth/react";

import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
 
  return (
    <header>
      {/* //* TopNav */}
      <div className="flex items-center bg-amazon_blue p-4 flex-? pb-2">
        {/* Logo: We make sm:flex-grow-0 if you remove it logo will take its maximum width */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href={"/"}>
            <Image
              src="/amazon_PNG11.png"
              width={100}
              height={50}
              priority
              alt="logo"
            />
          </Link>
        </div>
        {/* Search: We make hidden in mobile and display flex in small screens we make flex-grow so search bar takes its maximum width */}
        <div className="hidden sm:flex bg-yellow-400 items-center hover:bg-yellow-300 mx-3 h-10 rounded-md flex-grow px-2">
          <input
            className="p-4 h-full flex-grow flex-shrink rounded-l-m focus:outline-none"
            type="text"
            placeholder="Search Amazon"
          />{" "}
          {/* //*Important: input will grow maximum  */}
          <i className="cursor-pointer w-10 flex justify-center items-center">
            <SearchRoundedIcon />
          </i>
        </div>

        {/* RightSide:  */}
        <div className="text-yellow-50 flex items-center space-x-4 text-xs md:text-sm">
          {/* First div */}
          <div onClick={!session ? signIn : signOut} className="link">
            {/* //?Note that link is the custom utility class  */}
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "SignIn"}
            </p>
            <p className="font-semibold ">Account &amp; setting</p>
          </div>
          {/* Second div */}
          <div className="link ">
            <p>Return</p>
            <p className="font-semibold ">&amp; Orders</p>
          </div>
          {/* Third div */}
          <Link href={'./checkout'}>
          <div className="link ">
            <span className="absolute top-3 right-3 text-center w-4 bg-yellow-300  rounded-full text-gray-900 font-semibold">
              {items.length}
            </span>
            {/* We will get the amount of the product in backend work */}
            <i>
              <ShoppingCartRoundedIcon />
            </i>
            <p className="font-semibold text-xs">Basket</p>
          </div>
          </Link>
        </div>
      </div>
      {/* //*: bottomNav:  */}
      <div className="mainNav bg-amazon_blue-light text-[#eef3f8] flex p-2 pl-6 items-center space-x-4">
        <span className="link ">
          <MenuIcon />
        </span>
        <div className="navFill space-x-2 text-xs md:space-x-4 md:text-sm">
          <a href="#">Today&apos;s Deals</a>
          <a href="#">Customer Service</a>
          <a href="#">Gift Cards</a>
          <a href="#">Register</a>
          <a href="#">Sell</a>
          <a className="hidden md:inline-flex" href="#">
            Gift Cards
          </a>
          <a className="hidden md:inline-flex" href="#">
            Today&apos;s Deals
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

