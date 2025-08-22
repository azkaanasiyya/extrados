import { Button } from "../ui/button"
import up from "@/assets/token/stairs-up.png"
import down from "@/assets/token/stairs-down.png"

const data = [
    {color: "bg-success-500", count:20 },
    {color: "bg-danger-500", count:30 }
]
export default function SwapSentiment() {
    return (
        <div className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 w-full flex flex-col">
            <div className="flex flex-col border-b border-neutral-900 p-5 gap-5 w-full">
                <span className="text-[16px] leading-[160%] font-medium text-base-white">Community Sentiment</span>
                <div className="flex flex-col gap-2 items-center w-full">
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-[14px] leading-[160%] font-medium text-success-500 text-right w-10">42%</span>
                        <div className="flex flex-row h-full">
                            {data.map((group, index) =>
                                Array.from({ length: group.count }).map((_, barIndex) => (
                                <div
                                    key={`${index}-${barIndex}`}
                                    className={`w-0.5 h-full rounded-[8px] mx-[1.5px] ${group.color}`}
                                />
                                ))
                            )}
                        </div>
                        <span className="text-[14px] leading-[160%] font-medium text-danger-500 text-left w-10">42%</span>
                    </div>
                    <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">149482 votes</span>
                </div>
            </div>
            <div className="p-5 flex flex-row items-center w-full justify-center gap-2">
                <Button variant="default" size="default" className="cursor-pointer w-[169.5px]">
                    <img src={up} alt="up" className="w-5 h-5" />
                    Optimist
                </Button>
                <Button variant="default" size="default" className="cursor-pointer w-[169.5px]">
                    <img src={down} alt="down" className="w-5 h-5" />
                    Pessimist
                </Button>
            </div>
        </div>
    )
}