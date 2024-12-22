import React, { ReactNode } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@components/components/ui/command";

interface SearchComponentProps {
  commandProps?: React.ComponentProps<typeof Command>;
  placeholder?: string;
  items?: string[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  commandProps,
  placeholder = "Type a command or search...",
  items = [],
}) => {
  return (
    <Command {...commandProps}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {items.map((item, index) => (
            <CommandItem key={index}>{item}</CommandItem>
          ))}
        </CommandGroup>
        {/* <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
};

export default SearchComponent;
