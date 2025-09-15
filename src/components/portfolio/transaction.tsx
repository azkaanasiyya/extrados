import { TransactionData } from "@/data/transaction"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export default function Transaction() {
    return (
        <div className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] flex flex-col">
            <div className="p-5 border-b border-white-neutral-800 text-[16px] leading-[160%] font-medium text-base-white">Transaction</div>
            <TableHeader>
                <TableRow className="px-5 border-b border-white-neutral-800 flex flex-row hover:bg-transparent">
                    <TableHead className="w-[96px] px-2 py-2.5 text-[12px] leading-[165%] text-white-neutral-400 font-medium">ACTION</TableHead>
                    <TableHead className="w-[200px] px-2 py-2.5 text-[12px] leading-[165%] text-white-neutral-400 font-medium">DATE</TableHead>
                    <TableHead className="w-[248px] px-2 py-2.5 text-[12px] leading-[165%] text-white-neutral-400 font-medium">ASSETS</TableHead>
                    <TableHead className="w-[248px] px-2 py-2.5 text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">PRICE</TableHead>
                    <TableHead className="w-[248px] px-2 py-2.5 text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">AMOUNT</TableHead>
                    <TableHead className="w-[120px] px-2 py-2.5 text-end text-[12px] leading-[165%] text-white-neutral-400 font-medium">FEES</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TransactionData.map((trans, index, arr) => (
                    <TableRow key={index} className={`flex flex-row hover:bg-transparent mx-5 ${index === arr.length - 1 ? '' : 'border-b border-white-neutral-800'}`}>
                        <TableCell className={`py-[23px] px-2 w-[96px] text-[14px] leading-[160%] font-medium ${trans.actionColor}`}>{trans.action}</TableCell>
                        <TableCell className="py-[23px] px-2 w-[200px] text-[14px] leading-[160%] font-medium text-base-white">{trans.date}</TableCell>
                        <TableCell className="py-4 px-2 w-full max-w-[248px] items-center justify-start flex flex-row gap-2">
                            <img src={trans.asset.image} alt={trans.asset.name} className="w-9 h-9" />
                            <span className="text-[14px] leading-[160%] text-base-white font-bold">{trans.asset.name}</span>
                        </TableCell>
                        <TableCell className="py-[23px] px-2 w-[248px] text-end text-[14px] leading-[160%] font-bold text-base-white">{trans.price}</TableCell>
                        <TableCell className="py-[23px] px-2 w-[248px] text-end text-[14px] leading-[160%] font-bold text-base-white">{trans.amount}</TableCell>
                        <TableCell className="py-[23px] px-2 w-[120px] text-end text-[14px] leading-[160%] font-medium text-base-white">{trans.fees}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </div>
    )
}