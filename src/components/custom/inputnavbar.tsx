import { Search } from "lucide-react"
import { Input } from "../ui/input"
import command from "@/assets/command.png"

export default function InputNavbar() {
    return (
        <div className="relative w-full max-w-[400px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search 
                    className="w-4 h-4 text-white-neutral-600"
                />
            </span>
            <Input placeholder="Search" className="w-full pl-10"/>
            <img alt="command" src={command} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-6"/>
        </div>
    )
}

// return <Input type="email" placeholder="Email" />