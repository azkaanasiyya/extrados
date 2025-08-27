import { CircleX, Clock5, Info, Search, XIcon, Zap } from "lucide-react";
import { Input } from "../ui/input";
import command from "@/assets/command.png";
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { TokensData } from "@/data/token";
import { PoolsData } from "@/data/pool";
import { Link } from "react-router-dom";
import soalana from "@/assets/overview/solana.png"

export interface Token {
    name: string;
    symbol: string;
    image: string;
    price: string;
    balance: string;
    marketCap: string;
    volume: string;
    change: string;
    bars: { color: string; count: number }[];
    type: 'token';
    searchableName: string;
    searchableSymbol?: string;
}

export interface Pool {
    token1: { name: string; image: string };
    token2: { name: string; image: string };
    version: string;
    change: string;
    tvl: string;
    volume: string;
    apr: string;
    type: 'pool';
    searchableName: string;
    searchableSymbol?: string;
}

export type SearchableItem = Token | Pool;

const initialRecentSearches: SearchableItem[] = [
    {
        name: "Ethereum",
        symbol: "ETH",
        price: "$3,119.30",
        change: "-0.96% (1d)",
        image: TokensData.find(t => t.name === "Ethereum")?.image || '',
        type: 'token',
        balance: '0',
        marketCap: '0',
        volume: '0',
        bars: [],
        searchableName: 'Ethereum',
    },
    {
        name: "Tether",
        symbol: "USDT",
        price: "$1,00",
        change: "-0.01% (1d)",
        image: TokensData.find(t => t.name === "Tether USD")?.image || '',
        type: 'token',
        balance: '0',
        marketCap: '0',
        volume: '0',
        bars: [],
        searchableName: 'Tether USD',
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: "$1,00",
        change: "+0.00% (1d)",
        image: soalana,
        type: 'token',
        balance: '0',
        marketCap: '0',
        volume: '0',
        bars: [],
        searchableName: 'Solana',
    },
]

export default function SearchDialog() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
    const [filteredPools, setFilteredPools] = useState<Pool[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'tokens' | 'pools'>('all');

    useEffect(() => {
        if (searchTerm.length > 0) {
            const tokenResults = TokensData.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(item => ({ ...item, type: 'token', searchableName: item.name }));

            const poolResults = PoolsData.filter(item =>
                `${item.token1.name}/${item.token2.name}`.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(item => ({ ...item, type: 'pool', searchableName: `${item.token1.name}/${item.token2.name}` }));

            setFilteredTokens(tokenResults.slice(0, 3) as Token[]);
            setFilteredPools(poolResults.slice(0, 3) as Pool[]);
        } else {
            setFilteredTokens([]);
            setFilteredPools([]);
        }
    }, [searchTerm]);

    const isSearching = searchTerm.length > 0;

    const handleClearSearch = () => {
        setSearchTerm("");
        setActiveTab('all');
    };

    const renderResults = () => {
        const hasTokens = filteredTokens.length > 0;
        const hasPools = filteredPools.length > 0;
        const hasResults = filteredTokens.length > 0 || filteredPools.length > 0;
        
        if (activeTab === 'tokens' && !hasTokens) {
            return (
                <div className="flex justify-center items-center py-10">
                    <p className="text-white-neutral-500">No results found.</p>
                </div>
            )
        }

        if (activeTab === 'pools' && !hasPools) {
            return (
                <div className="flex justify-center items-center py-10">
                    <p className="text-white-neutral-500">No results found.</p>
                </div>
            )
        }

        if (!hasResults) {
            return (
                <div className="flex justify-center items-center py-10">
                    <p className="text-white-neutral-500">No results found.</p>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-0.5 w-full">
                {(activeTab === 'all' || activeTab === 'tokens') && hasTokens && (
                    <div className="flex flex-col w-full border-t border-white-neutral-800">
                        <div className="flex flex-row px-3 py-2.5 items-center gap-3">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-500">Tokens</span>
                        </div>
                        <div className="flex flex-col gap-0.5 w-full">
                            {filteredTokens.map((item, index) => (
                                <DialogClose asChild>
                                    <Link
                                        key={`token-${index}`}
                                        to={`/tokens/details`}
                                        className="flex flex-row items-center bg-white-neutral-900 rounded-[8px] p-3 hover:bg-white-neutral-800 transition-colors cursor-pointer"
                                    >
                                        <div className="w-full max-w-[290px] items-center justify-start flex flex-row gap-2">
                                            <img src={item.image} alt={item.name} width={36} height={36} />
                                            <div className="flex flex-col">
                                                <span className="text-[14px] leading-[160%] text-base-white font-bold">{item.name}</span>
                                                <span className="text-[12px] leading-[165%] text-white-neutral-300"></span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end w-full max-w-[264px]">
                                            <span className="text-[12px] leading-[165%] text-white-neutral-300">Market cap:</span>
                                            <span className="text-[12px] leading-[165%] font-bold text-white-neutral-300">{item.marketCap}</span>
                                        </div>
                                        <div className="flex flex-col items-end w-full max-w-[200px]">
                                            <span className="text-[12px] leading-[165%] font-bold text-base-white">{item.price}</span>
                                            <span className={`text-[12px] leading-[165%] font-medium ${item.change.startsWith('+') ? 'text-success-500' : 'text-danger-500'}`}>{item.change}</span>
                                        </div>
                                    </Link>
                                </DialogClose>
                            ))}
                        </div>
                    </div>
                )}

                {(activeTab === 'all' || activeTab === 'pools') && hasPools && (
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row py-2.5 px-3 items-center gap-3">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-500">Pools</span>
                        </div>
                        <div className="flex flex-col gap-0.5 w-full">
                            {filteredPools.map((item, index) => (
                                <DialogClose asChild>
                                    <Link
                                        key={`pool-${index}`}
                                        to={`/pools/details`}
                                        className="flex flex-row items-center bg-white-neutral-900 px-3 rounded-[8px] hover:bg-white-neutral-800 transition-colors cursor-pointer"
                                    >
                                        <div className="px-2 py-[14px] flex flex-row items-center gap-2 w-full max-w-[290px]">
                                            <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                                <img src={item.token1.image} alt={item.token1.name} width={16} height={16} className="flex-shrink-0"/>
                                                <span className="text-[14px] leading-[160%] text-base-white font-bold ">{item.token1.name}</span>
                                            </div>
                                            <span className="font-medium text-white-neutral-300 text-[16px] leading-[160%]">/</span>
                                            <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                                <img src={item.token2.image} alt={item.token2.name} width={16} height={16} className="flex-shrink-0"/>
                                                <span className="text-[14px] leading-[160%] text-base-white font-bold">{item.token2.name}</span>
                                            </div>
                                        </div>
                                        <div className="px-2 py-4 flex flex-row gap-2 justify-end items-center w-full max-w-[184px]">
                                            <div className="px-2.5 py-[5px] rounded-[8px] bg-white-neutral-900 text-[14px] leading-[160%] font-bold text-base-white">{item.version}</div>
                                            <span className="text-[14px] leading-[160%] font-bold text-white-neutral-300">{item.change}</span>
                                        </div>
                                        <div className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{item.tvl}</div>
                                        <div className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{item.volume}</div>
                                        <div className="px-2 py-4 text-end w-full max-w-[184px] font-bold text-[14px] leading-[160%] text-base-white">{item.apr}</div>
                                    </Link>
                                </DialogClose>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative w-full max-w-[400px] cursor-pointer">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Search className="w-4 h-4 text-white-neutral-600" />
                    </span>
                    <Input
                        placeholder="Search"
                        className="w-full pl-10 cursor-pointer"
                        readOnly
                    />
                    <img
                        alt="command"
                        src={command}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-6 cursor-pointer"
                    />
                </div>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900">
                <div className="bg-white-neutral-900 p-2 flex flex-col justify-center gap-2.5 border border-white-neutral-800 rounded-[12px]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="relative w-[750px]">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                <Search className="w-4 h-4 text-white-neutral-600" />
                            </span>
                            <Input
                                placeholder="Search tokens or pools"
                                className="w-full pl-10 pr-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                onClick={handleClearSearch}
                                className="cursor-pointer absolute right-14 top-1/2 -translate-y-1/2 text-white-neutral-500 hover:text-white-neutral-300 transition-colors"
                            >
                                <CircleX className="w-5 h-5 text-white-neutral-500" />
                            </button>
                            <img
                                alt="command"
                                src={command}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-6 cursor-pointer"
                            />
                        </div>
                        <DialogClose className="cursor-pointer">
                            <XIcon className="size-5 text-white-neutral-500" />
                        </DialogClose>
                    </div>
                    {isSearching ? (
                        <>
                            <div className="flex flex-row">
                                <button
                                    onClick={() => setActiveTab('all')}
                                    className={`px-4 py-[7px] rounded-[8px] text-[14px] leading-[160%] font-medium transition-colors cursor-pointer ${activeTab === 'all' ? 'bg-white-neutral-900 text-base-white' : 'bg-transparent text-white-neutral-400 hover:text-base-white'}`}
                                >
                                    Show All
                                </button>
                                <button
                                    onClick={() => setActiveTab('tokens')}
                                    className={`px-4 py-[7px] rounded-[8px] text-[14px] leading-[160%] font-medium transition-colors cursor-pointer ${activeTab === 'tokens' ? 'bg-white-neutral-900 text-base-white' : 'bg-transparent text-white-neutral-400 hover:text-base-white'}`}
                                >
                                    Tokens
                                </button>
                                <button
                                    onClick={() => setActiveTab('pools')}
                                    className={`px-4 py-[7px] rounded-[8px] text-[14px] leading-[160%] font-medium transition-colors cursor-pointer ${activeTab === 'pools' ? 'bg-white-neutral-900 text-base-white' : 'bg-transparent text-white-neutral-400 hover:text-base-white'}`}
                                >
                                    Pools
                                </button>
                            </div>
                            {renderResults()}
                        </>
                    ) : (
                        <>
                            <div className="flex flex-row px-3 items-center gap-3">
                                <Clock5 className="w-5 h-5 text-white-neutral-600" />
                                <p className="text-[12px] leading-[165%] text-white-neutral-500">Recent Searches</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {initialRecentSearches.map((item) => (
                                    <div
                                        className="flex flex-row px-3 py-[9px] w-full max-w-[254px] rounded-[12px] bg-white-neutral-900 hover:bg-white-neutral-800 transition-colors cursor-pointer"
                                    >
                                        {item.type === 'token' ? (
                                            <div className="flex flex-row justify-between w-full">
                                                <div className="flex flex-row gap-2 pr-1 items-center">
                                                    <img src={item.image} alt={item.name} width={36} height={36} />
                                                    <div className="flex flex-col">
                                                        <span className="text-[14px] leading-[160%] font-bold text-base-white">{item.name}</span>
                                                        <span className="text-[12px] leading-[165%] text-white-neutral-300">{item.symbol}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col w-[115px] items-end">
                                                    <span className="text-[14px] leading-[160%] font-bold text-base-white">{item.price}</span>
                                                    <span className={`text-[12px] leading-[165%] font-medium ${item.change.startsWith('+') ? 'text-success-500' : 'text-danger-500'}`}>{item.change}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-row items-center w-full">
                                                <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                                    <img src={item.token1?.image} alt={item.token1?.name} width={16} height={16} />
                                                    <span className="text-[14px] leading-[160%] text-base-white font-bold">{item.token1?.name}</span>
                                                </div>
                                                <span className="font-medium text-white-neutral-300 text-[16px] leading-[160%] px-1">/</span>
                                                <div className="p-3 py-[7px] flex flex-row items-center gap-2 bg-white-neutral-900 border border-white-neutral-800 rounded-[8px]">
                                                    <img src={item.token2?.image} alt={item.token2?.name} width={16} height={16} />
                                                    <span className="text-[14px] leading-[160%] text-base-white font-bold">{item.token2?.name}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row px-3 items-center gap-3">
                                    <Zap className="w-5 h-5 text-white-neutral-600" />
                                    <p className="text-[12px] leading-[165%] text-white-neutral-500">Trending Crypto</p>
                                </div>
                                <Info className="w-5 h-5 text-white-neutral-600" />
                            </div>
                            <div className="flex flex-col gap-0.5 w-full">
                                {TokensData.slice(0, 3).map((item) => (
                                    <div
                                        className="flex flex-row items-center bg-white-neutral-900 rounded-[8px] p-3 hover:bg-white-neutral-800 transition-colors cursor-pointer"
                                    >
                                        <div className="w-full max-w-[290px] items-center justify-start flex flex-row gap-2">
                                            <img src={item.image} alt={item.name} width={36} height={36} />
                                            <span className="text-[14px] leading-[160%] text-base-white font-bold">{item.name}</span>
                                        </div>
                                        <div className="flex flex-col items-end w-full max-w-[264px]">
                                            <span className="text-[12px] leading-[165%] text-white-neutral-300">Market cap:</span>
                                            <span className="text-[12px] leading-[165%] font-bold text-white-neutral-300">{item.marketCap}</span>
                                        </div>
                                        <div className="flex flex-col items-end w-full max-w-[200px]">
                                            <span className="text-[12px] leading-[165%] font-bold text-base-white">{item.price}</span>
                                            <span className={`text-[12px] leading-[165%] font-medium ${item.change.startsWith('+') ? 'text-success-500' : 'text-danger-500'}`}>{item.change}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}