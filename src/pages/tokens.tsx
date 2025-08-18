import { Button } from "@/components/ui/button";
import { TokensData } from "@/data/token";
import { Columns3Cog, Filter } from "lucide-react";

export default function Tokens() {
    return (
        <div className="max-w-[1200px] w-full bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col">
            <div className="flex flex-row items-center justify-between border-b border-white-neutral-800 p-5">
                <span className="text-[16px] leading-[160%] text-base-white font-medium">Tokens</span>
                <div className="flex flex-row gap-2">
                    <Button variant="swap" size="default" className="cursor-pointer">
                        <Filter className="w-4 h-4 text-base-white" />
                        Filter
                    </Button>
                    <Button variant="swap" size="default" className="cursor-pointer">
                       <Columns3Cog className="w-4 h-4 text-base-white" />
                        Customize
                    </Button>
                    <Button variant="swap" size="default" className="cursor-pointer">
                        Details
                    </Button>
                </div>
            </div>
            <div className="px-5 border-b border-white-neutral-800 flex flex-row">
                <div className="py-2.5 px-2 w-full max-w-[208px] text-start text-[12px] leading-[165%] text-white-neutral-400 font-medium">NAME</div>
                <div className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">PRICE</div>
                <div className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">BALANCE</div>
                <div className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">MARKET CAP</div>
                <div className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">VOLUME (24H)</div>
                <div className="py-2.5 px-6 w-full max-w-[216px] text-start text-[12px] leading-[165%] text-white-neutral-400 font-medium">CIRC SUPPLY</div>
            </div>
            {TokensData.map((token, index, arr) => {
                const allBars: React.ReactNode[] = [];
                token.bars.forEach(group => {
                    for (let i = 0; i < group.count; i++) {
                        allBars.push(
                            <div
                                key={`${token.name}-${allBars.length}`}
                                className={`w-0.5 h-5 rounded-[8px] ${group.color}`}
                            />
                        );
                    }
                });
                return (
                    <div key={index} className={`mx-5 flex flex-row items-center ${index === arr.length - 1 ? '' : 'border-b border-white-neutral-800'}`}>
                        <div className="py-2.5 px-2 w-full max-w-[208px] items-center justify-start flex flex-row gap-2">
                            <img src={token.image} alt={token.name} className="w-9 h-9" />
                            <span className="text-[14px] leading-[160%] text-base-white font-bold">{token.name}</span>
                        </div>
                        <div className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.price}</div>
                        <div className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.balance}</div>
                        <div className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.marketCap}</div>
                        <div className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.volume}</div>
                        <div className="py-4 px-6 w-full max-w-[216px] flex flex-row gap-1.5 items-center">
                            <div className="flex flex-row gap-[3px]">
                                {allBars}
                            </div>
                            <span className="text-[14px] leading-[160%] font-medium text-base-white">{token.change}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}