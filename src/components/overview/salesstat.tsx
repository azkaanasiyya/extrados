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

const chartConfig = {
  views: {
    label: "Sales",
    color: "#947FFF",
  },
} satisfies ChartConfig

const chartData = [
    { "date": "2024-08-12", "views": 222 },
    { "date": "2024-08-13", "views": 97 },
    { "date": "2024-08-14", "views": 184 },
    { "date": "2024-08-15", "views": 145 },
    { "date": "2024-08-16", "views": 310 },
    { "date": "2024-08-17", "views": 201 },
    { "date": "2024-08-18", "views": 156 },
    { "date": "2024-08-19", "views": 267 },
    { "date": "2024-08-20", "views": 142 },
    { "date": "2024-08-21", "views": 389 },
    { "date": "2024-08-22", "views": 174 },
    { "date": "2024-08-23", "views": 251 },
    { "date": "2024-08-24", "views": 133 },
    { "date": "2024-08-25", "views": 298 },
    { "date": "2024-08-26", "views": 185 },
    { "date": "2024-08-27", "views": 240 },
    { "date": "2024-08-28", "views": 119 },
    { "date": "2024-08-29", "views": 311 },
    { "date": "2024-08-30", "views": 205 },
    { "date": "2024-08-31", "views": 274 },
    { "date": "2024-09-01", "views": 188 },
    { "date": "2024-09-02", "views": 342 },
    { "date": "2024-09-03", "views": 159 },
    { "date": "2024-09-04", "views": 242 },
    { "date": "2024-09-05", "views": 267 },
    { "date": "2024-09-06", "views": 194 },
    { "date": "2024-09-07", "views": 328 },
    { "date": "2024-09-08", "views": 211 },
    { "date": "2024-09-09", "views": 175 },
    { "date": "2024-09-10", "views": 356 },
    { "date": "2024-09-11", "views": 223 },
    { "date": "2024-09-12", "views": 373 }
];

export function SalesStatistic() {
  
  return (
    <Card className="bg-white-neutral-900 flex flex-col items-center justify-center border border-white-neutral-800 py-0 rounded-[12px] w-full gap-0">
      <CardHeader className="flex flex-col items-stretch w-full pt-5 pb-4">
        <div className="flex flex-row justify-between w-full items-center">
            <span className="text-[16px] leading-[160%] font-medium text-base-white">Sales Statistic</span>
            <div className="flex flex-row gap-1 items-center">
                <span className="text-[16px] leading-[160%] font-bold text-base-white">$869.56</span>
                <span className="text-[12px] leading-[165%] font-medium text-success-400">(+40.8%)</span>
            </div>
        </div>
      </CardHeader>
      <CardContent className="px-5"> 
        <ChartContainer config={chartConfig} className="max-h-[177px]">
          <BarChart 
            accessibilityLayer 
            data={chartData}
            barSize={3}
            barGap={2}
            >
              <Bar dataKey={"views"} fill="#947FFF" />
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