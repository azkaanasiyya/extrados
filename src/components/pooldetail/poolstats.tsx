import { TrendingUp } from "lucide-react";

export default function PoolStats() {
    return (
        <div className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 w-full flex flex-col">
            <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] font-medium text-base-white">Pool Stats</div>
            <div className="flex flex-col px-5 pb-4 border-b border-neutral-900">
                <span className="text-[12px] leading-[165%] text-white-neutral-300 font-medium">TVL</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[24px] leading-[140%] font-bold text-base-white">$155.483.839.920</span>
                    <div className='flex flex-row gap-1 items-center'>
                        <TrendingUp className="size-4 text-success-500"/>
                        <span className="text-[12px] leading-[165%] font-bold text-success-500">6.4%</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 py-4 border-b border-neutral-900">
                <span className="text-[12px] leading-[165%] text-white-neutral-300 font-medium">24H Volume</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[24px] leading-[140%] font-bold text-base-white">$145.583.930.939</span>
                    <div className='flex flex-row gap-1 items-center'>
                        <TrendingUp className="size-4 text-success-500"/>
                        <span className="text-[12px] leading-[165%] font-bold text-success-500">6.4%</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 py-4 border-b border-neutral-900">
                <span className="text-[12px] leading-[165%] text-white-neutral-300 font-medium">APR for LPs</span>
                <span className="text-[24px] leading-[140%] font-bold text-base-white">17.088%</span>
            </div>
            <div className="flex flex-col px-5 pt-4 pb-5">
                <span className="text-[12px] leading-[165%] text-white-neutral-300 font-medium">Fees (24h)</span>
                <span className="text-[24px] leading-[140%] font-bold text-base-white">$28.828.938</span>
            </div>
        </div>
    )
}