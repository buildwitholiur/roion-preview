import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { intakeChartConfig, intakeChartData } from "@/data/intakeChartData";
import { Pie, PieChart } from "recharts";

const IntakeSourceChart = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-2.5 border-b border-custom-blue-50">
      <div className="flex-1 space-y-2.5">
        <h4 className="text-font-18 font-semibold text-custom-gray-500">
          Lead Source Breakdown
        </h4>

        <ul className="flex flex-col">
          {intakeChartData.map((item) => (
            <li
              key={item.name}
              className={`text-font-24 font-bold py-2.5 border-b last-of-type:border-b-0 first-of-type:pt-0 border-custom-blue-50`}
              style={{ color: item.textColor }}
            >
              {intakeChartConfig[item.name].label} {item.value}%
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-[302px] h-[200px] md:h-auto relative">
        <ChartContainer
          config={intakeChartConfig}
          className="mx-auto aspect-square h-[206px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={intakeChartData}
              dataKey="value"
              nameKey="name"
              innerRadius={34}
            />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default IntakeSourceChart;
