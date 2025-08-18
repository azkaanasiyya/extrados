import { FolderInput, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function Price() {
    return (
        <div className="p-5 w-full flex flex-row justify-between items-center border border-white-neutral-800 rounded-[12px] bg-white-neutral-900">
            <div className="flex flex-col gap-1">
                <span className="text-[16px] leading-[160%] font-bold text-base-white">Portfolio</span>
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-[12px] leading-[165%] text-white-neutral-300 font-medium">0xDEAF7De880d4DCAE40Ba3E63F18392a32B4fb8b</p>
                    <div className="w-1 h-1 rounded-full bg-white-neutral-700"/>
                    <p className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Last Updated 10:37</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <Button variant="swap" size="default" className="cursor-pointer">
                    <Plus className="w-5 h-5 text-base-white" />
                    Add Liquidity
                </Button>
                <Button variant="swap" size="default" className="cursor-pointer">
                    <FolderInput className="w-5 h-5 text-base-white" />
                    Export
                </Button>
            </div>
        </div>
    )
}