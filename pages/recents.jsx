import LoggedInLayout from "@/app/layouts/loggedin";
import { useState , useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "@/app/firebase/authConfig";
import database from "@/app/firebase/databaseConfig";
import { ref, get } from "firebase/database";
import Modal from "@/components/Modal";
import uDonate from "@/public/udonate.png"
const Recents = () =>{
    const [donationIDs, setDonationIDs] = useState(null);
    const [user, setUser] = useState('');
    const [donations, setDonations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedNgo, setSelectedNgo] = useState(null);
    const openModal = (index) =>{
        setSelectedNgo(donations[index]);
        console.log(selectedNgo);
        console.log(donations[index]);
        setShowModal(true);
    }
    const closeModal = () =>{
        setShowModal(false);
    }
    // const [allDonations, setAllDonations] = useState({});
    // const [isModalOpen, setModalOpen] = useState(false);
    // const [selectedDonationID, setSelectedDonationID] = useState('a');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const user = await new Promise((resolve, reject) => {
              const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
              });
            });
    
            if (user) {
              console.log('User Signed In');
              setUser(user);
    
              const userDonationsRef = ref(database, `users/${user.uid}/donations`);
              const userDonationsSnapshot = await get(userDonationsRef);
              const userDonationsData = userDonationsSnapshot.val();
            //   console.log(userDonationsData);
            //   setAllDonations(userDonationsData);
              const donationIds = Object.values(userDonationsData);
    
              setDonationIDs(donationIds);
    
              const fetchDonationData = async (id) => {
                const donationRef = ref(database, `donations/${id}`);
                const donationSnapshot = await get(donationRef);
                const donationData = donationSnapshot.val();
                return donationData;
              };
    
              const updatedDonations = await Promise.all(
                donationIds.map(async (id) => {
                  const donationData = await fetchDonationData(id);
                  return donationData;
                })
              );
    
              setDonations(updatedDonations);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        console.log(donations)
  }, []);

    // function openModal(id){
    //     setSelectedDonationID(id);
    //     setModalOpen(true);
    // }
    return(
        <LoggedInLayout>
            <div className="w-full h-full mb-24">
                <div className=" text-xl">
                    <div className="p-16 py-8">
                        <img className="h-16" src = {uDonate.src}/>
                    </div>
                    {/* {
                        donations.filter(item => item.staus==='listed'||item.staus==='accepted').map((data)=>(
                            <h1 key={data.id}>{data.status} {data.id}</h1>
                        ))
                    } */}
                </div>
                <div className="">
                {   
                        // console.log(donations.filter(item => item.status === "completed"))
                        donations.filter(item => item.status === 'listed' || item.status === 'accepted') !== null && (<h1 className="px-16 py-4 text-2xl" >Recent Donation</h1>)
                    }
                    {/* <h1 className="px-16 py-4 text-2xl">Recent Donations</h1> */}
                    <div className="flex gap-10 pb-8 px-16  overflow-x-auto">
                        {
                            donations.filter(item => item.status === 'listed' || item.status === 'accepted').map((donation, index)=>(
                                <div onClick={()=>openModal(index)} key={donation.id} className="bg-slate-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                                    <div className="flex flex-col gap-5" >
                                        <h2 className="text-xl">
                                            {donation.ttl} 
                                        {/* {donation.id} {index} */}
                                        </h2>
                                        <div className="flex gap-3">
                                            {
                                                donation.book &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                            {
                                                donation.clh &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                            {
                                                donation.med &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                        </div>
                                        {
                                            donation.isAngel &&
                                            <div className="text-xs bg-fuchsia-500 text-white px-3 py-1 rounded-lg w-fit">
                                                is Angel
                                            </div>
                                        }
                                        {
                                            donation.status === "accepted" &&
                                            <div className="text-lg text-slate-500">
                                                <div className="text-xs">
                                                    Accepted by
                                                </div>
                                                {donation.accName}
                                            </div>
                                        }
                                    </div>
                                    <div className="bg-yellow-200 rounded-md w-32 flex justify-center place-content-center ">
                                        {donation.status}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="">
                    {
                        // console.log(donations.filter(item => item.status === "completed"))
                        donations.filter(item => item.status === 'completed') !== null && (<h1 className="px-16 py-4 text-2xl" >Past Donations</h1>)
                    }
                    <div className="flex gap-10 pb-8 px-16">
                    {
                            donations.filter(item => item.status === 'completed').map((donation)=>(
                                <div key={donation.id} className="bg-blue-200 w-96 h-64 rounded-lg flex flex-col p-6 justify-between">
                                    <div className="flex flex-col gap-5" >
                                        <h2 className="text-xl">{donation.ttl}</h2>
                                        <div className="flex gap-3">
                                            {
                                                donation.book &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                            {
                                                donation.clh &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                            {
                                                donation.med &&
                                                <div>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625ZM3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6 9.75L9 4.5L12 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.82495 8.25H11.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                        </div>
                                        {
                                            donation.status === "accepted" &&
                                            <div className="text-lg text-slate-500">
                                                <div className="text-xs">
                                                    Accepted by
                                                </div>
                                                {donation.accName}
                                            </div>
                                        }
                                    </div>
                                    <div className="bg-yellow-200 rounded-md w-32 flex justify-center place-content-center ">
                                        {donation.status}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Modal isOpen={showModal} onClose={closeModal} selectedNgo={selectedNgo} userid={user.uid}/>
            </div>
        </LoggedInLayout>
    )
}

export default Recents;