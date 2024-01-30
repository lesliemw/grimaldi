"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

// import CartPopper from "../cart/CartPopper";
// import { useIsOpen } from "../context/IsOpenContext";
// import Sidebar from "./Sidebar";

import Link from "next/link";
import SearchBar from "./SearchBar";
import AccountDropdownMenu from "@components/accounts/AccountDropdownMenu";
// import CartPopper from "@components/cart/CartPopper";

function Header() {
  // const { isOpenCart, isOpenCartToggle } = useIsOpen();
  // const { isOpenSidebar, isOpenSidebarToggle } = useIsOpen();

  return (
    <header className="grid grid-cols-3 w-full lg:p-3 p-1  items-center font-themeFont font-extralight bg-white fixed top-0 z-10 justify-items-center">
      <div className="flex items-center ml-5 cursor-pointer ">
        <RxHamburgerMenu className="m-2 text-sm md:text-md lg:text-2xl" />
        <span>Menu</span>
        {/* {isOpenSidebar && <Sidebar />} */}
        <SearchBar />
      </div>
      <div>
        <Link href="/home">
          <img
            className="lg:w-80 w-52  max-h-24 "
            src="/images/fullBranding.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex sm:mr-5 ">
        <AccountDropdownMenu />

        <button className="flex sm:p-2 items-center">
          <IoBagHandleOutline className="md:m-2 text-xl md:text-md lg:text-2xl" />
          <span className="invisible sm:visible">Cart</span>
        </button>
        {/* <CartPopper /> */}
      </div>
    </header>
  );
}

export default Header;
