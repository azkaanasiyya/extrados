import Swap from "@/components/overview/swap";
import TotalBalance from "@/components/overview/totalbalance/totalbalance";
import SwapCrypto from "@/components/tokendetail/crypto";
import DetailsTokenDetail from "@/components/tokendetail/details";
import MarketTokenDetail from "@/components/tokendetail/market";
import PriceTokenDetail from "@/components/tokendetail/price";
import SwapSentiment from "@/components/tokendetail/sentiment";
import TransactionTokenDetail from "@/components/tokendetail/transaction";

export default function TokenDetails() {
    return (
        <div className="bg-neutral-900 flex flex-col gap-5 items-center justify-center">
            <div className="max-w-[1200px] w-full">
                <PriceTokenDetail />
            </div>
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5">
                <div className="col-span-8 flex flex-col gap-5">
                    <div className="w-full h-[348px]">
                        <TotalBalance />
                    </div>
                    <MarketTokenDetail />
                    <DetailsTokenDetail />
                    <TransactionTokenDetail />
                </div>
                <div className="col-span-4 flex flex-col gap-5">
                    <Swap />
                    <SwapCrypto />
                    <SwapSentiment />
                </div>
            </div>
        </div>
    )
}