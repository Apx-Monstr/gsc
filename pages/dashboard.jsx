import React, { useState } from "react";
import LoggedInLayout from "@/app/layouts/loggedin";
import Donations from "@/components/Donations";
import Ngo from "@/components/Ngo";
import Modal1 from "@/components/Modal1";

const type = "user";
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
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
    setIsModalOpen(false);
  };
  return (
    <LoggedInLayout>
      <div className="bg-red-500 w-full h-full flex">
        {type === "user" && (
          <div className="flex-1 bg-green-500">
            <button className="bg-red-400" onClick={() => setIsModalOpen(true)}>
              donate now
            </button>
          </div>
        )}
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