import type { SelectProps } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface Percent {
    value: string;
    label: string;
}

interface SelectPercentProps extends SelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    onBlur?: () => void;
    name?: string;
}

const percents: Percent[] = [
    { value: "5%", label: "5%" },
    { value: "8%", label: "8%" },
    { value: "10%", label: "10%" },
]

export default function SelectPercent({value, onValueChange, onBlur, name, ...props}: SelectPercentProps) {
    const selectedPercent = percents.find(percent => percent.value === value);

    return (
        <Select value={value} onValueChange={onValueChange} {...props}>
            <SelectTrigger onBlur={onBlur} name={name} className="cursor-pointer hover:bg-white-neutral-800 rounded-[8px] border border-white-neutral-800 bg-white-neutral-900 px-3 py-[7px] text-[14px] leading-[160%] font-medium text-base-white data-[state=open]:border-base-white data-[state=open]:border">
                {value ? (
                    <span>{selectedPercent?.label}</span>
                ) : (
                    <SelectValue placeholder="Select one" />
                )}
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 rounded-[8px] border border-white-neutral-700 px-2 py-1.5 w-[104px] flex flex-col gap-1" align="end">
                {percents.map((percent) => (
                    <SelectItem key={percent.value} value={percent.value} className="focus:bg-white-neutral-900 focus:rounded-[8px] focus:border focus:border-white-neutral-800 w-full cursor-pointer py-[7px] border border-transparent">
                        <span className="text-[14px] leading-[160%] font-medium text-base-white">{percent.label}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}