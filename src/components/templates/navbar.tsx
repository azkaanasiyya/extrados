import logo from '@/assets/logo.svg'
import InputNavbar from '../custom/inputnavbar'
import { Bell, CirclePlus, Gift } from 'lucide-react'
import { Button } from '../ui/button'

export default function Navbar() {
    return (
        <div className="bg-white-neutral-900 flex flex-col justify-center items-center w-full">
            <div className="max-w-[1376px] w-full py-4 flex flex-row justify-between items-center">
                <img src={logo} alt="logo" />
                <InputNavbar/>
                <div className='flex flex-row gap-5 items-center'>
                    <div className='flex flex-row gap-3 items-center border-r border-white-neutral-800 pr-5'>
                        <Bell className='w-6 h-6 text-white-neutral-500'/>
                        <Gift className='w-6 h-6 text-white-neutral-500'/>
                        <CirclePlus className='w-6 h-6 text-white-neutral-500'/>
                    </div>
                    <Button size='default' variant='default'>Connect Wallet</Button>
                </div>
            </div>
        </div>
    )
}