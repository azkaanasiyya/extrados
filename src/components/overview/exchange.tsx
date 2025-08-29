"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import type { ChartConfig } from '@/components/ui/chart';

export const description = "An interactive bar chart"

const chartConfig = {
  views: {
    label: "Sales",
    color: "#26DBC9",
  },
} satisfies ChartConfig

export function ExchangeOver() {
  const chartData = [
    { date: "12 Aug", views: 222 },
    { date: "13 Aug", views: 97 },
    { date: "14 Aug", views: 184 },
    { date: "15 Aug", views: 145 },
    { date: "16 Aug", views: 310 },
    { date: "17 Aug", views: 201 },
    { date: "18 Aug", views: 156 },
    { date: "19 Aug", views: 267 },
    { date: "20 Aug", views: 142 },
    { date: "21 Aug", views: 389 },
    { date: "22 Aug", views: 174 },
    { date: "23 Aug", views: 251 },
    { date: "24 Aug", views: 133 },
    { date: "25 Aug", views: 298 },
    { date: "26 Aug", views: 185 },
    { date: "27 Aug", views: 240 },
    { date: "28 Aug", views: 119 },
    { date: "29 Aug", views: 311 },
    { date: "30 Aug", views: 205 },
    { date: "31 Aug", views: 274 },
    { date: "1 Sep", views: 188 },
    { date: "2 Sep", views: 342 },
    { date: "3 Sep", views: 159 },
    { date: "4 Sep", views: 242 },
    { date: "5 Sep", views: 267 },
    { date: "6 Sep", views: 194 },
    { date: "7 Sep", views: 328 },
    { date: "8 Sep", views: 211 },
    { date: "9 Sep", views: 175 },
    { date: "10 Sep", views: 356 },
    { date: "11 Sep", views: 223 },
    { date: "12 Sep", views: 373 },
    ];

  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0">
      <CardHeader className="flex flex-col items-stretch w-full pb-4">
        <div className="flex flex-row justify-between w-full items-center">
            <span className="text-[16px] leading-[160%] font-medium text-base-white">Exchange Over</span>
            <div className="flex flex-row gap-1 items-center">
                <span className="text-[16px] leading-[160%] font-bold text-base-white">$291.20</span>
                <span className="text-[12px] leading-[165%] font-medium text-success-400">(+40.8%)</span>
            </div>
        </div>
      </CardHeader>
      <CardContent className="px-5"   >
        <ChartContainer
          config={chartConfig}
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            barSize={3}
            barGap={2}
          >
            <Bar dataKey={"views"} fill="#26DBC9" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickCount={3}
              minTickGap={90}
              tick={{ fill: '#FFFFFF66', fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('id-ID', {
                  day: "numeric",
                  month: "short",
                })
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
