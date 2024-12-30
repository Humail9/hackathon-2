"use client";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"





const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togleMenue = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <div className="container bg-white text-black	justify-center items-center h-16">
    //   <div>
    //   <div className="text-2xl font-bold pt-4 ">Bandage</div>
    //   <div className="flex text-blue-600 justify-center items-center">
    //       <IoMdContact />
    //       Login / Register
    //     </div>
    //     <div className=" flex justify-end items-end text-blue-600 gap-6">
    //       <div className="gap-6">
    //         <GoSearch />
    //       </div>
    //       <div className="flex">
    //         <BsCart2 />1
    //       </div>
    //       <div className="flex">
    //         <FaRegHeart />1
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex pb-10 ">
    //     <div className="text-xl font-medium"></div>

    //     <ul className="gap-5 lg:gap-9 hidden md:flex justify-center items-center">
    //       <li className="menuLink">
    //         <Link href="/">Home</Link>
    //       </li>
    //       <li className="menuLink">
    //         <Link href="/about">About</Link>
    //       </li>
    //       <li className="menu">
    //         <Link href="/shop">
    //           Shop
    //           <IoIosArrowDown />
    //         </Link>
    //       </li>
    //       <li className="menuLink">
    //         <Link href="/contact">Contact</Link>
    //       </li>
    //     </ul>

    //     <div className="md:hidden" onClick={togleMenue}>
    //       {isMenuOpen ? (
    //         <AiOutlineClose size={30} />
    //       ) : (
    //         <AiOutlineMenu size={30} />
    //       )}
    //     </div>
    //     <div className="flex text-blue-600 justify-center items-center">
    //       <IoMdContact />
    //       Login / Register
    //     </div>
    //   </div>
    //   {isMenuOpen && (
    //     <ul className="flex flex-col gap-5 mt-4 md:hidden">
    //       <li className="menulink">
    //         <Link href="/home" onClick={togleMenue}>
    //           Home
    //         </Link>
    //       </li>
    //       <li className="menulink">
    //         <Link href="/about" onClick={togleMenue}>
    //           About
    //         </Link>
    //       </li>
    //       <li className="menulink">
    //         <Link href="/skill" onClick={togleMenue}>
    //           Shop
    //           <IoIosArrowDown />
    //         </Link>
    //       </li>
    //       <li className="menulink">
    //         <Link href="/contact" onClick={togleMenue}>
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   )}
    // </div>

    <div className="h-[60px]  w-full         flex  items-center justify-between   md:justify-evenly">
      <h1 className="text-[#252B42] font-bold text-2xl">Bandage</h1>

      <nav className="md:flex justify-evenly hidden text-sm  gap-3">
        <Link href={"/"}>Home</Link>
        <div className="flex gap-1 items-center text-sm justify-center">
          <Link href={"/shop"}>Shop</Link>
          <IoIosArrowDown />
        </div>
        <Link href={"/about"}>About</Link>

        <Link href={"/random"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/pricing"}>Pages</Link>
      </nav>
      <div className="flex  gap-2  items-center  justify-center">

      <div className="flex   items-center justify-center    gap-3">
        <div className="md:flex  hidden justify-center items-center gap-1 text-[#23A6F0] text-[14px]">
          <IoMdContact />
          <p>Login / Register</p>
        </div>

        <div className="flex items-center md:justify-center justify-end text-[#23A6F0]  text-[16px]  gap-3">

       <GoSearch />
        <BsCart2 />
       <span className="md:block  hidden"> <FaRegHeart /></span>
  
        </div>
      </div>

      <div>

      <Sheet>
  <SheetTrigger  className="md:hidden  mt-2"><AiOutlineMenu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>      
      </SheetDescription>
    </SheetHeader>
      <div  className="flex flex-col gap-8  text-center   mt-24">
         <Link href={'/'}  >Home</Link>
         <Link href={'/shop'}>Shop</Link>
         <Link href={'/abhout'}>About</Link>
         <Link href={'/random'}>Blog</Link>
         <Link href={'/contact'}>Contact</Link>
         <Link href={'/pricing'}>Pages</Link>
      </div>
  </SheetContent>
</Sheet>
</div>
      </div>
    </div>
  );
};
export default Header1;
