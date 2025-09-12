import { TransactionTokenData } from "@/data/transactionstoken";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function TransactionTokenDetail() {
    return (
        <div className="bg-white-neutral-900 w-full rounded-[12px] border border-white-neutral-800 flex flex-col">
            <div className="p-5 border-b border-white-neutral-800 text-[16px] leading-[160%] font-medium text-base-white">Transaction</div>
            <TableHeader>
                <TableRow className="flex flex-row items-center px-5 border-b border-white-neutral-800 hover:bg-transparent">
                    <TableHead className="w-[128px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400">TIME</TableHead>
                    <TableHead className="w-[96px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400">ACTION</TableHead>
                    <TableHead className="w-[120px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400 text-end">PRICE (USD)</TableHead>
                    <TableHead className="w-[169px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400 text-end">TOKEN AMOUNT</TableHead>
                    <TableHead className="w-[120px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400 text-end">TOKEN VALUE</TableHead>
                    <TableHead className="w-[120px] px-2 py-2.5 text-[12px] leading-[165%] font-medium text-white-neutral-400 text-end">WALLET</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TransactionTokenData.map((token, index, arr) => (
                    <TableRow key={index} className={`flex flex-row hover:bg-transparent items-center mx-5 ${index === arr.length - 1 ? '' : 'border-b border-white-neutral-800'}`}>
                        <TableCell className="px-2 py-[13px] w-[128px] text-[14px] leading-[160%] font-medium text-base-white">{token.time}</TableCell>
                        <TableCell className={`px-2 py-[13px] w-[96px] text-[14px] leading-[160%] font-medium ${token.actionColor}`}>{token.action}</TableCell>
                        <TableCell className="px-2 py-[13px] w-[120px] text-[14px] leading-[160%] text-end font-bold text-base-white">{token.price}</TableCell>
                        <TableCell className="px-2 py-[13px] w-[169px] text-[14px] leading-[160%] font-bold text-base-white text-end">{token.amount}</TableCell>
                        <TableCell className="px-2 py-[13px] w-[120px] text-[14px] leading-[160%] text-end font-bold text-base-white">{token.value}</TableCell>
                        <TableCell className="px-2 py-[13px] w-[120px] text-[14px] leading-[160%] font-bold text-base-white line-clamp-1">{token.wallet}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </div>
    )
}