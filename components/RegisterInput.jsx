const RegisterInput = ({type, placeholder,val,onChange, classes}) =>{
    return (
        <input value = {val} onChange={onChange} className="w-full outline-none rounded-lg border text-base px-4 py-3 focus:border-black" type={type} placeholder={placeholder}/>
    )
}

export default RegisterInput;