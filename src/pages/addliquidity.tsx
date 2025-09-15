import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Info, Plus, XIcon } from "lucide-react";
import usdc from "@/assets/pools/usdc.png";
import eth from "@/assets/pools/ethp.png";
import { useState, type SetStateAction } from "react";
import confirmation from "@/assets/pools/confirmation.png";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import success from "@/assets/pools/success.png";
import { motion } from "framer-motion"
import { SelectCurrency } from "@/components/setting/selectcurrency";
import SelectPercent from "@/components/pooldetail/selectpercent";

interface AddLiquidityFormProps {
    setDialogStatus: React.Dispatch<React.SetStateAction<string>>;
    onClose: () => void;
}

const AddLiquidityForm: React.FC<AddLiquidityFormProps> = ({ setDialogStatus, onClose }) => {
    const handleAddLiquidity = () => {
        setDialogStatus("waiting");
        setTimeout(() => {
            setDialogStatus("success");
        }, 3000);
    };
    const [currency, setCurrency] = useState('usd');
    const [percent, setPercent] = useState('0.50%');

    return (
        <>
            <div className="flex flex-row items-center justify-between w-full">
                <button onClick={onClose} className="cursor-pointer flex flex-row items-center gap-4">
                    <ChevronLeft className="size-6 text-base-white" />
                    <span className="text-[16px] leading-[160%] font-medium text-base-white">Add Liquidity</span>
                </button>
                <SelectCurrency value={currency} onValueChange={setCurrency} defaultValue="usd"/>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="bg-neutral-900 rounded-[8px] p-4 flex flex-col gap-3 w-full">
                    <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Deposit Amount</span>
                    <div className="bg-white-neutral-900 rounded-[8px] border border-white-neutral-800 p-3 flex flex-col gap-2 w-full">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-row items-center rounded-[8px] bg-neutral-900 w-full max-w-[160px] px-2 py-[5px] gap-2">
                                <div className="bg-white-neutral-900 rounded-full w-6 h-6 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={usdc} alt="usdc" width={16} height={16} />
                                </div>
                                <div className="flex flex-row items-center justify-between w-full">
                                    <span className="text-[16px] leading-[160%] font-medium text-base-white">USDC</span>
                                    <span className="text-[12px] leading-[165%] font-bold text-white-neutral-500">22%</span>
                                </div>
                            </div>
                            <div className="bg-white-neutral-900 py-[5px] px-2 rounded-[8px] text-end text-[16px] leading-[160%] font-bold text-base-white w-full">0.02728</div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$480.44</span>
                        </div>
                    </div>
                    <div className="bg-white-neutral-900 rounded-[8px] border border-white-neutral-800 p-3 flex flex-col gap-2 w-full">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-row items-center rounded-[8px] bg-neutral-900 w-full max-w-[160px] px-2 py-[5px] gap-2">
                                <div className="bg-white-neutral-900 rounded-full w-6 h-6 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={eth} alt="eth" width={16} height={16} />
                                </div>
                                <div className="flex flex-row items-center justify-between w-full">
                                    <span className="text-[16px] leading-[160%] font-medium text-base-white">ETH</span>
                                    <span className="text-[12px] leading-[165%] font-bold text-white-neutral-500">78%</span>
                                </div>
                            </div>
                            <div className="bg-white-neutral-900 py-[5px] px-2 rounded-[8px] text-end text-[16px] leading-[160%] font-bold text-base-white w-full">0.00892</div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">Balance: 0.034</span>
                            <span className="text-[12px] leading-[165%] font-medium text-white-neutral-400">$480.44</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-7 flex flex-col gap-4 w-full">
                <div className="flex flex-row items-center pb-4 justify-between border-b border-neutral-900">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Slippage</span>
                        <Info className="size-4 text-white-neutral-700" />
                    </div>
                    <SelectPercent value={percent} onValueChange={setPercent} defaultValue="0.50%"/>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Price Impact</span>
                        <Info className="size-4 text-white-neutral-700" />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">$214.42</span>
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">(0.44%)</span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Max slippage</span>
                        <Info className="size-4 text-white-neutral-700" />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">$245.49</span>
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">(0.50%)</span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">LP tokens (if no slippage)</span>
                        <Info className="size-4 text-white-neutral-700" />
                    </div>
                    <span className="text-[14px] leading-[160%] font-bold text-base-white">167.4528</span>
                </div>
                <div className="flex flex-row items-center justify-between pb-4 border-b border-neutral-900">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-medium text-white-neutral-300">Share of pool</span>
                        <Info className="size-4 text-white-neutral-700" />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">0%</span>
                        <ArrowRight className="size-5 text-base-white" />
                        <span className="text-[14px] leading-[160%] font-bold text-base-white">0.0223%</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="bg-neutral-900 rounded-[8px] px-4 py-[5px] flex flex-row items-center justify-between w-full">
                    <span className="text-[16px] leading-[160%] font-medium text-white-neutral-300">Total</span>
                    <span className="text-[16px] leading-[160%] font-bold text-base-white">$49,252.74</span>
                </div>
                <Button
                    size="default"
                    variant="default"
                    className="cursor-pointer w-full"
                    onClick={handleAddLiquidity}
                >
                    Add Liquidity
                </Button>
            </div>
        </>
    );
};

const ConfirmationDialog = () => (
    <>
        <motion.img
            src={confirmation}
            alt="confirmation"
            width={120}
            height={120}
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity, 
                duration: 5,
                ease: "linear", 
            }}
        />
        <div className="flex flex-col items-center gap-1">
            <p className="text-[24px] leading-[140%] font-bold text-base-white">Waiting for confirmation</p>
            <p className="text-[16px] leading-[160%] text-white-neutral-300">Supplying 0.02728 USDC and 0.00892 ETH</p>
        </div>
        <p className="text-[14px] leading-[160%] text-white-neutral-500">Confirm this transaction in your wallet</p>
    </>
);

const SuccessDialog = () => (
    <>
        <motion.img
            src={success}
            alt="success"
            width={120}
            height={120}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: "linear", 
            }}
        />
        <div className="flex flex-col items-center gap-1">
            <p className="text-[24px] leading-[140%] font-bold text-base-white">Transaction Submitted</p>
            <p className="text-[16px] leading-[160%] text-white-neutral-300">Transaction successfully</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <DialogClose asChild>
                <Button size="default" variant="default" className="w-full cursor-pointer">Close (5s)</Button>
            </DialogClose>
            <Button size="default" variant="view" className="w-full cursor-pointer">View Etherscan</Button>
        </div>
    </>
);

export default function PoolsDetails() {
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [dialogStatus, setDialogStatus] = useState("waiting");

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleStartConfirmation = (status: SetStateAction<string>) => {
        setOpenAddDialog(false); 
        setOpenConfirmDialog(true); 
        setDialogStatus(status);
    };

    const renderConfirmContent = () => {
        switch (dialogStatus) {
            case "waiting":
                return <ConfirmationDialog />;
            case "success":
                return <SuccessDialog />;
            default:
                return null;
        }
    };

    return (
        <div className="pools-details-page">
            <Button onClick={handleOpenAddDialog} className="cursor-pointer"> 
                <Plus className="size-5 text-base-white"/>
                Add Liquidity
            </Button>

            <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
                <DialogContent className="bg-neutral-900 w-full max-w-[590px]">
                    <div className="flex flex-col items-center bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 py-6 px-5 gap-6">
                        <AddLiquidityForm
                            setDialogStatus={handleStartConfirmation}
                            onClose={() => setOpenAddDialog(false)}
                        />
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog}>
                <DialogContent className="bg-neutral-900 w-full max-w-[368px]">
                    <div className="flex flex-col items-center bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 py-6 px-5 gap-6">
                        <div className="w-full flex justify-end">
                            <DialogClose className="cursor-pointer">
                                <XIcon className="size-5 text-base-white opacity-40" />
                            </DialogClose>
                        </div>
                        {renderConfirmContent()}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}