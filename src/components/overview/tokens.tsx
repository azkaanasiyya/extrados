import { Columns3Cog, Filter } from "lucide-react";
import { Button } from "../ui/button";
import type React from "react";
import { TokensData } from "@/data/token";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Link } from "react-router-dom";

export default function Tokens() {
    return (
        <div className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col w-full">
            <div className="max-w-[1200px] w-full flex flex-row items-center justify-between border-b border-white-neutral-800 p-5">
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
                    <Link to="/tokens">
                        <Button variant="swap" size="default" className="cursor-pointer">
                            Details
                        </Button>
                    </Link>
                    
                </div>
            </div>
            <TableHeader>
                <TableRow className="px-5 border-b border-white-neutral-800 flex flex-row hover:bg-transparent">
                    <TableHead className="py-2.5 px-2 w-full max-w-[208px] text-start text-[12px] leading-[165%] text-white-neutral-400 font-medium">NAME</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">PRICE</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">BALANCE</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">MARKET CAP</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">VOLUME (24H)</TableHead>
                    <TableHead className="py-2.5 px-6 w-full max-w-[216px] text-start text-[12px] leading-[165%] text-white-neutral-400 font-medium">CIRC SUPPLY</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TokensData.slice(0, 5).map((token, index, arr) => {
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
                        <Link key={index} to={`/tokens/details`} className={`mx-5 flex flex-row items-center cursor-pointer ${index === arr.length - 1 ? '' : 'border-b border-white-neutral-800'}`}>
                           <TableRow key={index} className="flex flex-row items-center w-full hover:bg-white-neutral-900">
                                <TableCell className="py-2.5 px-2 w-full max-w-[208px] items-center justify-start flex flex-row gap-2">
                                    <img src={token.image} alt={token.name} className="w-9 h-9" />
                                    <span className="text-[14px] leading-[160%] text-base-white font-bold">{token.name}</span>
                                </TableCell>
                                <TableCell className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.price}</TableCell>
                                <TableCell className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.balance}</TableCell>
                                <TableCell className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.marketCap}</TableCell>
                                <TableCell className="py-4 px-2 w-full max-w-[184px] text-end text-[14px] leading-[160%] text-base-white font-bold">{token.volume}</TableCell>
                                <TableCell className="py-4 px-6 w-full max-w-[216px] flex flex-row gap-1.5 items-center">
                                    <div className="flex flex-row gap-[3px]">
                                        {allBars}
                                    </div>
                                    <span className="text-[14px] leading-[160%] font-medium text-base-white">{token.change}</span>
                                </TableCell>
                            </TableRow> 
                        </Link>
                    )
                })}
            </TableBody>
        </div>
    )
}