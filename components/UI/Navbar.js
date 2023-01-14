import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-[10000]">
      <div className="container h-[70px] lg:h-[90px] flex items-center justify-between">
        <img src="images/nova.png" className="h-[80px]" alt="" />
        {/* <h1 className="text-2xl lg:text-3xl font-bold font-myriad logo-txt">NOVA</h1> */}

        <div className="flex items-center space-x-4">
        <Button className='head-btn'>WHITEPAPER</Button>
          <Button className='head-btn'>Trade</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
