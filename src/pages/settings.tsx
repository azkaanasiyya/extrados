import profile from "@/assets/setting/profile.png"
import { Button } from "@/components/ui/button"
import { ChevronDown, Power } from "lucide-react"
import connect from "@/assets/setting/connect.png"
import Toggle from "@/components/ui/toggle"

export default function Settings() {
    return (
        <div className="flex flex-col items-center justify-center pb-6">
            <div className="max-w-[794px] w-full flex flex-col gap-5 items-center">
                <div className="bg-white-neutral-900 p-5 w-full border border-white-neutral-800 rounded-[12px] flex flex-row items-center justify-between">
                    <div className="relative">
                        <img src={profile} alt="profile" width={40} height={40} />
                        <img src={connect} alt="connect" width={14} height={14} className="absolute bottom-0 right-0" />
                    </div>
                    <div className="flex flex-col gap-1 w-[591px]">
                        <p className="text-[16px] leading-[160%] font-bold text-base-white">My Crypto Account</p>
                        <p className="text-[12px] leading-[165%] font-medium text-white-neutral-300">address: 0x29F57De880d4DCAE40Ba3E63F18392a32B4d44ee</p>
                    </div>
                    <Button variant="default" size="default" className="cursor-pointer">
                        <Power className="w-5 h-5 text-base-white" />
                        Logout
                    </Button>
                </div>
                <div className="bg-white-neutral-900 w-full border border-white-neutral-800 rounded-[12px] flex flex-col">
                    <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] font-medium text-base-white">Preferences</div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4 border-b border-white-neutral-800">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Language</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">Let choose the languages you speak.</p>
                        </div>
                        <Button variant="default" size="default" className="cursor-pointer">
                            English
                            <ChevronDown width={20} height={20} className="text-base-white"/>
                        </Button>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4 border-b border-white-neutral-800">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Currency</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">Let choose the currency you use.</p>
                        </div>
                        <Button variant="default" size="default" className="cursor-pointer">
                            USD
                            <ChevronDown width={20} height={20} className="text-base-white"/>
                        </Button>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4 border-b border-white-neutral-800">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Hide small balances</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">It will automatically hide small balances on each page.</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4 border-b border-white-neutral-800">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Hide unknown tokens & NFTs</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">This will automatically hide unknown tokens & NFTs.</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4 border-b border-white-neutral-800">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Allow Analytics</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">We use anonymized data to enhance your experience</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Show testnets</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">This allows developers to deploy, test, and execute their projects on a functioning blockchain freely.</p>
                        </div>
                        <Toggle />
                    </div>
                </div>
                <div className="bg-white-neutral-900 w-full border border-white-neutral-800 rounded-[12px] flex flex-col">
                    <div className="px-5 pt-5 pb-4 text-[16px] leading-[160%] font-medium text-base-white">Notification</div>
                    <div className="mx-5 border-b border-white-neutral-800 flex flex-col gap-3 py-4">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Portfolio</span>
                                <p className="text-[12px] leading-[165%] text-white-neutral-300">You’ll be notified of significant increase & decrease of coins in your portfolio</p>
                            </div>
                            <Toggle /> 
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">Price movement threshold</p>
                            <Button variant="default" size="default" className="cursor-pointer">
                                10%
                                <ChevronDown width={20} height={20} className="text-base-white"/>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-5 py-4">
                        <div className="flex flex-col">
                            <span className="text-[14px] leading-[160%] font-bold text-base-white">Updates & Promotions</span>
                            <p className="text-[12px] leading-[165%] text-white-neutral-300">Receive important Extrados promotions and updates.</p>
                        </div>
                        <Toggle />
                    </div>
                </div>
            </div> 
        </div>
        
    )
}