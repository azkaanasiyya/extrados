import { Power, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog";
import disconnect from "@/assets/setting/disconnect.png"
import { useWallet } from "../context/usewallet";

export default function Disconnect() {
    const { disconnectWallet } = useWallet();
    const handleDisconnect = () => {
        disconnectWallet();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="default" className="cursor-pointer">
                    <Power className="w-5 h-5 text-base-white" />
                    Disconnect
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900">
                <div className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 py-6 px-5 flex flex-col items-center gap-8 w-[386px]">
                    <div className="w-full flex justify-end">
                        <DialogClose className="cursor-pointer">
                            <XIcon className="size-5 text-white-neutral-500" />
                        </DialogClose>
                    </div>
                    <img src={disconnect} alt="disconnect" width={120} height={120} />
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-center text-[20px] leading-[140%] font-bold text-base-white">Are you sure?</span>
                        <span className="text-center text-[14px] leading-[160%] text-white-neutral-500">This will immediately disconnect your wallet and interupt any work in progress</span>
                    </div>
                    <DialogClose asChild>
                        <Button onClick={handleDisconnect} size="default" variant="default" className="cursor-pointer">
                            Disconnect
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}