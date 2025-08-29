"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", desktop: 1000, mobile: 680, tablet: 400, others: 400 }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FFFFFF33",
  },
  mobile: {
    label: "Mobile",
    color: "#26DBC9",
  },
  tablet: {
    label: "Tablet",
    color: "#54B2E7",
  },
  others: {
    label: "Others",
    color: "#947FFF",
  }
} satisfies ChartConfig

export function PoolComposition() {
  const outerRadius = 150;
  const innerRadius = 100;

  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0 h-[240px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[16px] leading-[160%] text-base-white font-medium">Pool Composition</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-[178px] flex flex-col justify-center items-center">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            cy={outerRadius}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 45}
                          className="text-[12px] leading-[165%] fill-white-neutral-500 font-medium"
                        >
                          Total Liquidity
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 18}
                          className="text-[24px] leading-[140%] font-bold fill-base-white"
                        >
                          $169,7M
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="tablet"
              fill="var(--color-tablet)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="others"
              fill="var(--color-others)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
