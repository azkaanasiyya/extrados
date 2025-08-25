import { Copy } from "lucide-react";

export default function PoolContracts() {
    return (
        <div className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 p-5 flex flex-col gap-4 w-full">
            <span className="text-[16px] leading-[160%] font-medium text-base-white">Pool Contracts</span>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Pool Address</span>
                    <div className="flex flex-row items-center gap-2 px-2 py-1 rounded-[8px] bg-white-neutral-900 cursor-pointer hover:bg-white-neutral-800">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">0x88e6...895640</span>
                        <Copy className="size-4 text-white-neutral-500"/>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">veBAL Gauge</span>
                    <div className="flex flex-row items-center gap-2 px-2 py-1 rounded-[8px] bg-white-neutral-900 cursor-pointer hover:bg-white-neutral-800">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">0xc592...397aED</span>
                        <Copy className="size-4 text-white-neutral-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}