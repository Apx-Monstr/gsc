import React from 'react';
import NavBtn from './NavBtn';
import Icon from './Icon';
// import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    // const router = useRouter()
  return (
    <div class = " h-[100px] px-[184px] py-[18px] w-full fixed top-8 left-0 flex flex-row pop z-40">
        <div class="flex flex-1 justify-between px-[16px] bg-white  rounded-lg">
            <div class="flex gap-[12px] items-center h-full ">
                <NavBtn title="For Charities"/>
                <NavBtn title = "For Individuals"/>
            </div>
            <div className="flex h-full items-center">
                <Icon classes="h-12"/>
            </div>
            <div  class="flex gap-[12px] h-full items-center ">
                <NavBtn title = "How it works"/>
                <Link href={"/signin"}>
                    <NavBtn title = "Sign In"/>
                </Link>
                <Link href={"/register"}>
                    <NavBtn title = "Join Now" bgColor="bg-[#4f46e5] text-[#e2e8f0] hover:bg-[#4f46e5bc] hover:text-[#e2e8f0]"/>
                </Link>
            </div>
        </div>
    </div>
  );
};


export default Header;
