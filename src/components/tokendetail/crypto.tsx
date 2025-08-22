import { Info } from "lucide-react";
import eth from "@/assets/pools/ethp.png"

export default function SwapCrypto() {
    return (
        <div className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-col gap-4 py-5 w-full">
            <div className="px-5 text-[16px] leading-[160%] font-medium text-base-white">1 BUSD = 0.000392206 ETH</div>
            <div className="bg-neutral-900 h-[1px] w-full"/>
            <div className="flex flex-col gap-2 px-5 w-full">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Fee (0.25%)</span>
                        <Info className="size-4 text-white-neutral-500" />                    
                    </div>
                    <span className="text-[12px] leading-[165%] font-bold text-base-white">$0.03</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Network cost</span>
                        <Info className="size-4 text-white-neutral-500" />                    
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">$12.17</span>
                        <img src={eth} alt="eth" className="w-4 h-4" />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Order routing</span>
                        <Info className="size-4 text-white-neutral-500" />                    
                    </div>
                    <span className="text-[12px] leading-[165%] font-bold text-base-white">Extrados API</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Price impact</span>
                        <Info className="size-4 text-white-neutral-500" />                    
                    </div>
                    <span className="text-[12px] leading-[165%] font-bold text-base-white">-1.443%</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Max slippage</span>
                        <Info className="size-4 text-white-neutral-500" />                    
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Auto</span>
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">5.5%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}