import logo from '@/assets/logo.svg'
import { CirclePlus, Gift } from 'lucide-react'
import { Button } from '../ui/button'
import SearchDialog from './searchdialog'
import { Notification } from './notif'
import { useWallet } from '../context/usewallet'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { isWalletConnected, walletAddress } = useWallet();
    return (
        <div className="bg-white-neutral-900 flex flex-col justify-center items-center w-full">
            <div className="max-w-[1376px] w-full py-4 px-8 flex flex-row justify-between items-center">
                <img src={logo} alt="logo" />
                <SearchDialog/>
                <div className='flex flex-row gap-5 items-center'>
                    <div className='flex flex-row gap-3 items-center border-r border-white-neutral-800 pr-5'>
                        <div className="text-white cursor-pointer">
                            <Notification />
                        </div>
                        <div className="text-white cursor-pointer opacity-40">
                            <Gift className='size-6'/>
                        </div>
                        <div className="text-white cursor-pointer opacity-40">
                            <CirclePlus className='size-6'/>
                        </div>
                    </div>
                    {isWalletConnected ? (
                        <Button size='default' variant='default' className='cursor-pointer'>
                            {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                        </Button>
                    ) : (
                        <Link to="/connect">
                            <Button size='default' variant='default' className='cursor-pointer'>Connect Wallet</Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}