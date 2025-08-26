import wallet from "@/assets/connect/wallet.png"
import { ChevronRight, KeySquare, Wallet } from "lucide-react"
import extrados from "@/assets/connect/extrados.png"
import metamask from "@/assets/connect/metamask.png"
import walletconnect from "@/assets/connect/walletconnect.png"
import rabby from "@/assets/connect/rabby.png"
import coinbase from "@/assets/connect/coinbase.png"
import rainbow from "@/assets/connect/rainbow.png"
import { useWallet } from "@/components/context/usewallet"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function ConnectWallet() {
    const { connectWallet, isWalletConnected } = useWallet();
    const navigate = useNavigate();

    useEffect(() => {
        if (isWalletConnected) {
            navigate("/");
        }
    }, [isWalletConnected, navigate]);

    const handleConnectWallet = () => {
        connectWallet();
    }
    return (
        <div className="bg-neutral-900 flex flex-col items-center justify-start pt-[104px] min-h-screen">
            <div className="flex flex-row items-center gap-5">
                <div className="w-full max-w-[473px] flex flex-col items-center gap-10 pr-10 py-10">
                    <div className="flex flex-col items-center gap-9">
                        <img src={wallet} alt="wallet" width={160} height={160} />
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-center text-[24px] leading-[140%] font-bold text-base-white">What is wallet?</p>
                            <p className="text-center text-[16px] leading-[160%] text-white-neutral-300">Knowledge base about wallet</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-6">
                        <div className="flex flex-row gap-5 items-start pb-6 border-b border-white-neutral-800">
                            <div className="w-14 h-14 p-4 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-[12px]">
                                <Wallet className="size-6 text-base-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] leading-[160%] font-bold text-base-white">A Home for your Digital Assets</p>
                                <p className="text-[14px] leading-[160%] text-white-neutral-300">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 items-start">
                            <div className="w-14 h-14 p-4 flex flex-col items-center justify-center bg-white-neutral-900 border border-white-neutral-800 rounded-[12px]">
                                <KeySquare className="size-6 text-base-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] leading-[160%] font-bold text-base-white">A New Way to Log In</p>
                                <p className="text-[14px] leading-[160%] text-white-neutral-300">Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[473px] flex flex-col p-10 gap-8 rounded-[12px] items-center bg-white-neutral-900 border border-white-neutral-800">
                    <div className="flex flex-col gap-5 items-center">
                        <img src={extrados} alt="extrados" width={32} height={32} />
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-[18px] leading-[155%] font-bold text-base-white">Connect a Wallet</p>
                            <p className="text-[14px] leading-[160%] text-white-neutral-300">Stay ahead in crypto trading</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <div onClick={handleConnectWallet} className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-white-neutral-800">
                            <div className="flex flex-row items-center gap-3">
                                <div className="p-1.5 rounded-[8px] bg-white-neutral-900 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={metamask} alt="metamask" width={20} height={20} />
                                </div>
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Metamask</span>
                            </div>
                            <ChevronRight className="size-5 text-white-neutral-700" />
                        </div>
                        <div onClick={handleConnectWallet} className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-white-neutral-800">
                            <div className="flex flex-row items-center gap-3">
                                <div className="p-1.5 rounded-[8px] bg-white-neutral-900 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={walletconnect} alt="walletconnect" width={20} height={20} />
                                </div>
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Wallet Connect</span>
                            </div>
                            <ChevronRight className="size-5 text-white-neutral-700" />
                        </div>
                        <div onClick={handleConnectWallet} className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-white-neutral-800">
                            <div className="flex flex-row items-center gap-3">
                                <div className="p-1.5 rounded-[8px] bg-white-neutral-900 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={rabby} alt="rabby" width={20} height={20} />
                                </div>
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Rabby Wallet</span>
                            </div>
                            <ChevronRight className="size-5 text-white-neutral-700" />
                        </div>
                        <div onClick={handleConnectWallet} className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-white-neutral-800">
                            <div className="flex flex-row items-center gap-3">
                                <div className="p-1.5 rounded-[8px] bg-white-neutral-900 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={coinbase} alt="coinbase" width={20} height={20} />
                                </div>
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Coinbase Wallet</span>
                            </div>
                            <ChevronRight className="size-5 text-white-neutral-700" />
                        </div>
                        <div onClick={handleConnectWallet} className="bg-white-neutral-900 rounded-[12px] border border-white-neutral-800 flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-white-neutral-800">
                            <div className="flex flex-row items-center gap-3">
                                <div className="p-1.5 rounded-[8px] bg-white-neutral-900 border border-white-neutral-800 flex flex-col items-center justify-center">
                                    <img src={rainbow} alt="rainbow" width={20} height={20} />
                                </div>
                                <span className="text-[14px] leading-[160%] font-bold text-base-white">Rainbow</span>
                            </div>
                            <ChevronRight className="size-5 text-white-neutral-700" />
                        </div>
                    </div>
                    <p className="text-[12px] leading-[165%] text-white-neutral-300 text-center">By connecting a wallet, you agree to Extrados' Terms of Service and consent to its Privacy Policy.</p>
                </div>
            </div> 
        </div>
    )
}