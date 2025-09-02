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

const chartData = [{ month: "january", bitcoin: 400, ethereum: 400, ripple: 680, others: 1000 }]

const chartConfig = {
  bitcoin: {
    label: "Bitcoin",
    color: "#947FFF", 
  },
  ethereum: {
    label: "Ethereum",
    color: "#54B2E7", 
  },
  ripple: {
    label: "Ripple",
    color: "#26DBC9",
  },
  others: {
    label: "Others",
    color: "#FFFFFF33",
  }
} satisfies ChartConfig

export function GreedIndex() {
    const outerRadius = 150;
    const innerRadius = 100;

  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0 h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[16px] leading-[160%] text-base-white font-medium">Greed Index</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col justify-center items-center">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <RadialBarChart
            data={chartData}
            cy={outerRadius}
            startAngle={180}
            endAngle={0}
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
                          Greed
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 18}
                          className="text-[24px] leading-[140%] font-bold fill-base-white"
                        >
                          75%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0)}
                          className="text-[12px] leading-[165%] fill-success-500 font-medium"
                        >
                          +8.3%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="bitcoin"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-bitcoin)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="ethereum"
              fill="var(--color-ethereum)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="ripple"
              fill="var(--color-ripple)"
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