import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronLeft, Info } from "lucide-react";
import usdc from "@/assets/pools/usdc.png"
import eth from "@/assets/pools/ethp.png"
import { Link } from "react-router-dom";

export default function AddLiquidity() {
    return (
        <div className="flex flex-col items-center justify-center pb-[140px]">
            <div className="w-full max-w-[590px] bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 py-6 px-5 flex flex-col gap-6">
                <div className="flex flex-row items-center justify-between w-full">
                    <Link to={`/pools/details`} className="cursor-pointer">
                        <div className="flex flex-row items-center gap-4">
                            <ChevronLeft className="size-6 text-base-white" />
                            <span className="text-[16px] leading-[160%] font-medium text-base-white">Add Liquidity</span>
                        </div>
                    </Link>
                    
                    <Button size="default" variant="default" className="cursor-pointer">
                        USD
                        <ChevronDown className="size-5 text-base-white"/>
                    </Button>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="bg-neutral-900 rounded-[8px] p-4 flex flex-col gap-3 w-full">
                        <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Deposit Amount</span>
                        <div className="bg-white-neutral-900 rounded-[8px] border border-white-neutral-800 p-3 flex flex-col gap-2 w-full">
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-row items-center rounded-[8px] bg-neutral-900 w-full max-w-[160px] px-2 py-[5px] gap-2">
                                    <div className="bg-white-neutral-900 rounded-full w-6 h-6 border border-white-neutral-800 flex flex-col items-center justify-center">
                                        <img src={usdc} alt="usdc" width={16} height={16} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <span className="text-[16px] leading-[160%] font-medium text-base-white">USDC</span>
                                        <span className="text-[12px] leading-[165%] font-bold text-white-neutral-500">22%</span>
                                    </div>
                                </div>
                                <div className="bg-white-neutral-900 py-[5px] px-2 rounded-[8px] text-end text-[16px] leading-[160%] font-bold text-base-white w-full">0.02728</div>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$480.44</span>
                            </div>
                        </div>
                        <div className="bg-white-neutral-900 rounded-[8px] border border-white-neutral-800 p-3 flex flex-col gap-2 w-full">
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-row items-center rounded-[8px] bg-neutral-900 w-full max-w-[160px] px-2 py-[5px] gap-2">
                                    <div className="bg-white-neutral-900 rounded-full w-6 h-6 border border-white-neutral-800 flex flex-col items-center justify-center">
                                        <img src={eth} alt="eth" width={16} height={16} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <span className="text-[16px] leading-[160%] font-medium text-base-white">ETH</span>
                                        <span className="text-[12px] leading-[165%] font-bold text-white-neutral-500">78%</span>
                                    </div>
                                </div>
                                <div className="bg-white-neutral-900 py-[5px] px-2 rounded-[8px] text-end text-[16px] leading-[160%] font-bold text-base-white w-full">0.00892</div>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$480.44</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-7 flex flex-col gap-4 w-full">
                    <div className="flex flex-row items-center pb-4 justify-between border-b border-neutral-900">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Slippage</span>
                            <Info className="size-4 text-white-neutral-700"/>
                        </div>
                        <Button size="default" variant="default" className="cursor-pointer">
                            0.50%
                            <ChevronDown className="size-5 text-base-white"/>
                        </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Price Impact</span>
                            <Info className="size-4 text-white-neutral-700"/>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">$214.42</span>
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">(0.44%)</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Max slippage</span>
                            <Info className="size-4 text-white-neutral-700"/>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">$245.49</span>
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">(0.50%)</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">LP tokens (if no slippage)</span>
                            <Info className="size-4 text-white-neutral-700"/>
                        </div>
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">167.4528</span>
                    </div>
                    <div className="flex flex-row items-center justify-between pb-4 border-b border-neutral-900">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Share of pool</span>
                            <Info className="size-4 text-white-neutral-700"/>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">0%</span>
                            <ArrowRight className="size-5 text-base-white"/>
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">0.0223%</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="bg-neutral-900 rounded-[8px] px-4 py-[5px] flex flex-row items-center justify-between w-full">
                        <span className="text-[16px] leading-[160%] font-medium text-white-neutral-300">Total</span>
                        <span className="text-[16px] leading-[160%] font-bold text-base-white">$49,252.74</span>
                    </div>
                    <Button size="default" variant="default" className="cursor-pointer w-full">Add Liquidity</Button>
                </div>
            </div>
        </div>
    )
}