// accessible at localhost:3000/about
import Loggedin from "@/app/layouts/loggedin"

export default function About() {
    return (
        <Loggedin>
            <div className="bg-red-500">
                Hello from Page About
            </div>
        </Loggedin>
    )
}