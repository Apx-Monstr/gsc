const RegisterInput = ({type, placeholder, classes}) =>{
    return (
        <input className="w-full outline-none rounded-lg border text-base px-4 py-3 focus:border-black" type={type} placeholder={placeholder}/>
    )
}

export default RegisterInput;