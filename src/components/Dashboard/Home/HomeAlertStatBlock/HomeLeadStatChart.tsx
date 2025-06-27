import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { leadChartConfig, leadChartData } from "@/data/leadChartData";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const HomeLeadStatChart = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile);

  return (
    <div className="flex-1 bg-custom-white p-5 rounded-lg border border-custom-gray-100 custom__shadow">
      <div className="w-full max-w-[800px] mx-auto md:pt-5 overflow-auto">
        <h3 className="text-font-24 font-normal text-custom-black md:ml-7 mb-5">
          Total Leads <span className="text-custom-blue">-</span> Total Cases
          Matched
        </h3>

        <ChartContainer
          config={leadChartConfig}
          className="w-full h-[150px] md:h-[210px]"
        >
          <LineChart
            accessibilityLayer
            data={leadChartData}
            margin={{
              top: 20,
              right: isMobile ? 10 : 20,
              bottom: isMobile ? 20 : 40,
              left: isMobile ? 10 : 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#cbd5e1" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              tick={{ fontSize: isMobile ? 12 : 18, fontWeight: 400 }}
              tickFormatter={(value) => value.slice(0, 3)}
              height={isMobile ? 0 : 30}
            />

            <YAxis
              ticks={[0, 2, 4]}
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              stroke="#2e3192"
              tick={{ fontSize: isMobile ? 12 : 18 }}
              width={isMobile ? 0 : 60}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="totalLeads"
              type="monotone"
              stroke="#2E3192"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="totalCasesMatched"
              type="monotone"
              stroke="#14ae5c"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default HomeLeadStatChart;
