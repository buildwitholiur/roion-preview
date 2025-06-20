import { sourceSelectOptions } from "@/data/selectOptions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const DashboardNavigation = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 md:gap-8">
      <h1 className="text-custom-teal-100 text-font-32 font-bold">
        Foryourrights.com
      </h1>

      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <div className="flex flex-col md:flex-row md:items-center gap-2.5">
          <p className="text-font-18">Filter by Channel:</p>

          <Select defaultValue={sourceSelectOptions[0]}>
            <SelectTrigger className="w-full md:w-fit md:min-w-[201px]">
              <SelectValue placeholder="Google My Business" />

              <img
                className="w-3 h-auto"
                src="/images/select-arrow.svg"
                alt="select arrow"
              />
            </SelectTrigger>
            <SelectContent>
              {sourceSelectOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2.5 focus-visible:outline-0">
            <p className="text-custom-blue-500 text-font-18">
              Stats for Last 30 Days
            </p>
            <img
              className="w-4.5 h-auto"
              src="/images/filter.svg"
              alt="filter"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuItem>Stats for Last 7 Days</DropdownMenuItem>
            <DropdownMenuItem>Stats for Last 30 Days</DropdownMenuItem>
            <DropdownMenuItem>Stats for Last 3 Months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardNavigation;
