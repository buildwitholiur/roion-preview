import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { matchChartConfig, matchChartData } from "@/data/matchChartData";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const HomeMatchStatChart = () => {
  return (
    <div className="flex-1 bg-custom-white p-5 md:pt-7 rounded-lg border border-custom-gray-100 custom__shadow">
      <div className="w-full max-w-[800px] mx-auto md:pt-17 md:px-8 relative space-y-5 md:space-y-0">
        <div className="md:absolute md:top-0 md:left-9 md:z-20 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
          <div className="space-y-3">
            <h3 className="text-font-24 font-normal text-custom-black">
              Match Rate
            </h3>

            <h4 className="font-medium text-font-40 md:text-font-48 text-custom-blue inline-block bg-custom-white pr-3">
              17%
            </h4>
          </div>

          <p className="text-custom-gray-400/70">
            % of IntentOI leads that
            <span className="block">became matched cases</span>
          </p>
        </div>

        <ChartContainer
          config={matchChartConfig}
          className="w-full h-[120px] md:h-[160px]"
        >
          <LineChart accessibilityLayer data={matchChartData}>
            <CartesianGrid vertical={false} stroke="#cbd5e1" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              height={0}
            />

            <YAxis
              ticks={[0, 2, 4]}
              tickLine={false}
              axisLine={false}
              width={0}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="intentOI"
              type="monotone"
              stroke="#2E3192"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="matchedCases"
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

export default HomeMatchStatChart;
