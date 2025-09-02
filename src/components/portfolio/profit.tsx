"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, type TooltipProps } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

import type { ChartConfig } from '@/components/ui/chart';
import { Button } from "../ui/button";
import { useState } from "react";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export const description = "An interactive bar chart"

const chartConfig = {
  views: {
    label: "Sales",
    color: "#947FFF",
  },
} satisfies ChartConfig

export function Profit() {
    const [activeTime, setActiveTime] = useState('1W');
    const chartData = [
        { date: "18 Oct", views: 2500 },
        { date: "18 Oct", views: 3200 },
        { date: "18 Oct", views: 2600 },
        { date: "18 Oct", views: 1800 },
        { date: "18 Oct", views: 3500 },
        { date: "18 Oct", views: 2550 },
        { date: "18 Oct", views: 1500 },
        { date: "19 Oct", views: 3000 },
        { date: "19 Oct", views: 2650 },
        { date: "19 Oct", views: 1900 },
        { date: "19 Oct", views: 3400 },
        { date: "19 Oct", views: 2600 },
        { date: "19 Oct", views: 2550 },
        { date: "20 Oct", views: 1700 },
        { date: "20 Oct", views: 1600 },
        { date: "20 Oct", views: 1800 },
        { date: "20 Oct", views: 1550 },
        { date: "20 Oct", views: 1750 },
        { date: "21 Oct", views: 3450 },
        { date: "21 Oct", views: 3500 },
        { date: "21 Oct", views: 3200 },
        { date: "21 Oct", views: 3350 },
        { date: "22 Oct", views: 2800 },
        { date: "22 Oct", views: 2100 },
        { date: "22 Oct", views: 2500 },
        { date: "22 Oct", views: 1900 },
        { date: "22 Oct", views: 2550 },
        { date: "23 Oct", views: 1500 },
        { date: "23 Oct", views: 1600 },
        { date: "23 Oct", views: 1550 },
        { date: "23 Oct", views: 1650 },
        { date: "24 Oct", views: 3000 },
        { date: "24 Oct", views: 2900 },
        { date: "24 Oct", views: 3100 },
        { date: "24 Oct", views: 2950 },
        { date: "25 Oct", views: 2550 },
        { date: "25 Oct", views: 2600 },
        { date: "25 Oct", views: 1800 },
        { date: "25 Oct", views: 2500 },
        { date: "26 Oct", views: 1950 },
        { date: "26 Oct", views: 2650 },
        { date: "26 Oct", views: 3000 },
        { date: "26 Oct", views: 2550 },
        { date: "27 Oct", views: 2500 },
        { date: "27 Oct", views: 1900 },
        { date: "27 Oct", views: 2600 },
        { date: "27 Oct", views: 2550 },
        { date: "28 Oct", views: 3000 },
        { date: "28 Oct", views: 2600 },
        { date: "28 Oct", views: 1500 },
        { date: "28 Oct", views: 2500 },
        { date: "29 Oct", views: 2550 },
        { date: "29 Oct", views: 3000 },
        { date: "29 Oct", views: 1900 },
        { date: "29 Oct", views: 2600 },
        { date: "30 Oct", views: 2500 },
        { date: "30 Oct", views: 1900 },
        { date: "30 Oct", views: 3000 },
        { date: "30 Oct", views: 2550 },
        { date: "31 Oct", views: 2600 },
        { date: "31 Oct", views: 2500 },
        { date: "31 Oct", views: 1950 },
        { date: "31 Oct", views: 2700 },
        { date: "1 Nov", views: 2550 },
        { date: "1 Nov", views: 2650 },
        { date: "1 Nov", views: 1700 },
        { date: "1 Nov", views: 2500 },
        { date: "2 Nov", views: 3000 },
        { date: "2 Nov", views: 2550 },
        { date: "2 Nov", views: 1500 },
        { date: "2 Nov", views: 2650 },
        { date: "3 Nov", views: 2500 },
        { date: "3 Nov", views: 2600 },
        { date: "3 Nov", views: 1950 },
        { date: "3 Nov", views: 3000 },
        { date: "4 Nov", views: 2550 },
        { date: "4 Nov", views: 1800 },
        { date: "4 Nov", views: 2600 },
        { date: "4 Nov", views: 2500 },
        { date: "5 Nov", views: 3000 },
        { date: "5 Nov", views: 2550 },
        { date: "5 Nov", views: 1950 },
        { date: "5 Nov", views: 2650 },
        { date: "6 Nov", views: 2500 },
        { date: "6 Nov", views: 2600 },
        { date: "6 Nov", views: 3000 },
        { date: "6 Nov", views: 1700 },
        { date: "7 Nov", views: 2550 },
        { date: "7 Nov", views: 3000 },
        { date: "7 Nov", views: 1950 },
        { date: "7 Nov", views: 2500 },
        { date: "8 Nov", views: 2650 },
        { date: "8 Nov", views: 2550 },
        { date: "8 Nov", views: 1500 },
        { date: "8 Nov", views: 2700 },
        { date: "9 Nov", views: 2500 },
        { date: "9 Nov", views: 2600 },
        { date: "9 Nov", views: 1950 },
        { date: "9 Nov", views: 3000 },
        { date: "10 Nov", views: 2550 },
        { date: "10 Nov", views: 1900 },
        { date: "10 Nov", views: 2600 },
        { date: "10 Nov", views: 2500 },
        ];

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const dataPoint = [...chartData].find(
        d => d.date === label && d.views === payload[0].value
      );
      const formattedPrice = dataPoint ? `$${dataPoint.views}.00` : 'N/A';

      return (
      <div className='bg-neutral-800 rounded-[8px]'>
        <div className="bg-white-neutral-800 px-2 py-1 rounded-[8px] border border-white-neutral-700">
          <p className="text-[12px] leading-[165%] font-semibold text-base-white">{formattedPrice}</p>
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-400">{label}</p>
        </div>
      </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-4 h-[306px]">
      <CardHeader className="flex flex-col items-stretch w-full">
        <div className="flex flex-row justify-between w-full items-center">
            <span className="text-[16px] leading-[160%] font-medium text-base-white">Sales Statistic</span>
            <div className="flex flex-row items-center">
                    {['1H', '1D', '1W', '1M', '1Y'].map((time) => (
                        <Button
                            key={time}
                            onClick={() => setActiveTime(time)}
                            variant="overview"
                            size="small"
                            className={`text-[12px] leading-[165%] cursor-pointer ${
                                activeTime === time ? 'bg-white-neutral-900 hover:bg-white-neutral-800 text-white' : 'bg-transparent text-white-neutral-500 hover:bg-white-neutral-800'
                            }`}
                        >
                            {time}
                        </Button>
                    ))}
                </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[224px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            barSize={3}
            barGap={0}
            className="w-full"
            margin={{left:0, right:0}}
          >
            <CartesianGrid vertical={false} horizontal={false}/>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickCount={3}
              minTickGap={90}
              tick={{ fill: '#FFFFFF66', fontSize: 12 }}
            />
            <YAxis dataKey="views" tickLine={false} axisLine={false} tick={{fill: '#FFFFF666', fontSize: 12}} domain={[1400, 3600]} tickFormatter={(views) => `$${views.toLocaleString()}`} /> 
            <ChartTooltip content={<CustomTooltip />} />
            <Bar dataKey="views" fill="#947FFF" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
