import Navbar from "../components/templates/navbar";
import Navigation from "@/components/templates/nav";
import { Outlet } from "react-router-dom";

export default function PageTemplate() {
    return (
        <div className="bg-neutral-900">
           <Navbar/>
           <Navigation /> 
           <main>
                <Outlet />
           </main>
        </div>
    );
}