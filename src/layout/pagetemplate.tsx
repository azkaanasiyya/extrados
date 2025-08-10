import type { PropsWithChildren } from "react";
import Navbar from "../components/templates/navbar";
import Navigation from "@/components/templates/nav";

export default function PageTemplate({children}: PropsWithChildren) {
    return (
        <div className="bg-neutral-900">
           <Navbar/>
           <Navigation /> 
           {children}
        </div>
    );
}