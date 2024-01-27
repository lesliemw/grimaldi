"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

// import SearchBar from "./SearchBar";
// import CartPopper from "../cart/CartPopper";
// import { useIsOpen } from "../context/IsOpenContext";
// import Sidebar from "./Sidebar";
// import AccountDropdownMenu from "../accounts/AccountDropdownMenu";
import Image from "next/image";
import Link from "next/link";

function Header() {
  // const { isOpenCart, isOpenCartToggle } = useIsOpen();
  // const { isOpenSidebar, isOpenSidebarToggle } = useIsOpen();

  return (
    <header className="grid grid-cols-3 w-full lg:p-3 p-1  items-center font-themeFont font-extralight bg-white fixed top-0 z-10 justify-items-center">
      <div className="flex items-center ml-5 cursor-pointer ">
        <RxHamburgerMenu className="m-2 text-sm md:text-md lg:text-2xl" />
        <span>Menu</span>
        {/* {isOpenSidebar && <Sidebar />}
        {window.innerWidth > 600 && <SearchBar />} */}
      </div>
      <div>
        <Link href="/">
          <Image
            className="lg:w-80 w-52  max-h-24 "
            src="/images/fullBranding.png"
            width={52}
            height={52}
            alt=""
          />
        </Link>
      </div>
      <div className="flex sm:mr-5 ">
        {/* <AccountDropdownMenu /> */}

        <button className="flex sm:p-2 items-center">
          <IoBagHandleOutline className="md:m-2 text-xl md:text-md lg:text-2xl" />
          <span className="invisible sm:visible">Cart</span>
        </button>
        {/* {isOpenCart && <CartPopper />} */}
      </div>
    </header>
  );
}

export default Header;
