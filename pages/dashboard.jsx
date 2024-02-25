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
import {ref as sref, uploadBytes, getDownloadURL} from "firebase/storage";
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
// const dataDonations = [
//   {
//     type: "user",
//     name: "John Doe",
//     address: "123 Main Street",
//     phone: "555-1234",
//     cloth: true,
//     book: false,
//     medicine: true,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
//   {
//     type: "user",
//     name: "Jane Smith",
//     address: "456 Elm Street",
//     phone: "555-5678",
//     cloth: false,
//     book: true,
//     medicine: false,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
//   {
//     type: "user",
//     name: "Alice Johnson",
//     address: "789 Oak Street",
//     phone: "555-9012",
//     cloth: true,
//     book: true,
//     medicine: true,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
//   {
//     type: "user",
//     name: "Alice Johnson",
//     address: "789 Oak Street",
//     phone: "555-9012",
//     cloth: true,
//     book: true,
//     medicine: true,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
//   {
//     type: "user",
//     name: "Alice Johnson",
//     address: "789 Oak Street",
//     phone: "555-9012",
//     cloth: true,
//     book: true,
//     medicine: true,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
//   {
//     type: "user",
//     name: "Alice Johnson",
//     address: "789 Oak Street",
//     phone: "555-9012",
//     cloth: true,
//     book: true,
//     medicine: true,
//     description:
//       "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
//   },
// ];

function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
const Dashboard = () => {
  const [donations, setDonations] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('user');
  const [profileData, setProfileData] = useState({
    // address: "",
    // email: "",
    // lastDonated: "",
    // location: ['', ''],
    // mobNo: "",
    // name: "",
    // type: "",
    // userSince: ""
  });
  const [authuser, setUser] = useState(null);

  const [formData, setFormData] = useState({
    ttl: '',
    mno: '',
    med: false,
    book: false,
    clh: false,
    desc: '',
    add: '',
    img: [],
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
              setFormData({
                  ttl: data['email'],
                  mno: data['mno'],
                  med: false,
                  book: false,
                  clh: false,
                  desc: data['email'],
                  add: data['add'],
                  img: [],
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
    let images = formData.img
    images.push(file)
    console.log("Images" , images)
    setFormData({ ...formData, img: images });
  };

  async function uploadFilesToStorage() {
    let files = formData['img'];
    // files = [files];
    let imgnames = [];
    files.map(async (file)=>{
      let fname = generateRandomId()
      if(file){
        fname = fname + file.name.split(".").reverse()[0]
      }
      // fname = fname + file.name.split(".").reverse()[0]
      const storageRef = sref(storage, `images/${fname}`);
      uploadBytes(storageRef, file).then((snapshot)=>{
        return getDownloadURL(storageRef);
        
      }).then((downloadURL) => {
        console.log("File Uploaded Successfully. Download URL:", downloadURL);
        imgnames.push({
          fname: fname,
          url: downloadURL,
        });
        formData['img'] = imgnames;
        console.log(formData['img'])
        uploadFormData();
        setIsModalOpen(false);
        setFormData({
          ttl: profileData['email'],
          mno: profileData['mno'],
          med: false,
          book: false,
          clh: false,
          desc: profileData['email'],
          add: profileData['add'],
          img: [],
        });
      })
    })
  }

  const uploadFormData = async () => {
    try {
      // Upload data to Firebase Realtime Database
      // uploadFilesToStorage(formData['img'])
      const did = generateRandomId()
      const dbRef = ref(database, `donations/${did}`);
      const userRef = ref(database, `users/${authuser.uid}/donations`)
      formData['id'] = did
      formData['by'] = authuser.uid;
      formData['status'] = 'listed';
      formData['to'] = '';
      formData['isAngel'] = false
      console.log(formData)
      await set(dbRef, formData);
      await push(userRef, did)
      console.log(formData)

      console.log("Data and image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data and img:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted with data:", formData);
    // uploadFormData(formData)
    uploadFilesToStorage()
    // setFormData({
    //   ttl: profileData['email'],
    //   mno: profileData['mno'],
    //   med: false,
    //   book: false,
    //   clh: false,
    //   desc: profileData['email'],
    //   add: profileData['add'],
    //   img: [],
    // });
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
          {type === "ngo" && <Ngo type={type} />}
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