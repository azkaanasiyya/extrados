import { Button } from "@/components/ui/button";
import { Columns3Cog, Filter } from "lucide-react";
import { PoolsData } from "@/data/pool";
import { Link } from "react-router-dom";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Pools() {
    return (
        <div className="max-w-[1200px] w-full bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col">
            <div className="flex flex-row items-center justify-between border-b border-white-neutral-800 p-5">
                <span className="text-[16px] leading-[160%] text-base-white font-medium">Pools</span>
                <div className="flex flex-row gap-2">
                    <Button variant="swap" size="default" className="cursor-pointer">
                        <Filter className="w-4 h-4 text-base-white" />
                        Filter
                    </Button>
                    <Button variant="swap" size="default" className="cursor-pointer">
                       <Columns3Cog className="w-4 h-4 text-base-white" />
                        Customize
                    </Button>
                </div>
            </div>
            <TableHeader>
                <TableRow className="px-5 border-b border-white-neutral-800 flex flex-row hover:bg-transparent">
                    <TableHead className="py-2.5 px-2 w-full max-w-[424px] text-start text-[12px] leading-[165%] text-white-neutral-400 font-medium">NAME</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">DETAILS / %CHANGE</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">TVL</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">VOLUME (24H)</TableHead>
                    <TableHead className="py-2.5 px-2 w-full max-w-[184px] text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">APR</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {PoolsData.map((pool, index, arr) => (
                    <Link key={index} to={`/pools/details`} className={`mx-5 flex flex-row items-center cursor-pointer ${index === arr.length - 1 ? '' : 'border-b border-white-neutral-800'}`}>
                        <TableRow key={index} className={`flex flex-row items-center w-full hover:bg-white-neutral-800 rounded-[8px]`}>
                            <TableCell className="px-2 py-4 flex flex-row items-center gap-2 w-full max-w-[424px]">
                                <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                    <img src={pool.token1.image} alt={pool.token1.name} width={16} height={16} />
                                    <span className="text-[14px] leading-[160%] text-base-white font-bold">{pool.token1.name}</span>
                                </div>
                                <span className="font-medium text-white-neutral-300 text-[16px] leading-[160%]">/</span>
                                <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                    <img src={pool.token2.image} alt={pool.token2.name} width={16} height={16} />
                                    <span className="text-[14px] leading-[160%] text-base-white font-bold">{pool.token2.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="px-2 py-4 flex flex-row gap-2 justify-end items-center w-full max-w-[184px]">
                                <div className="px-2.5 py-[5px] rounded-[8px] bg-white-neutral-900 text-[14px] leading-[160%] font-bold text-base-white">{pool.version}</div>
                                <span className="text-[14px] leading-[160%] font-bold text-white-neutral-300">{pool.change}</span>
                            </TableCell>
                            <TableCell className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{pool.tvl}</TableCell>
                            <TableCell className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{pool.volume}</TableCell>
                            <TableCell className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{pool.apr}</TableCell>
                        </TableRow> 
                    </Link>
                ))}
            </TableBody>
            
        </div>
    )
}