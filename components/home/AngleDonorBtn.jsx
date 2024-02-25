import uDonate from '@/public/udonate.png';

const AngelDonorBtn = () =>{
    return (
        <div class = "bg-[#fafafa] cursor-pointer w-[325px] text-3xl font-bold text-[#DB2777] flex items-center justify-center py-4 rounded-full gap-3">
            <img class = "flex w-12" src={uDonate.src} alt="" srcset=""/>
            Donate Now
        </div>
    )
}

export default AngelDonorBtn;