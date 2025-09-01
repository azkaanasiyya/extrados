import { ExchangeOver } from "@/components/overview/exchange";
import { GreedIndex } from "@/components/overview/greed";
import { SalesStatistic } from "@/components/overview/salesstat";
import Swap from "@/components/overview/swap";
import Tokens from "@/components/overview/tokens";
import TotalBalance from "@/components/overview/totalbalance/totalbalance";


export default function Overview() {
    return (
        <div className="bg-neutral-900 flex flex-col items-center gap-5 justify-center">
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5 h-[320px]">
                <div className="col-span-8 h-[320px]">
                    <TotalBalance />
                </div>
                <div className="col-span-4 h-full">
                    <Swap />
                </div>
            </div>
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5">
                <div className="col-span-4">
                    <SalesStatistic />
                </div>
                <div className="col-span-4">
                    <ExchangeOver />
                </div>
                <div className="col-span-4">
                    <GreedIndex />
                </div>
            </div>
            <div className="max-w-[1200px] w-full">
                <Tokens />
            </div>
        </div>
    )
}