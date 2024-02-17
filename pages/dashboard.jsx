// import dashboardLayout from "@/app/layouts/dashboardLayout";
import LoggedInLayout from "@/app/layouts/loggedin";
import Map from "@/components/Map";
const Dashboard = ()=>{
    return(
        <LoggedInLayout>
            <div className="bg-red-500 w-full h-full flex">
                <div className="flex-1 bg-green-500">
                    <Map/>
                </div>
                <div className="bg-blue-500 w-[30%]">
                    Hello
                </div>
            </div>
        </LoggedInLayout>
    )
}

export default Dashboard