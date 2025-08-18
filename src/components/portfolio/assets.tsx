import btc from "@/assets/portfolio/bitcoin.png"
import eth from "@/assets/pools/ethp.png"
import usdc from "@/assets/pools/usdc.png"

export default function Assets() {
    return (
        <div className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] pb-[22px] flex flex-col w-full h-[306px]">
            <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] font-medium text-base-white">
                Assets
            </div>
            <div className="mx-5 flex flex-row justify-between items-center py-4 border-b border-white-neutral-800">
                <div className="flex flex-row gap-2 items-center">
                    <img src={btc} alt="btc" width={36} height={36} />
                    <div className="flex flex-col">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">BTC</span>
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">Bitcoin</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[14px] leading-[160%] font-bold text-base-white">$1,800.93</span>
                    <span className="text-[12px] leading-[165%] text-success-500">+$200.93 (21.7%)</span>
                </div>
            </div>
            <div className="mx-5 flex flex-row justify-between items-center py-4 border-b border-white-neutral-800">
                <div className="flex flex-row gap-2 items-center">
                    <div className="w-9 h-9 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-full">
                        <img src={eth} alt="eth" width={16} height={16} />
                    </div>
                    <div className="flex flex-col w-full">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">ETH</span>
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">Ethereum</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[14px] leading-[160%] font-bold text-base-white">$495.12</span>
                    <span className="text-[12px] leading-[165%] text-success-500">+$45.12 (8.1%)</span>
                </div>
            </div>
            <div className="mx-5 flex flex-row justify-between items-center py-4">
                <div className="flex flex-row gap-2 items-center">
                   <div className="w-9 h-9 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-full">
                        <img src={usdc} alt="usdc" width={16} height={16} />
                    </div>
                    <div className="flex flex-col w-full">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">USDC</span>
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">USD Coin</span>
                    </div> 
                </div>
                
                <div className="flex flex-col items-end">
                    <span className="text-[14px] leading-[160%] font-bold text-base-white">$192.39</span>
                    <span className="text-[12px] leading-[165%] text-danger-500">-$8.61 (0.09%)</span>
                </div>
            </div>
        </div>
    )
}