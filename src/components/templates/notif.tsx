import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, FileCheck2, Gift, Settings, Wallet } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

export function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Bell className={`size-6 cursor-pointer ${isOpen ? 'text-base-white' : 'text-white-neutral-500'}`}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#1D1B2C] w-[440px] rounded-[8px] border border-white-neutral-700 p-0" align="center">
        <DropdownMenuLabel className="p-0">
            <div className="flex flex-row items-center p-4 gap-4 w-full justify-between">
              <span className="text-[14px] leading-[160%] font-medium text-base-white w-full max-w-[211px]">Notification</span>
              <div className="pr-4 border-r border-white-neutral-800 cursor-pointer">
                <Settings className="size-6 text-white-neutral-500"/>
              </div>
              <Button size="default" variant="default" className="cursor-pointer">Mark all as read</Button>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup className="flex flex-col gap-1.5 px-2 pb-2">
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-800 p-2 gap-5 hover:bg-white-neutral-700">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <Wallet className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Connected Wallet</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">09.21</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Wallet successfully connected</span>
                <div className="w-1.5 h-1.5 rounded-full border border-white-neutral-700 bg-primary-400"/>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-800 p-2 gap-5 hover:bg-white-neutral-700">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <Gift className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Congratulations</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">08.12</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] leading-[165%] text-white-neutral-500">You’ve been completed your mission and are entitled for free <br /> Ethereum $5.00</span>
                <div className="w-1.5 h-1.5 rounded-full border border-white-neutral-700 bg-primary-400"/>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-800 p-2 gap-5 hover:bg-white-neutral-700">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <FileCheck2 className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Success add liquidity</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">07.21</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Your liquidity has been successfully created</span>
                <div className="w-1.5 h-1.5 rounded-full border border-white-neutral-700 bg-primary-400"/>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-900 p-2 gap-5 hover:bg-white-neutral-800">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <Wallet className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Connected Wallet</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Dec 23, 10.21</span>
              </div>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">Wallet successfully connected</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-900 p-2 gap-5 hover:bg-white-neutral-800">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <FileCheck2 className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Success swap</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Dec 23, 09.21</span>
              </div>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">ETH &rarr; USDT was uccessfully swap</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-900 p-2 gap-5 hover:bg-white-neutral-800">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <FileCheck2 className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Success swap</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Dec 23, 09.21</span>
              </div>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">ETH &rarr; USDT was uccessfully swap</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-900 p-2 gap-5 hover:bg-white-neutral-800">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <FileCheck2 className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Success swap</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Dec 23, 09.21</span>
              </div>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">ETH &rarr; USDT was uccessfully swap</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row rounded-[8px] bg-white-neutral-900 p-2 gap-5 hover:bg-white-neutral-800">
            <div className="rounded-full p-1.5 border border-white-neutral-800 bg-white-neutral-900 flex flex-col items-center justify-center">
              <FileCheck2 className="size-3 text-base-white"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] leading-[160%] text-base-white">Success swap</span>
                <span className="text-[12px] leading-[165%] text-white-neutral-500">Dec 23, 09.21</span>
              </div>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">ETH &rarr; USDT was uccessfully swap</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
