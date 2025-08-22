import { TrendingUp } from "lucide-react";

export default function MarketTokenDetail() {
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="bg-white-neutral-900 w-full max-w-[251px] rounded-[12px] border border-white-neutral-800 py-5 flex flex-col items-center justify-center gap-2">
                <span className="text-[14px] leading-[160%] text-white-neutral-300 font-medium">Market Cap</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[18px] leading-[155%] font-bold text-base-white">$301.55B</span>
                    <div className='flex flex-row gap-1 items-center'>
                        <TrendingUp className="size-4 text-success-500" />
                        <span className="text-[12px] leading-[165%] font-bold text-success-500">0.70%</span>
                    </div>
                </div>
            </div>
            <div className="bg-white-neutral-900 w-full max-w-[251px] rounded-[12px] border border-white-neutral-800 py-5 flex flex-col items-center justify-center gap-2">
                <span className="text-[14px] leading-[160%] text-white-neutral-300 font-medium">Volume (24H)</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[18px] leading-[155%] font-bold text-base-white">$21.00B</span>
                    <div className='flex flex-row gap-1 items-center'>
                        <TrendingUp className="size-4 text-success-500" />
                        <span className="text-[12px] leading-[165%] font-bold text-success-500">26.93%</span>
                    </div>
                </div>
            </div>
            <div className="bg-white-neutral-900 w-full max-w-[251px] rounded-[12px] border border-white-neutral-800 py-5 flex flex-col items-center justify-center gap-2">
                <span className="text-[14px] leading-[160%] text-white-neutral-300 font-medium">Circ Supply</span>
                <span className="text-[18px] leading-[155%] font-bold text-base-white">31.25%</span>
            </div>
        </div>
    )
}