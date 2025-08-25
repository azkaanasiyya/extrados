import { ArrowLeftRight, ChevronRight, Plus } from "lucide-react";
import usdc from "@/assets/pools/usdc.png";
import eth from "@/assets/pools/ethp.png";
import { Button } from "../ui/button";

export default function PricePoolDetail() {
    return (
        <div className="bg-white-neutral-900 p-5 rounded-[12px] border border-white-neutral-800 w-full flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Overview</span>
                <ChevronRight className="size-5 text-white-neutral-700" />
                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Tokens</span>
                <ChevronRight className="size-5 text-white-neutral-700" />
                <span className="text-[12px] leading-[165%] text-white-neutral-600">22USDC-78ETH</span>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-5">
                    <div className="flex flex-row items-center gap-2 pr-5 border-r border-white-neutral-800">
                        <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                            <img src={usdc} alt={usdc} width={16} height={16} />
                            <span className="text-[14px] leading-[160%] text-base-white font-bold">USDC</span>
                        </div>
                        <span className="font-medium text-white-neutral-300 text-[16px] leading-[160%]">/</span>
                        <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                            <img src={eth} alt={eth} width={16} height={16} />
                            <span className="text-[14px] leading-[160%] text-base-white font-bold">ETH</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="px-2.5 py-[5px] rounded-[8px] bg-white-neutral-900 text-[14px] leading-[160%] font-bold text-base-white">V3</div>
                        <div className="flex flex-row items-center gap-1">
                            <ArrowLeftRight className="size-4 text-white-neutral-500"/>
                            <span className="text-[14px] leading-[160%] font-bold text-white-neutral-300">0.05%</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <Button size="default" variant="default" className="cursor-pointer">
                        <ArrowLeftRight className="size-5 text-base-white"/>
                        Swap
                    </Button>
                    <Button size="default" variant="default" className="cursor-pointer">
                        <Plus className="size-5 text-base-white"/>
                        Add Liquidity
                    </Button>
                </div>
            </div>
        </div>
    )
}