import AngelDonorBtn from "./AngleDonorBtn";

const Hero = () =>{
    return (
        <div class = "flex bg-center h-[800px] bg-white  -z-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/gsc-udonate.appspot.com/o/images%2FBETk6AFLN3ODw8PZpng?alt=media&token=347854d8-9196-48d6-9934-8c7b4e788b41')] bg-cover">
        <div class=" flex flex-col items-center flex-1 justify-center">
            <span className="p-2">
                Become a
            </span>
            <div class="flex flex-col text-6xl items-center font-black leading-none text-primary">
                <span>
                    HELPING
                </span>
                <span>
                    HAND
                </span>
                <div className="m-6">

                    <AngelDonorBtn/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;