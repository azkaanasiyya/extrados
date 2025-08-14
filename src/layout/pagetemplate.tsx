import Navbar from "../components/templates/navbar";
import Navigation from "@/components/templates/nav";
import { Outlet } from "react-router-dom";

export default function PageTemplate() {
    return (
        <div className="bg-neutral-900">
           <Navbar/>
           <div className="py-6 px-[120px] w-full flex flex-col justify-center items-center">
                <div className="max-w-[1200px] w-full flex flex-col gap-6">
                    <Navigation /> 
                    <main>
                            <Outlet />
                    </main>
                </div>
           </div>
        </div>
    );
}