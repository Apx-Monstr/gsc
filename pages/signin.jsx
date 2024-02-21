// 'use client';
import {ref, get} from "firebase/database";
import database from "@/app/firebase/databaseConfig";
import { Poppins } from "next/font/google";
import "../app/globals.css"
import RegisterInput from "@/components/RegisterInput";
const pop = Poppins({ subsets: ["latin"], weight:"400"})
import uDonate from "@/public/udonate.png"
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, getAuth } from "firebase/auth";
import auth from "@/app/firebase/authConfig";
const SignIn = () =>{
    const [userType, setUserType] = useState('user');
    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState('');
    const [psswd, setPsswd] = useState('');
    console.log(auth.currentUser)
    const googleLogin = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((res) => {
                // Fetch user data from Realtime Database
                const userProfileRef = ref(database, `users/${res.user.uid}`);
                sessionStorage.setItem('userID', res.user.uid);
                // sessionStorage.setItem('userType',)
                return get(userProfileRef);
            })
            .then((userData) => {
                console.log("User logged in successfully with Google:", userData.val());
                sessionStorage.setItem('userType', userData.val()['type'])
                console.log(sessionStorage.getItem('userType'))
                console.log(sessionStorage.getItem('userID'))
            })
            .catch((error) => {
                // Handle login errors
                console.error(error);
            });
    };
    const emailLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Fetch user data from Realtime Database
                const userProfileRef = ref(database, `users/${res.user.uid}`);
                return get(userProfileRef);
            })
            .then((userData) => {
                console.log("User logged in successfully with email/password:", userData.val());
            })
            .catch((error) => {
                // Handle login errors
                console.error(error);
            });
    };
    // setUserType(user) =>{ userType = user}
    return (
        <div className={pop.className + "  w-full h-screen"}>
            <div className=" max-w-screen-xl mx-auto h-screen px-16 flex justify-start items-center">
                <div className="bg-white border rounded-lg w-full max-w-lg p-4 px-8">
                    {/* {email}{psswd}{cpsswd} */}
                    <div className="flex items-center justify-center p-6">
                        <img className="h-16" src = {uDonate.src}/>
                    </div>
                    <div className="flex text-base">
                        <div onClick={()=>setUserType('user')} className={` border-b-2 border-black rounded-none flex-1 p-4 py-2.5 text-center text-lg cursor-pointer ${userType === 'user' ? 'bg-blue-500' : 'bg-red-500'}` }>
                            User
                        </div>
                        <div onClick={()=>setUserType('ngo')} className={` border-b-2 border-black rounded-none flex-1 p-4 py-2.5 text-center text-lg cursor-pointer ${userType === 'ngo' ? 'bg-blue-500' : 'bg-red-500'}` }>
                            NGO
                        </div>
                    </div>
                    <div className="flex gap-6 flex-col py-8 pb-6 text-center">
                        <div onClick={googleLogin} className="border rounded py-4 text-base text-center text-blue-700 border-blue-700 cursor-pointer">
                            Continue with Google
                        </div>
                        or
                        <RegisterInput placeholder={userType[0].toUpperCase() + userType.slice(1) + " Email"} type={'email'} val={email} onChange={(e) => setEmail(e.target.value)}/>
                        <RegisterInput placeholder={"Password"} type={'password'} val={psswd} onChange={(e) => setPsswd(e.target.value)}/>
                        {errMsg}
                        <div className="flex justify-between pt-4">
                            <div className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                                Create Account Instead
                            </div>
                            <div onClick={emailLogin} className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
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