import { Poppins } from "next/font/google";
import "../app/globals.css"
import RegisterInput from "@/components/RegisterInput";
const pop = Poppins({ subsets: ["latin"], weight:"400"})
import uDonate from "@/public/udonate.png"
const SignIn = () =>{
    return (
        <div className={pop.className + "  w-full h-screen"}>
            <div className=" max-w-screen-xl mx-auto h-screen px-16 flex justify-start items-center">
                <div className="bg-white border rounded-lg w-full max-w-lg p-4 px-8">
                    <div className="flex items-center justify-center p-6">
                        <img className="h-16" src = {uDonate.src}/>
                    </div>
                    <div className="flex text-base">
                        <div className="border-b-2 border-black rounded-none flex-1  p-4 py-2.5 text-center text-lg">
                            NGO
                        </div>
                        <div className="border-b-2 border-gray-300 text-gray-300 rounded-none flex-1  p-4 py-2.5 text-center text-lg">
                            User
                        </div>
                    </div>
                    <div className="flex gap-6 flex-col py-8 pb-6 text-center">
                        <div className="border rounded py-4 text-base text-center text-blue-700 border-blue-700 cursor-pointer">
                            Continue with Google
                        </div>
                        or
                        <RegisterInput placeholder={"Email"} type={'email'}/>
                        <RegisterInput placeholder={"Password"} type={'password'}/>
                        <div className="text-sm text-blue-500">
                            Forgot Password?
                        </div>
                        {/* <RegisterInput placeholder={"Confirm Password"} type={'password'}/> */}
                        <div className="flex justify-between pt-4">
                            <div className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                                Create Account
                            </div>
                            <div className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                                Log In
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;