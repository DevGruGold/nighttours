
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 pointer-events-auto", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-xl font-medium text-black", // Updated for better visibility
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-gray-200 p-0 opacity-80 hover:opacity-100 border-yellow-500/30 text-black"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-black rounded-md w-9 font-medium text-[0.8rem]", // Updated text color
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-black hover:bg-yellow-500/20 hover:text-black focus:bg-yellow-500/20 focus:text-black aria-selected:bg-yellow-500 aria-selected:text-black"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-yellow-500 text-black hover:bg-yellow-600 hover:text-black focus:bg-yellow-500 focus:text-black",
        day_today: "bg-gray-200 text-black border border-yellow-500/50",
        day_outside:
          "day-outside text-gray-500 opacity-50 aria-selected:bg-accent/50 aria-selected:text-gray-600 aria-selected:opacity-30",
        day_disabled: "text-gray-400 opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4 text-black" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4 text-black" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
