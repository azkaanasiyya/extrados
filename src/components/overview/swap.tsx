import { ChevronDown } from "lucide-react";
import bnb from "@/assets/overview/bnb.png"
import eth from "@/assets/overview/eth.png"
import swap from "@/assets/overview/swap.png"
import { Button } from "../ui/button";

export default function Swap() {
    return (
        <div className="w-full h-full flex flex-col border border-white-neutral-800 rounded-[12px] bg-white-neutral-900">
            <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] text-base-white font-medium">Swap</div>
            <div className="flex flex-col gap-[7px]">
                <div className="px-5 flex flex-row items-start gap-3">
                    <img src={bnb} alt="bnb" width={36} height={46} />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">BNB</span>
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Pay</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-1 items-center">
                               <span className="text-[16px] leading-[160%] font-medium text-base-white">Binance</span> 
                               <ChevronDown className="w-4 h-4 text-base-white"/>
                            </div>
                            <span className="text-[16px] leading-[160%] font-bold text-base-white">0.00256</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$480.44</span>
                        </div>
                    </div>
                </div>
                <div className="relative py-5">
                    <div className="w-full h-[1px] bg-neutral-900"/>
                    <img src={swap} alt="swap" width={40} height={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                </div>
                <div className="px-5 flex flex-row items-start gap-3">
                    <img src={eth} alt="bnb" width={36} height={46} />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">ETH</span>
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Receive</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-1 items-center">
                               <span className="text-[16px] leading-[160%] font-medium text-base-white">Ethereum</span> 
                               <ChevronDown className="w-4 h-4 text-base-white"/>
                            </div>
                            <span className="text-[16px] leading-[160%] font-bold text-base-white">32.45679</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                            <div className="flex flex-row gap-1 items-center">
                                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$803.25</span>
                                <span className="text-[12px] leading-[165%] font-medium text-success-400">(+40.8%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 pt-4 pb-5">
                <Button variant="swap" size="medium" className="w-full">Swap</Button>
            </div>
        </div>
    )
}