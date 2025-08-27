import { BookMinus, ChevronRight } from "lucide-react";
import eth from "@/assets/pools/ethp.png"
import { Button } from "../ui/button";
import share from "@/assets/token/share.png";
import www from "@/assets/token/www.png";
import search from "@/assets/token/search.png"
import { Link } from "react-router-dom";

export default function PriceTokenDetail() {
    return (
        <div className="bg-white-neutral-900 p-5 rounded-[12px] border border-white-neutral-800 w-full flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
                <Link to={`/`} className="cursor-pointer">
                    <span className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Overview</span>
                </Link>
                <ChevronRight className="size-5 text-white-neutral-700" />
                <Link to={`/tokens`} className="cursor-pointer">
                    <span className="text-[12px] leading-[165%] font-medium text-white-neutral-300">Tokens</span>
                </Link>
                <ChevronRight className="size-5 text-white-neutral-700" />
                <span className="text-[12px] leading-[165%] text-white-neutral-600">Ethereum</span>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-2">
                    <img src={eth} alt="eth" className="w-8 h-8" />
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[16px] leading-[160%] text-base-white font-bold">Ethereum</span>
                        <span className="text-[16px] leading-[160%] text-white-neutral-300 font-medium">ETH</span>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <Button variant="default" size="default" className="cursor-pointer">
                        <BookMinus className="size-5 text-base-white" />
                        Whitepaper
                    </Button>
                    <Button variant="default" size="default" className="cursor-pointer">
                        <img src={www} alt="www" className="w-5 h-5" />
                        Website
                    </Button>
                    <Button variant="default" size="default" className="cursor-pointer">
                        <img src={search} alt="search" className="w-5 h-5" />
                        Explorers
                    </Button>
                    <Button variant="default" size="default" className="cursor-pointer">
                        <img src={share} alt="share" className="w-5 h-5" />
                        Share
                    </Button>
                </div>
            </div>
        </div>
    )
}