"use client";

import * as React from "react";
import { Check, Locate } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "delhi",
    label: "Delhi",
  },
  {
    value: "mumbai",
    label: "Mumbai",
  },
  {
    value: "bangalore",
    label: "Bangalore",
  },
  {
    value: "hyderabad",
    label: "Hyderabad",
  },
  {
    value: "chennai",
    label: "Chennai",
  },
  {
    value: "kolkata",
    label: "Kolkata",
  },
  {
    value: "pune",
    label: "Pune",
  },
  {
    value: "ahmedabad",
    label: "Ahmedabad",
  },
  {
    value: "jaipur",
    label: "Jaipur",
  },
  {
    value: "lucknow",
    label: "Lucknow",
  },
  {
    value: "kanpur",
    label: "Kanpur",
  },
];

export function Location() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="default"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between text-gray-600"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Location"}
          <Locate className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location" />
          <CommandEmpty>No location found</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
