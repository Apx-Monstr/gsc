import React, { useState } from "react";
import LoggedInLayout from "@/app/layouts/loggedin";
import Donations from "@/components/Donations";
import Ngo from "@/components/Ngo";
import Modal1 from "@/components/Modal1";
import { push, ref, set, get } from "firebase/database";
import database from "@/app/firebase/databaseConfig";
import auth from "@/app/firebase/authConfig";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/app";
import storage from "@/app/firebase/storageconfig";
import {ref as sref, uploadBytes} from "firebase/storage";
// import { storage, ref as storageRef, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// const type = "user";
const dataNGO = [
  {
    type: "NGO",
    name: "John Doe",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+1234567890",
    address: "123 Main St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Jane Smith",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+1987654321",
    address: "456 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Bob Johnson",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+1122334455",
    address: "789 Oak St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
  {
    type: "NGO",
    name: "Humanitarian Aid",
    image:
      "https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg",
    phone: "+9876543210",
    address: "789 Elm St, City, State, ZIP",
  },
];
const dataDonations = [
  {
    type: "user",
    name: "John Doe",
    address: "123 Main Street",
    phone: "555-1234",
    cloth: true,
    book: false,
    medicine: true,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
  {
    type: "user",
    name: "Jane Smith",
    address: "456 Elm Street",
    phone: "555-5678",
    cloth: false,
    book: true,
    medicine: false,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
  {
    type: "user",
    name: "Alice Johnson",
    address: "789 Oak Street",
    phone: "555-9012",
    cloth: true,
    book: true,
    medicine: true,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
  {
    type: "user",
    name: "Alice Johnson",
    address: "789 Oak Street",
    phone: "555-9012",
    cloth: true,
    book: true,
    medicine: true,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
  {
    type: "user",
    name: "Alice Johnson",
    address: "789 Oak Street",
    phone: "555-9012",
    cloth: true,
    book: true,
    medicine: true,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
  {
    type: "user",
    name: "Alice Johnson",
    address: "789 Oak Street",
    phone: "555-9012",
    cloth: true,
    book: true,
    medicine: true,
    description:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  },
];

function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
// const Dashboard = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("../app/data.json")
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('user');
  const [profileData, setProfileData] = useState({
    address: "",
    email: "",
    lastDonated: "",
    location: ['', ''],
    mobNo: "",
    name: "",
    type: "",
    userSince: ""
});
  const [authuser, setUser] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    mobileNumber: "",
    medicine: false,
    books: false,
    clothes: false,
    description: "",
    addressLine1: "",
    addressLine2: "",
    image: null,
  });

    function ProfileData(){
        const userLoggedIn = Boolean(authuser);
        if(userLoggedIn){
            const userProfileRef = ref(database, `users/${authuser.uid}`);
            get(userProfileRef)
            .then((res)=>{
                setProfileData(res.val());
                setType(profileData['type'])
                console.log(profileData)
                console.log(profileData['type'])
            })
        }
    }
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
                setFormData({
                    title: data['email'],
                    mobileNumber: data['mobNo'],
                    medicine: false,
                    books: false,
                    clothes: false,
                    description: data['email'],
                    addressLine1: data['address'],
                    addressLine2: "",
                    image: null,
                })
            })
          }
        });
    
        // Just return the unsubscribe function.  React will call it when it's
        // no longer needed.
        return unsubscribe;
      }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  async function uploadFilesToStorage(files) {
    console.log(files);
    files = [files];
    console.log(files)

    files.map(async (file)=>{
      const storageRef = sref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot)=>{
        console.log("File Uploaded Successfully")
      })
    })

    // const storagePromises = files.map(async (file) => {
    //   return new Promise((resolve, reject) => {
    //     const storageRef = ref(storage, `images/${file.name}`);
  
    //     storageRef.put(file).then((snapshot) => {
    //       // Get the download URL of the uploaded image
    //       console.log("File Uploaded")
    //     //   storageRef.getDownloadURL().then((downloadURL) => {
    //     //     resolve({ name: file.name, url: downloadURL });
    //     //   }).catch((error) => {
    //     //     reject(error);
    //     //   });
    //     // }).catch((error) => {
    //     //   reject(error);
    //     });
    //   });
    // });
  
    // try {
    //   const results = await Promise.all(storagePromises);
    //   console.log("Upload successful:", results);
    // } catch (error) {
    //   console.error("Error uploading files:", error);
    // }
  }

  const uploadFormData = async (formData) => {
    try {
      // Upload data to Firebase Realtime Database
      const did = generateRandomId()
      const dbRef = ref(database, `donations/${did}`);
      const userRef = ref(database, `users/${authuser.uid}/donations`)
      formData['id'] = did
      formData['uploadedBy'] = authuser.uid;
      await set(dbRef, formData);
      await push(userRef, did)
      uploadFilesToStorage(formData['image'])
      // console.log(formData)
  
      console.log("Data and image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data and image:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted with data:", formData);
    setFormData({
      title: "",
      mobileNumber: profileData['mobno'],
      medicine: false,
      books: false,
      clothes: false,
      description: "",
      addressLine1: profileData['address'],
      addressLine2: "",
      image: null,
    });
    uploadFormData(formData)
    setIsModalOpen(false);
  };

  return (
    <LoggedInLayout>
      <div className="bg-red-500 w-full h-full flex">
        <div className="flex-1 bg-green-500">
          {type==="user"&&<button className="bg-red-400" onClick={() => setIsModalOpen(true)}>
            donate now
          </button>}
        </div>
        <div className="bg-white w-[30%] overflow-y-scroll">
          {type === "user" && <Donations data={dataNGO} />}
          {type === "ngo" && <Ngo data={dataDonations} />}
        </div>
      </div>

      <Modal1
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
        onImageChange={handleImageChange}
      />
    </LoggedInLayout>
  );
};

export default Dashboard;