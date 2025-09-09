import { motion } from "framer-motion"

export default function TokenAllocation() {
    return (
        <div className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col h-full">
            <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] text-base-white font-medium">Token Allocation</div>
            <div className="flex flex-col gap-4 px-5 pb-5">
                <div className="flex flex-row py-[17px] gap-[3px]">
                    <motion.div
                        className="w-full max-w-[205px] h-8 rounded-[4px] bg-primary-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                        delay: 0,
                        duration: 0.8,
                        ease: "easeInOut"
                        }}
                        style={{ originX: 0 }}
                    />
                    <motion.div
                        className="w-full max-w-20 h-8 rounded-[4px] bg-success-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                        delay: 0.6,
                        duration: 0.8,
                        ease: "easeInOut"
                        }}
                        style={{ originX: 0 }}
                    />
                    <motion.div
                        className="w-full max-w-14 h-8 rounded-[4px] bg-secondary-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                        delay: 0.9,
                        duration: 0.8,
                        ease: "easeInOut"
                        }}
                        style={{ originX: 0 }}
                    />
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-1.5 w-24">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="rounded-full bg-primary-400 w-1 h-1 border-[0.5px] border-base-white"/>
                            <span className="text-[12px] leading-[165%] font-medium text-base-white">BTC</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[16px] leading-[160%] font-bold text-base-white">64%</span>
                            <span className="text-[12px] leading-[165%] text-white-neutral-300">$1,800.93</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 w-24">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="rounded-full bg-success-400 w-1 h-1 border-[0.5px] border-base-white"/>
                            <span className="text-[12px] leading-[165%] font-medium text-base-white">ETH</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[16px] leading-[160%] font-bold text-base-white">26%</span>
                            <span className="text-[12px] leading-[165%] text-white-neutral-300">$495.12</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 w-24">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="rounded-full bg-secondary-400 w-1 h-1 border-[0.5px] border-base-white"/>
                            <span className="text-[12px] leading-[165%] font-medium text-base-white">USDC</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-[16px] leading-[160%] font-bold text-base-white">10%</span>
                            <span className="text-[12px] leading-[165%] text-white-neutral-300">$192.39</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}