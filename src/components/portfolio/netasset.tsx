export default function NetAsset() {
    return (
        <div className="w-full bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col gap-4 py-5">
            <div className="flex flex-col gap-0.5 px-5">
                <span className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Net Asset Value</span>
                <span className="text-[24px] leading-[140%] font-bold text-base-white">$2,500.75</span>
            </div>
            <div className="px-5 flex flex-col gap-2 w-full">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-[12px] leading-[165%] text-white-neutral-400 font-medium">Invested</span>
                    <span className="text-[12px] leading-[165%] text-base-white font-bold">$2,000.00</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-[12px] leading-[165%] text-white-neutral-400 font-medium">Unrealized Profit & Loss</span>
                    <span className="text-[12px] leading-[165%] text-base-white font-bold">$500.75</span>
                </div>
                <div className="flex flex-row justify-between items-center pl-4 border-l border-white-neutral-800">
                    <span className="text-[12px] leading-[165%] text-white-neutral-400 font-medium">Asset Gain / Loss</span>
                    <span className="text-[12px] leading-[165%] text-base-white font-bold">$500.75</span>
                </div>
                <div className="flex flex-row justify-between items-center pl-4 border-l border-white-neutral-800">
                    <span className="text-[12px] leading-[165%] text-white-neutral-400 font-medium">Forex Gain / Loss</span>
                    <span className="text-[12px] leading-[165%] text-base-white font-bold">$0.00</span>
                </div>
            </div>
        </div>
    )
}