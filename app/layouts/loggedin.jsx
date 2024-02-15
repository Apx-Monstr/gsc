import { Poppins } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/Navbar";

const pop = Poppins({ subsets: ["latin"], weight:"400"});

const LoggedInLayout = ({children}) =>{
    return (
        <div className={pop.className + " bg-red-500 h-screen max-h-screen w-screen"}>
            <div className="bg-white h-full w-full">
                {children}
            </div>
            <NavBar/>
        </div>
    )
}

export default LoggedInLayout;