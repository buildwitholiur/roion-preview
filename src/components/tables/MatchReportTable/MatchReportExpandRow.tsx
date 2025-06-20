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
import type { MatchReportExpandRowProps } from "@/types/types";

export function MatchReportExpandRow({
  report,
  formData,
  onUpdateField,
  onSave,
}: MatchReportExpandRowProps) {
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
      <div className="flex flex-col 2xl:flex-row gap-10">
        <div className="flex-1 grid grid-cols-1 2xl:grid-cols-3 gap-4 md:gap-6">
          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`firstName-${report.id}`}>First Name</Label>
              <Input
                className="h-8.5"
                id={`firstName-${report.id}`}
                value={formData.firstName}
                onChange={(e) => onUpdateField("firstName", e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor={`lastName-${report.id}`}>Last Name</Label>
              <Input
                className="h-8.5"
                id={`lastName-${report.id}`}
                value={formData.lastName}
                onChange={(e) => onUpdateField("lastName", e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor={`matching_source-${report.id}`}>
                Matching Source
              </Label>
              <Input
                className="h-8.5"
                id={`matching_source-${report.id}`}
                value={formData.matching_source}
                onChange={(e) =>
                  onUpdateField("matching_source", e.target.value)
                }
              />
            </div>
          </div>

          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`date-${report.id}`}>Date</Label>

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
              <Label htmlFor={`phone_number-${report.id}`}>Phone Number</Label>
              <Input
                className="h-8.5"
                id={`phone_number-${report.id}`}
                value={formData.phone_number}
                onChange={(e) => onUpdateField("phone_number", e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor={`actual_value-${report.id}`}>Actual Value</Label>
              <Input
                className="h-8.5"
                id={`actual_value-${report.id}`}
                value={formData.actual_value}
                onChange={(e) => onUpdateField("actual_value", e.target.value)}
              />
            </div>
          </div>

          <div className="2xl:space-y-6 grid grid-cols-2 2xl:block gap-5">
            <div className="space-y-1">
              <Label htmlFor={`intent_source-${report.id}`}>
                Intent OI Source
              </Label>
              <Select
                value={formData.intent_source}
                onValueChange={(value) => onUpdateField("intent_source", value)}
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
              <Label htmlFor={`real_source-${report.id}`}>Real Source</Label>
              <Select
                value={formData.real_source}
                onValueChange={(value) => onUpdateField("real_source", value)}
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
              <Label htmlFor={`potential_value-${report.id}`}>
                Potential Value
              </Label>
              <Input
                className="h-8.5"
                id={`potential_value-${report.id}`}
                value={formData.potential_value}
                onChange={(e) =>
                  onUpdateField("potential_value", e.target.value)
                }
              />
            </div>
          </div>

          <div className="col-span-3">
            <Textarea
              id={`additional_notes-${report.id}`}
              value={formData.additional_notes}
              onChange={(e) =>
                onUpdateField("additional_notes", e.target.value)
              }
              placeholder="Updated potential value to $4,500 on 5/25"
              className="w-full h-[139px] resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 2xl:gap-7 w-full max-w-[600px] whitespace-normal pb-9">
          <div className="space-y-2.5">
            <h5 className="text-font-18 font-medium text-custom-blue-300">
              History
            </h5>

            <ul className="space-y-2.5 max-h-[234px] overflow-y-auto">
              {report.history ? (
                report.history.map((entry, index) => (
                  <li
                    key={index}
                    className="text-font-18 font-medium text-custom-gray-600"
                  >
                    {entry.date} - {entry.action}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500">No history available</li>
              )}
            </ul>
          </div>

          <Button onClick={onSave} className="min-w-[132px] w-fit ml-auto">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
