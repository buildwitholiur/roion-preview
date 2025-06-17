import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sourceOptions } from "@/data/mock-leads";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import type { LeadExpandRowProps } from "@/types/types";

export function LeadExpandRow({
  lead,
  formData,
  onUpdateField,
  onSave,
}: LeadExpandRowProps) {
  const [date, setDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (formData.date) {
      const parsedDate = new Date(formData.date);
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate);
      }
    }
  }, [formData.date]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = format(selectedDate, "MMMM d, yyyy");
      onUpdateField("date", formattedDate);
      setIsCalendarOpen(false);
    }
  };

  return (
    <div className="px-8 2xl:pl-19 2xl:pr-4 pb-5.5 pt-8.5 space-y-4 bg-custom-white-600 custom__inner-shadow border-l-3 border-l-custom-blue">
      <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-6">
        <div className="flex-1 grid grid-cols-1 2xl:grid-cols-3 gap-4 md:gap-6">
          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`firstName-${lead.id}`}>First Name</Label>
              <Input
                className="h-8.5"
                id={`firstName-${lead.id}`}
                value={formData.firstName}
                onChange={(e) => onUpdateField("firstName", e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor={`lastName-${lead.id}`}>Last Name</Label>
              <Input
                className="h-8.5"
                id={`lastName-${lead.id}`}
                value={formData.lastName}
                onChange={(e) => onUpdateField("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`date-${lead.id}`}>Date</Label>

              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-between text-left font-medium text-font-16 text-custom-gray-700 !pl-5 !pr-[13px] bg-custom-white hover:bg-custom-white h-8.5 rounded border border-custom-gray-200 hover:custom-gray-200",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? (
                      format(date, "MMMM d, yyyy")
                    ) : (
                      <span>Pick a date</span>
                    )}

                    <img
                      className="w-3.5 h-auto"
                      src="/images/calendar.svg"
                      alt="calendar"
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1">
              <Label htmlFor={`phone_number-${lead.id}`}>Phone Number</Label>
              <Input
                className="h-8.5"
                id={`phone_number-${lead.id}`}
                value={formData.phone_number}
                onChange={(e) => onUpdateField("phone_number", e.target.value)}
              />
            </div>
          </div>

          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`marketing_source-${lead.id}`}>Source</Label>
              <Select
                value={formData.marketing_source}
                onValueChange={(value) =>
                  onUpdateField("marketing_source", value)
                }
              >
                <SelectTrigger className="w-full !h-8.5">
                  <SelectValue />

                  <img
                    className="w-3 h-auto"
                    src="/images/select-arrow.svg"
                    alt="select arrow"
                  />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {sourceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor={`lead_value-${lead.id}`}>Potential Value</Label>
              <Input
                className="h-8.5"
                id={`lead_value-${lead.id}`}
                value={formData.lead_value}
                onChange={(e) => onUpdateField("lead_value", e.target.value)}
                placeholder="$4,500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row 2xl:items-end gap-5 2xl:gap-7">
          <Textarea
            id={`additional_notes-${lead.id}`}
            value={formData.additional_notes}
            onChange={(e) => onUpdateField("additional_notes", e.target.value)}
            placeholder="Updated potential value to $4,500 on 5/25"
            className="w-full 2xl:w-[444px] h-[139px] resize-none"
          />

          <Button onClick={onSave} className="min-w-[132px] w-fit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
