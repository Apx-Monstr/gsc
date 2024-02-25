import AngelDonorBtn from "./AngleDonorBtn";

const AngelDonor = () =>{
    return(
        <div class = "flex justify-center py-16 bg-[#FCEDDA]  pb-24 relative">
            <div className="max-w-screen-xl w-full bg-gray-200 z-10 rounded-lg flex">
                <div className="flex-1 p-16 flex gap-4 flex-col">
                    <div className="text-pink-400 text-xl">
                        Angel Donor
                    </div>
                    <div className="text-5xl leading-relaxed font-bold">
                        Dont wanna sign up we <br/> got you covered
                    </div>
                    <AngelDonorBtn/>
                </div>
                <div className="flex-1">
                    adas
                </div>
                {/* <svg className="absolute bottom-0 left-0 w-full scale-125 -z-10" width="1168" height="117" viewBox="0 0 1168 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1183 8.49996C1263 82.5 1109.9 245 1000 245C890.095 245 -33.5 210.404 -33.5 100.5C-33.5 -9.40488 478.5 57 591.5 75C781.5 62.5001 1144 -27.575 1183 8.49996Z" fill="#DB2777" fill-opacity="0.8"/>
</svg> */}

            </div>
        </div>
    )
}

export default AngelDonor;