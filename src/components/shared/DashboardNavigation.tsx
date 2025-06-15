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
    <div className="flex items-center justify-between">
      <h1 className="text-custom-teal-100 text-font-32 font-bold">
        Foryourrights.com
      </h1>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2.5">
          <p className="text-font-18">Filter by Channel:</p>

          <Select>
            <SelectTrigger className="w-[201px] !h-9.5 bg-custom-white text-custom-gray-700 !text-font-16 font-medium rounded-sm border-custom-gray-200 focus-visible:border-custom-gray-200 pl-5 pr-[13px]">
              <SelectValue placeholder="Google My Business" />

              <img
                className="w-3 h-auto"
                src="/images/select-arrow.svg"
                alt="select arrow"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="channel1">Channel 1</SelectItem>
              <SelectItem value="channel2">Channel 2</SelectItem>
              <SelectItem value="channel3">Channel 3</SelectItem>
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
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardNavigation;
