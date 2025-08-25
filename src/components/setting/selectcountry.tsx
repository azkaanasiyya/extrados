import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SelectProps } from "@radix-ui/react-select";
import deut from "@/assets/setting/deut.png";
import eng from "@/assets/setting/eng.png";
import ind from "@/assets/setting/ind.png";
import pols from "@/assets/setting/pols.png";
import span from "@/assets/setting/span.png";

interface Region {
  value: string;
  label: string;
  icon: string;
}

interface SelectCountryProps extends SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

const regions: Region[] = [
  { value: "deutsch", label: "Deutsch", icon: deut },
  { value: "english", label: "English", icon: eng },
  { value: "indonesian", label: "Indonesian", icon: ind },
  { value: "polski", label: "Polski", icon: pols },
  { value: "spanish", label: "Spanish", icon: span }
];

export function SelectCountry({ value, onValueChange, onBlur, name, ...props }: SelectCountryProps) {
  const selectedRegion = regions.find(region => region.value === value);

  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger onBlur={onBlur} name={name} className="cursor-pointer hover:bg-white-neutral-800 rounded-[8px] border border-white-neutral-800 bg-white-neutral-900 px-3 py-[7px] text-[14px] leading-[160%] font-medium text-base-white data-[state=open]:border-base-white data-[state=open]:border">
        {value ? (
            <span>{selectedRegion?.label}</span>
        ) : (
          <SelectValue placeholder="Select one" />
        )}
      </SelectTrigger>
      <SelectContent className="bg-neutral-900 rounded-[8px] border border-white-neutral-700 px-2 py-1.5 w-[200px]" align="end">
        {regions.map((region) => (
          <SelectItem key={region.value} value={region.value} className="focus:bg-white-neutral-900 focus:rounded-[8px] focus:border focus:border-white-neutral-800 w-full cursor-pointer border border-transparent py-2">
            <div className="flex items-center gap-2">
              <img 
                src={region.icon} 
                alt={region.label} 
                className="w-5 h-5" 
              />
              <span className="text-[14px] leading-[160%] font-medium text-base-white">{region.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}