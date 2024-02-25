// "use client"

import LoggedInLayout from "@/app/layouts/loggedin";
import auth from "@/app/firebase/authConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { get, ref, update } from "firebase/database";
import database from "@/app/firebase/databaseConfig";
import firebase from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
const UserProfile = () =>{
    // const [user, setUID] = useState(null);
    const [type, setType] = useState(null);
    const [authuser, setUser] = useState(null);
    const [profileData, setProfileData] = useState({
        name: "User Name",
        add: '',
        mno: '',
        donations: [],
        userSince: '',
        lastDonated: '',
        email: '',
        type: 'user',
        loc: ['', '']
    });
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // My method
            if(user){
                console.log("User Signed In");
                setUser(user);
                const userProfileRef = ref(database, `users/${user.uid}`);
            get(userProfileRef)
            .then((res)=>{
                const data = res.val()
                setProfileData(data);
                setType(res.val()['type'])
                // console.log(data);
            })
          }
        });
  
        // Just return the unsubscribe function.  React will call it when it's
        // no longer needed.
        return unsubscribe;
    }, []);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //       // My method
    //       if(user){
    //           console.log("User Signed In");
    //           setUser(user)
    //       }
    //     });
    
    //     // Just return the unsubscribe function.  React will call it when it's
    //     // no longer needed.
    //     return unsubscribe;
    //   }, []);
    // function Check() { 
    //     auth.onAuthStateChanged((user) => { 
    //         if (user) { 
    //             console.log("User Signed In!!"); 
    //             setUser(user);
    //             // console.log(user)
    //         } else { 
    //             console.log("User Signed out!!"); 
    //             // ... 
    //         } 
    //     }); 
    // }
    // Check();
    // ProfileData();
    if (!authuser){
        return (
            <div className="flex text-center w-full">
                Checking Authentication!!! Redirecting
            </div>
        )
    };
    function saveData(){
        const nameref = ref(database, `users/${authuser.uid}/name`);
        const mnoref = ref(database, `users/${authuser.uid}/mno`);
        const addref = ref(database, `users/${authuser.uid}/add`);
        update(nameref, profileData['name'])
        update(mnoref, profileData['mno'])
        update(addref, profileData['add'])
    };
    return(
        <LoggedInLayout>
            {/* {user.uid} */}
            <div className="bg-red-200 w-full overflow-x-hidden min-h-max flex flex-col">
                <div className="bg-blue-300 w-full h-52 relative">
                <div className="rounded-full h-36 w-36 bg-red-200 item-left m-32 my-36 z-50 absolute" ></div>
                </div>
                <div className="bg-gray-200 w-full flex-1 flex p-28 gap-8">
                    <div className="bg-yellow-200 w-34 text-xs flex flex-col gap-2">
                        <div className="bg-blue-400 text-xl text-center">Name</div>
                    <div className="flex gap-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V12L16 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Last Donated 2 months ago</div>
                    <div className="flex gap-1"> 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Donar for 5 months
                        </div>
                        
                    </div>
                    <div className="bg-black w-0.5"></div>
                    <div className="bg-green-100 flex-1 p-8">
                        <p className="font-bold text-xl pl-10">User Details</p>
                        <div>
                        <label className="p-10 ">Name :</label>
                        <input value={profileData['name'] || ''} onChange={e=>profileData['name']} type="text" class="text-sm rounded-lg w-96 p-2.5 m-2" placeholder="Name"/>
                        </div>
                        <div>
                        <label className="p-10 ">Email :</label>
                        <input value={profileData['email'] || ''} onChange={e=>profileData['']} type="text" disabled class="text-sm rounded-lg w-96 p-2.5 m-2" placeholder="Email"/>
                        </div>
                        <div>
                        <label className="p-10 ">Address :</label>
                        <input value={profileData['add'] || ''} onChange={e=>profileData['add']} type="text" class="text-sm rounded-lg w-96 p-2.5 m-2" placeholder="Address"/>
                        </div>
                        <div>
                        <label className="p-10 ">Mobile No :</label>
                        <input value={profileData['mno'] || ''} onChange={e=>profileData['mno']} type="text" class="text-sm rounded-lg w-96 p-2.5 m-2" placeholder="Mobile Number"/>
                        </div>
                        {/* <div>
                        <label className="p-10 ">Phone :</label>
                        <input value={profileData['userSince']} type="text" class="text-sm rounded-lg w-96 p-2.5 m-2" placeholder="Phone Number"/>
                        </div> */}
                        <button onClick = {saveData} className={`px-8 py-2 my-4 bg-blue-500 mx-10 rounded-lg `}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </LoggedInLayout>
    )
}

export default UserProfile;