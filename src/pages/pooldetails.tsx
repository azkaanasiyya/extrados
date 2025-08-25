import PoolContracts from "@/components/pooldetail/contracts";
import { PoolComposition } from "@/components/pooldetail/poolcomposition";
import PoolStats from "@/components/pooldetail/poolstats";
import PricePoolDetail from "@/components/pooldetail/price";
import VolumePoolDetail from "@/components/pooldetail/volume";
import TransactionTokenDetail from "@/components/tokendetail/transaction";

export default function PoolDetails() {
    return (
        <div className="bg-neutral-900 flex flex-col gap-5 items-center justify-center">
            <div className="max-w-[1200px] w-full">
                <PricePoolDetail />
            </div>
            <div className="max-w-[1200px] w-full grid grid-cols-12 gap-5">
                <div className="col-span-8 flex flex-col gap-5">
                    <div className="w-full h-[348px]">
                        <VolumePoolDetail />
                    </div>
                    <TransactionTokenDetail />
                </div>
                <div className="col-span-4 flex flex-col gap-5">
                    <PoolStats />
                    <PoolComposition />
                    <PoolContracts />
                </div>
            </div>
        </div>
    )
}