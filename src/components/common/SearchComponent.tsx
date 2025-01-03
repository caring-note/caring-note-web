import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { debounce } from "@mui/material";
import React, { useCallback, useState } from "react";

interface SearchComponentProps {
  commandProps?: React.ComponentProps<typeof Command>;
  placeholder?: string;
  items?: string[];
  onSelect?: (item: string) => void;
  onChangeInputValue?: (value: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  commandProps,
  placeholder = "Type a command or search...",
  items = [],
  onSelect,
  onChangeInputValue,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChangeInputValue) debouncedOnChangeInputValue(e.target.value);
  };

  const debouncedOnChangeInputValue = useCallback(
    debounce((value: string) => {
      console.log("debouncedOnChangeInputValue::" + value);
      if (onChangeInputValue) onChangeInputValue(value);
    }, 1000),
    [],
  );

  const handleSelect = (item: string) => {
    setInputValue(item);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="relative w-full h-full">
      <Command
        {...commandProps}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // e.preventDefault(); // 기본 동작 방지하면 안됨 (기본 동작이 select)
            if (inputValue) {
              // inputValue가 존재한다는 뜻은, Suggestions에 있는 item을 선택하지 않았다는 뜻
              handleSelect(inputValue);
            }
          }
        }}>
        <CommandInput
          className="w-full h-full"
          placeholder={placeholder}
          value={inputValue}
          onChangeCapture={handleInputChange}
          autoFocus
        />
        <CommandList className="absolute left-0 top-10 z-10 mt-2 w-full max-h-48 overflow-auto rounded border bg-white shadow-lg">
          {/* <CommandEmpty>No results found.</CommandEmpty> */}
          <CommandGroup heading="Suggestions">
            {items.map((item, index) => (
              <CommandItem key={index} onSelect={handleSelect}>
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchComponent;
