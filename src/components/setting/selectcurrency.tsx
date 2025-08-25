
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SelectProps } from "@radix-ui/react-select";

interface Currency {
  value: string;
  label: string;
  details: string;
}

interface SelectCurrencyProps extends SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

const currencies: Currency[] = [
  { value: "eur", label: "EUR", details: "Euro" },
  { value: "gbp", label: "GBP", details: "British Pound" },
  { value: "idr", label: "IDR", details: "Indonesian Rupiah" },
  { value: "usd", label: "USD", details: "United States Dollar" },
  { value: "sgd", label: "SGD", details: "Singapore Dollar" }
];

export function SelectCurrency({ value, onValueChange, onBlur, name, ...props }: SelectCurrencyProps) {
  const selectedCurrency = currencies.find(currency => currency.value === value);

  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger onBlur={onBlur} name={name} className="cursor-pointer hover:bg-white-neutral-800 rounded-[8px] border border-white-neutral-800 bg-white-neutral-900 px-3 py-[7px] text-[14px] leading-[160%] font-medium text-base-white data-[state=open]:border-base-white data-[state=open]:border">
        {value ? (
          <span>{selectedCurrency?.label}</span>
        ) : (
          <SelectValue placeholder="Select a currency" />
        )}
      </SelectTrigger>
      <SelectContent className="bg-neutral-900 rounded-[8px] border border-white-neutral-700 px-2 py-1.5 w-[232px] flex flex-col gap-1" align="end">
        {currencies.map((currency) => (
          <SelectItem key={currency.value} value={currency.value} className="focus:bg-white-neutral-900 focus:rounded-[8px] focus:border focus:border-white-neutral-800 w-full cursor-pointer py-[7px] border border-transparent">
            <div className="flex items-center gap-1">
              <span className="text-[14px] leading-[160%] font-medium text-base-white w-8 text-start">{currency.label}</span>
              <span className="text-[12px] leading-[165%] text-white-neutral-500">{currency.details}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}