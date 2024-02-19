import LoggedInLayout from "@/app/layouts/loggedin";

const ngoProfile = () =>{
    return(
        <LoggedInLayout>
            <div className="bg-red-200 w-full h-full flex flex-col">
                <div className="bg-blue-300 w-full h-52 relative">
                <div className="rounded-full h-36 w-36 bg-red-200 item-left m-32 my-36 z-50 absolute" ></div>
                </div>
                <div className="bg-gray-200 w-full flex p-28 gap-8">
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
                        <div className="ml-9 flex gap-6">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8719 9.1283C15.4787 9.73515 15.8743 10.5211 16.0002 11.37Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.5H17.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9H2V21H6V9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                    </div>
                    <div className="bg-black w-0.5"></div>
                    <div className="bg-green-100 flex-1 ">
                        <p className="font-bold text-xl pl-10">NGO Details</p>
                        <div>
                        <label className="p-10 ">Name :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="Name"/>
                        </div>
                        <div>
                        <label className="p-10 ">Email :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="Email"/>
                        </div>
                        <div>
                        <label className="p-10 ">Gender :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="Gender"/>
                        </div>
                        <div>
                        <label className="p-10 ">Birthday :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="DOB"/>
                        </div>
                        <div>
                        <label className="p-10 ">Phone :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="Phone Number"/>
                        </div>
                        <div>
                        <label className="p-10 ">Location :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="Location"/>
                        </div>
                        <div>
                        <label className="p-10 ">About :</label>
                        <input type="text" class="text-sm rounded-lg w-96 p-1 m-2" placeholder="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </LoggedInLayout>
    )
}


export default ngoProfile;