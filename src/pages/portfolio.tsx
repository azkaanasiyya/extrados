import Swap from "@/components/overview/swap";
import Assets from "@/components/portfolio/assets";
import Cash from "@/components/portfolio/cash";
import NetAsset from "@/components/portfolio/netasset";
import PortfolioValue from "@/components/portfolio/portfoliovalue";
import Price from "@/components/portfolio/price";
import { Profit } from "@/components/portfolio/profit";
import TokenAllocation from "@/components/portfolio/token";
import Transaction from "@/components/portfolio/transaction";

export default function Portfolio() {
    return (
        <div className="bg-neutral-900 flex flex-col items-center gap-5 justify-center">
            <div className="max-w-[1200px] w-full">
                <Price />
            </div>
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5">
                <div className="col-span-8 h-full">
                    <PortfolioValue />
                </div>
                <div className="col-span-4 h-full">
                    <Swap />
                </div>
            </div>
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5">
                <div className="col-span-4 h-full">
                    <NetAsset />
                </div>
                <div className="col-span-4 h-full">
                    <Cash />
                </div>
                <div className="col-span-4 h-full">
                    <TokenAllocation />
                </div>
            </div>
            <div className="max-w-[1200px] w-full h-[306px] grid grid-cols-12 gap-5">
                <div className="col-span-8 h-full w-full">
                    <Profit />
                </div>
                <div className="col-span-4 h-full w-full">
                    <Assets />
                </div>
            </div>
            <div className="max-w-[1200px] w-full">
                <Transaction />
            </div>
        </div>
    )
}