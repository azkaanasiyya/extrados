export default function Navigation() {
    return (
        <div className="flex flex-col items-start justify-center py-6 pl-[120px]">
            <div className="max-w-[1200px] flex flex-row items-center">
                <div className="text-[14px] leading-[160%] text-base-white px-4 py-[7px] bg-white-neutral-900 rounded-[8px]">Overview</div>
                <div className="text-[14px] leading-[160%] text-white-neutral-400 px-4 py-[7px]">Tokens</div>
                <div className="text-[14px] leading-[160%] text-white-neutral-400 px-4 py-[7px]">Pools</div>
                <div className="text-[14px] leading-[160%] text-white-neutral-400 px-4 py-[7px]">Portfolio</div>
                <div className="text-[14px] leading-[160%] text-white-neutral-400 px-4 py-[7px]">Settings</div>
            </div>
        </div>
    )
}