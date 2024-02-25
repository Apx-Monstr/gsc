import uDonate from "@/public/udonate.png"

const Icon = ({classes})=>{
    return (
        <div className={`${classes} flex`}>
            <img src={uDonate.src} alt="" srcset=""/>
        </div>
    )
}

export default Icon;