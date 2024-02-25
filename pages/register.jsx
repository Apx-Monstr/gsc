// 'use client';
import { Poppins } from "next/font/google";
import "../app/globals.css"
import RegisterInput from "@/components/RegisterInput";
const pop = Poppins({ subsets: ["latin"], weight:"400"})
import uDonate from "@/public/udonate.png"
import { useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import auth from "@/app/firebase/authConfig";
// import firebase from "firebase"
import { push, ref, set } from "firebase/database";
import database from "@/app/firebase/databaseConfig";

const Register = () =>{
    const [userType, setUserType] = useState('user');
    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState('');
    const [psswd, setPsswd] = useState('');
    const [cpsswd, setCpsswd] = useState('');
    // console.log(auth.currentUser)
    const googleRegister = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((res) => {
                if (getAdditionalUserInfo(res).isNewUser) {
                    let date = new Date().toLocaleDateString();
                    const userProfileRef = ref(database, `users/${res.user.uid}`);
                    if (userType === 'user') {
                        set(userProfileRef, {
                            name: "User Name",
                            add: '',
                            mno: '',
                            donations: [],
                            userSince: date,
                            lastDonated: '',
                            email: res.user.email,
                            type: userType,
                            loc: ['', '']
                        });
                    } else if (userType === 'ngo') {
                        const updateNGOref = ref(database, `ngos`);
                        set(userProfileRef, {
                            name: "NGO Name",
                            add: '',
                            mno: '',
                            donations: [],
                            userSince: date,
                            lastAccepted: '',
                            email: res.user.email,
                            type: userType,
                            img: '',
                            bgImg: '',
                            insta: '',
                            wp: '',
                            twtr: '',
                            loc: ['', '']
                        });
                        push(updateNGOref, res.user.uid);
                    }
                    console.log("User registered successfully with Google");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const emailRegister = () => {
        fetchSignInMethodsForEmail(auth, email)
            .then((signInMethods) => {
                if (signInMethods.length === 0) {
                    return createUserWithEmailAndPassword(auth, email, psswd);
                } else {
                    setErrMsg('User Already Exists. Try Sign In Instead');
                    throw new Error('User already exists');
                }
            })
            .then((res) => {
                if (getAdditionalUserInfo(res).isNewUser) {
                    let date = new Date().toLocaleDateString();
                    const userProfileRef = ref(database, `users/${res.user.uid}`);
                    if (userType === 'user'){
                        set(userProfileRef, {
                            name: "User Name",
                            add: '',
                            mno: '',
                            donations: [],
                            userSince: date,
                            lastDonated: '',
                            email: res.user.email,
                            type: userType,
                            loc: ['', '']
                        });
                    }else if(userType === 'ngo'){
                        set(userProfileRef, {
                            name: "NGO Name",
                            add: '',
                            mno: '',
                            donations: [],
                            userSince: date,
                            lastAccepted: '',
                            email: res.user.email,
                            type: userType,
                            img: '',
                            bgImg: '',
                            insta: '',
                            wp: '',
                            twtr: '',
                            loc: ['', '']
                        });
                    }
                    console.log("User registered successfully");
                }
            })
            // .then(() => {
            //     return auth.currentUser.setCustomUserClaims({ userType: userType });
            // })
            // .then(() => {
            //     // Handle success
            //     console.log("User registered successfully");
            // })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });
    };
    return (
        <div className={pop.className + "  w-full h-screen"}>
            <div className=" max-w-screen-xl mx-auto h-screen px-16 flex justify-start items-center">
                <div className="bg-white border rounded-lg w-full max-w-lg p-4 px-8">
                    {/* {email}{psswd}{cpsswd} */}
                    {/* {auth.currentUser.uid} */}
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
                        <div onClick={googleRegister} className="border rounded py-4 text-base text-center text-blue-700 border-blue-700 cursor-pointer">
                            Continue with Google
                        </div>
                        or
                        <RegisterInput placeholder={userType[0].toUpperCase() + userType.slice(1) + " Email"} type={'email'} val={email} onChange={(e) => setEmail(e.target.value)}/>
                        <RegisterInput placeholder={"Password"} type={'password'} val={psswd} onChange={(e) => setPsswd(e.target.value)}/>
                        <RegisterInput placeholder={"Confirm Password"} type={'password'} val={cpsswd} onChange={(e) => setCpsswd(e.target.value)}/>
                        {errMsg}
                        <div className="flex justify-between pt-4">
                            <div className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                                Sign In Instead
                            </div>
                            <div onClick={emailRegister} className="text-blue-400 bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                                Create Account
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;