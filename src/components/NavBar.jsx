import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { Location } from "./Location";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className="flex py-5 items-center px-5 max-w-7xl mx-auto">
      <div className="flex items-center gap-x-4">
        <div>
          <Image src={logo} width={120} alt="heroImage" />
        </div>
        <div className="items-center hidden md:flex">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon className="text-gray-500" />
            </div>
            <InputBase
              placeholder="Search for movies, Events, Plays, Sports and Activities"
              className="pl-10 pr-4 -py-1 w-[34rem] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex grow justify-end gap-x-4">
        <div>
          <Location />
        </div>
        <div>
          <Button
            variant="outline"
            size="default"
            className="bg-[#f84464] text-white hover:bg-[#f84464]/90 hover:text-white"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
