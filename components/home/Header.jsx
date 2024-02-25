import React from 'react';
import NavBtn from './NavBtn';
const Header = () => {
  return (
    <div class = "z-10 h-[100px] px-[184px] py-[18px] w-full fixed top-0 left-0 flex flex-row pop">
        <div class="flex flex-1 justify-between px-[16px] bg-white rounded-lg mx-4">
            <div class="flex gap-[12px] items-center h-full ">
                <NavBtn title="For Charities"/>
                <NavBtn title = "For Individuals"/>
            </div>
            {/* <Icon/> */}
            <div  class="flex gap-[12px] h-full items-center ">
                <NavBtn title = "How it works"/>
                <NavBtn title = "Sign In"/>
                <NavBtn title = "Join Now" bgColor="bg-[#4f46e5] text-[#e2e8f0] hover:bg-[#4f46e5bc] hover:text-[#e2e8f0]"/>
            </div>
        </div>
    </div>
  );
};


export default Header;
