import FootBtn from "./FootBtn";
import Icon from "./Icon";
const Footer = ()=>{
    return (
        <div class = "flex border-t-2 bg-white">
        <div class="mx-[184px] m-auto flex justify-between w-full  pt-10">
            <div class="flex justify-between flex-1 py-4">
                <div class="flex ">
                    <Icon classes = "h-24"/>
                </div>
                <div class="flex justify-around gap-[60px] px-10">
                    <div class = "px-4">
                        <span class="font-bold ">
                            Donate
                        </span>
                        <div class="flex flex-col text-sm pt-4">
                            <FootBtn title = "Medicine"/>
                            <FootBtn title = "Cloth"/>
                            <FootBtn title = "Books"/>
                            <FootBtn title = "Other"/>
                        </div>
                    </div>
                    <div class = "px-4">
                        <span class="font-bold">
                            Learn More
                        </span>
                        <div class="flex flex-col text-sm pt-4 ">
                            <FootBtn title = "How It Works"/>
                            <FootBtn title = "Pricing"/>
                            <FootBtn title = "Why Choose Us"/>
                            <FootBtn title = "FAQs"/>
                        </div>
                    </div>
                    <div class = "px-4">
                        <span class="font-bold text-base">
                            Resources
                        </span>
                        <div class="flex flex-col text-sm pt-4 ">
                            <FootBtn title = "For Individuals"/>
                            <FootBtn title = "For Charities"/>
                            <FootBtn title = "About"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;