"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@components/components/ui/button";
import { Calendar } from "@components/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/components/ui/popover";
import { cn } from "@components/lib/utils";

export function DatePickerComponent() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] h-[2.25rem] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}>
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "yyyy/MM/dd") : <span>상담일자 선택</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 ">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          showOutsideDays={false}
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={2050}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
export default DatePickerComponent;
