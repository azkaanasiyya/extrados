import { Clock5, Search, XIcon, Zap } from "lucide-react";
import { Input } from "../ui/input";
import command from "@/assets/command.png";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import eth from "@/assets/pools/ethp.png"
import tether from "@/assets/overview/tether.png"
import sol from "@/assets/overview/sol.png"
import usd from "@/assets/overview/usd.png"

export default function SearchDialog() {
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
            <div className="flex flex-row items gap-2">
                <div className="relative w-[750px] cursor-pointer">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Search className="w-4 h-4 text-white-neutral-600" />
                    </span>
                    <Input
                        placeholder="Search tokens or pools"
                        className="w-full pl-10"
                    />
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
            <div className="flex flex-row px-3 items-center gap-3">
                <Clock5 className="w-5 h-5 text-white-neutral-600"/>
                <p className="text-[12px] leading-[165%] text-white-neutral-500">Recent Searches</p>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row px-3 py-[9px] w-full max-w-[254px] rounded-[12px] bg-white-neutral-900">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 pr-1 items-center">
                            <div className="w-9 h-9 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-full">
                                <img src={eth} alt="eth" width={16} height={16} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Ethereum</span>
                                <span className="text-[12px] leading-[165%] text-white-neutral-300">ETH</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-[115px] items-end">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">$3,119.30</span>
                            <span className="text-[12px] leading-[165%] font-medium text-danger-500">-0.96% (1d)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row px-3 py-[9px] w-full max-w-[254px] rounded-[12px] bg-white-neutral-900">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 pr-1 items-center">
                            <img src={tether} alt="tether" width={36} height={36} />
                            <div className="flex flex-col">
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Tether</span>
                                <span className="text-[12px] leading-[165%] text-white-neutral-300">USDT</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-[115px] items-end">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">$1.00</span>
                            <span className="text-[12px] leading-[165%] font-medium text-danger-500">-0.01% (1d)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row px-3 py-[9px] w-full max-w-[254px] rounded-[12px] bg-white-neutral-900">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 pr-1 items-center">
                            <div className="w-9 h-9 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-full">
                                <img src={sol} alt="solana" width={16} height={16} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Solana</span>
                                <span className="text-[12px] leading-[165%] text-white-neutral-300">SOL</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-[115px] items-end">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">$1.00</span>
                            <span className="text-[12px] leading-[165%] font-medium text-success-500">+0.00% (1d)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-3 items-center gap-3">
                <Zap className="w-5 h-5 text-white-neutral-600"/>
                <p className="text-[12px] leading-[165%] text-white-neutral-500">Trending Crypto</p>
            </div>
            <div className="flex flex-col gap-0.5 w-full">
                <div className="flex flex-row items-center bg-white-neutral-800 border border-white-neutral-700 rounded-[8px] p-3">
                    <div className="w-full max-w-[290px] items-center justify-start flex flex-row gap-2">
                        <div className="w-9 h-9 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-full">
                            <img src={eth} alt="eth" width={16} height={16} />
                        </div>
                        <span className="text-[14px] leading-[160%] text-base-white font-bold">Ethereum</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[264px]">
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">Market cap:</span>
                        <span className="text-[12px] leading-[165%] font-bold text-white-neutral-300">$375,696,594,984.56</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[200px]">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">$3,119.30</span>
                        <span className="text-[12px] leading-[165%] font-medium text-danger-500">-0.96% (1d)</span>
                    </div>
                </div>
                <div className="flex flex-row items-center bg-white-neutral-900 rounded-[8px] p-3">
                    <div className="w-full max-w-[290px] items-center justify-start flex flex-row gap-2">
                        <img src={tether} alt="tether" width={36} height={36} />
                        <span className="text-[14px] leading-[160%] text-base-white font-bold">Tether USD</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[264px]">
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">Market cap:</span>
                        <span className="text-[12px] leading-[165%] font-bold text-white-neutral-300">$127,556,424,087.78</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[200px]">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">$1.00</span>
                        <span className="text-[12px] leading-[165%] font-medium text-success-500">+0.05% (1d)</span>
                    </div>
                </div>
                <div className="flex flex-row items-center bg-white-neutral-900 rounded-[8px] p-3">
                    <div className="w-full max-w-[290px] items-center justify-start flex flex-row gap-2">
                        <img src={usd} alt="usd" width={36} height={36} />
                        <span className="text-[14px] leading-[160%] text-base-white font-bold">USD Coin</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[264px]">
                        <span className="text-[12px] leading-[165%] text-white-neutral-300">Market cap:</span>
                        <span className="text-[12px] leading-[165%] font-bold text-white-neutral-300">$37,125,624,276.46</span>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-[200px]">
                        <span className="text-[12px] leading-[165%] font-bold text-base-white">$0.99</span>
                        <span className="text-[12px] leading-[165%] font-medium text-success-500">+0.01% (1d)</span>
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}