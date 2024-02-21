import { Button } from "@mui/material";
import React from "react";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

const Footer = () => {
  return (
    <div className="p-8 bg-theme-dark border-t border-slate-700">
      <div className="wrapper flex justify-between items-center">
        <Button
          variant="outlined"
          className={
            "bg-transparent normal-case border border-white text-white rounded-full px-14 py-3 text-base"
          }
        >
          Back
        </Button>
        <Button
          endIcon={
            <TrendingFlatOutlinedIcon
              sx={{ color: "#6546db" }}
              className="ml-4 md:ml-24"
            />
          }
          variant="outlined"
          className={
            "bg-white normal-case border border-white rounded-full px-6 py-3 flex justify-between"
          }
        >
          <span className="bg-gradient-text bg-gradient-custom inline-block text-transparent bg-clip-text">
            Next
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
