import React from "react";
import Link from "next/link";
import Image from "next/image";

import EditIcon from "@mui/icons-material/Edit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Header = () => {
  return (
    <div className="p-8 bg-theme-dark border-b border-slate-700">
      <div className="wrapper flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-theme-light w-12 h-12 flex justify-center items-center rounded-lg">
            <KeyboardBackspaceIcon />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-normal text-base">
              Media Management
              <EditIcon fontSize={"small"} className="ml-1" />
            </h1>
            <p className="text-sm font-light mt-1">Draft campaign</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="sm:hidden md:flex flex-col items-end">
            <h1 className="text-white font-normal text-base">Jane Cooper</h1>
            <Link href={""} className=" text-purple-800 font-light mt-1">
              Change Profile
            </Link>
          </div>
          <div className="w-12 h-12 relative">
            <Image
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              sizes="100px"
              src={"https://i.pravatar.cc/300"}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
