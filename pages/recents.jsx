import LoggedInLayout from "@/app/layouts/loggedin";

const Recents = () =>{
    return(
        <LoggedInLayout>
            <div className="bg-gray-400 w-full h-full mb-24">
                <div className="bg-red-100 text-xl">
                    Udonate
                </div>
                <div className="bg-green-300    ">
                    <h1 className="px-16 py-4 text-2xl">Recent Donations</h1>
                    <div className="flex gap-10 pb-8 px-16 bg-red-600 overflow-x-auto">
                        <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5" >
                                <h2 className="text-xl">Harry Potter book series</h2>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </div>
                            </div>
                            <div className="bg-yellow-200 rounded-md w-32 flex justify-center place-content-center ">
                                Listed
                            </div>
                        </div>
                        <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5" >
                                <h2 className="text-xl">Harry Potter book series</h2>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </div>
                            </div>
                            <div className="bg-yellow-200 rounded-md w-32 flex justify-center place-content-center ">
                                Listed
                            </div>
                        </div>
                        <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-xl">Winter Clothes</h2>
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_187_462)">
                                    <path d="M15.2848 2.595L11.9998 1.5C11.9998 2.29565 11.6838 3.05871 11.1212 3.62132C10.5586 4.18393 9.7955 4.5 8.99985 4.5C8.2042 4.5 7.44114 4.18393 6.87853 3.62132C6.31592 3.05871 5.99985 2.29565 5.99985 1.5L2.71485 2.595C2.37538 2.7081 2.08753 2.93881 1.90324 3.24551C1.71895 3.5522 1.65036 3.91467 1.70985 4.2675L2.14485 6.87C2.1734 7.04618 2.26386 7.20641 2.39995 7.32188C2.53605 7.43736 2.70886 7.50051 2.88735 7.5H4.49985V15C4.49985 15.825 5.17485 16.5 5.99985 16.5H11.9998C12.3977 16.5 12.7792 16.342 13.0605 16.0607C13.3418 15.7794 13.4998 15.3978 13.4998 15V7.5H15.1123C15.2908 7.50051 15.4636 7.43736 15.5997 7.32188C15.7358 7.20641 15.8263 7.04618 15.8548 6.87L16.2898 4.2675C16.3493 3.91467 16.2807 3.5522 16.0965 3.24551C15.9122 2.93881 15.6243 2.7081 15.2848 2.595Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_187_462">
                                    <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>

                            <div className="text-xs text-slate-500">
                                Accepted by
                            </div>
                            <div>
                                Helping hand NGO
                            </div>
                            </div>
                            </div>

                            <div className="bg-blue-500 rounded-md w-32 flex justify-center place-content-center ">
                                Accepted
                            </div>
                        </div>

                        <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-xl">Headache Medicines</h2>
                            <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_188_539)">
                                <path d="M7.87476 15.375L15.3748 7.875C15.7252 7.53156 16.0041 7.12204 16.1953 6.67014C16.3865 6.21824 16.4862 5.73292 16.4887 5.24224C16.4912 4.75155 16.3964 4.26525 16.2098 3.81144C16.0231 3.35763 15.7484 2.94532 15.4014 2.59835C15.0544 2.25138 14.6421 1.97664 14.1883 1.79001C13.7345 1.60337 13.2482 1.50856 12.7575 1.51103C12.2668 1.51351 11.7815 1.61324 11.3296 1.80445C10.8777 1.99565 10.4682 2.27455 10.1248 2.625L2.62476 10.125C2.2743 10.4684 1.99541 10.878 1.8042 11.3299C1.61299 11.7818 1.51327 12.2671 1.51079 12.7578C1.50831 13.2485 1.60313 13.7348 1.78976 14.1886C1.9764 14.6424 2.25114 15.0547 2.59811 15.4017C2.94508 15.7486 3.35739 16.0234 3.8112 16.21C4.26501 16.3966 4.75131 16.4915 5.24199 16.489C5.73267 16.4865 6.218 16.3868 6.6699 16.1956C7.1218 16.0044 7.53131 15.7255 7.87476 15.375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.375 6.375L11.625 11.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_188_539">
                                <rect width="18" height="18" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                            <div>

                            <div className="text-xs text-slate-500">
                                Accepted by
                            </div>
                            <div>
                                Helping hand NGO
                            </div>
                            </div>
                            </div>

                            <div className="bg-blue-500 rounded-md w-32 flex justify-center place-content-center ">
                                Accepted
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="bg-yellow-200">
                    <h1 className="px-16 py-4 text-2xl" >Past Donations</h1>
                    <div className="flex gap-10 pb-8 px-16">
                    <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-xl">Winter Clothes</h2>
                            <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_188_531)">
                                <path d="M15.2851 2.595L12.0001 1.5C12.0001 2.29565 11.684 3.05871 11.1214 3.62132C10.5588 4.18393 9.79574 4.5 9.00009 4.5C8.20444 4.5 7.44138 4.18393 6.87877 3.62132C6.31616 3.05871 6.00009 2.29565 6.00009 1.5L2.71509 2.595C2.37563 2.7081 2.08777 2.93881 1.90348 3.24551C1.71919 3.5522 1.6506 3.91467 1.71009 4.2675L2.14509 6.87C2.17365 7.04618 2.2641 7.20641 2.4002 7.32188C2.53629 7.43736 2.70911 7.50051 2.88759 7.5H4.50009V15C4.50009 15.825 5.17509 16.5 6.00009 16.5H12.0001C12.3979 16.5 12.7794 16.342 13.0608 16.0607C13.3421 15.7794 13.5001 15.3978 13.5001 15V7.5H15.1126C15.2911 7.50051 15.4639 7.43736 15.6 7.32188C15.7361 7.20641 15.8265 7.04618 15.8551 6.87L16.2901 4.2675C16.3496 3.91467 16.281 3.5522 16.0967 3.24551C15.9124 2.93881 15.6246 2.7081 15.2851 2.595Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_188_531">
                                <rect width="18" height="18" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                            <div>

                            <div className="text-xs text-slate-500">
                                Accepted by
                            </div>
                            <div>
                                Helping hand NGO
                            </div>
                            </div>
                            </div>

                            <div className="bg-green-400 rounded-md w-32 flex justify-center place-content-center ">
                                Completed
                            </div>
                        </div>
                    <div className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-xl">Chetan Bhagat Book</h2>
                            <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.8252 8.25H11.1002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                            <div>

                            <div className="text-xs text-slate-500">
                                Accepted by
                            </div>
                            <div>
                                Milaap
                            </div>
                            </div>
                            </div>

                            <div className="bg-green-400 rounded-md w-32 flex justify-center place-content-center ">
                                Completed
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </LoggedInLayout>
    )
}

export default Recents;