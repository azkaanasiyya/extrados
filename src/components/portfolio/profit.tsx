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
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 10:15', views: 2500 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 11:30', views: 3200 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 13:45', views: 2600 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 15:00', views: 1800 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 16:20', views: 3500 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 17:40', views: 2550 },
    { date: "18 Oct", fullDate: 'Fri-18 Oct, 2021 18:55', views: 1500 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 09:00', views: 3000 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 10:25', views: 2650 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 11:50', views: 1900 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 13:10', views: 3400 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 14:35', views: 2600 },
    { date: "19 Oct", fullDate: 'Sat-19 Oct, 2021 15:55', views: 2550 },
    { date: "20 Oct", fullDate: 'Sun-20 Oct, 2021 08:30', views: 1700 },
    { date: "20 Oct", fullDate: 'Sun-20 Oct, 2021 09:45', views: 1600 },
    { date: "20 Oct", fullDate: 'Sun-20 Oct, 2021 11:00', views: 1800 },
    { date: "20 Oct", fullDate: 'Sun-20 Oct, 2021 12:32', views: 1550 },
    { date: "20 Oct", fullDate: 'Sun-20 Oct, 2021 14:05', views: 1750 },
    { date: "21 Oct", fullDate: 'Mon-21 Oct, 2021 09:15', views: 3450 },
    { date: "21 Oct", fullDate: 'Mon-21 Oct, 2021 10:30', views: 3500 },
    { date: "21 Oct", fullDate: 'Mon-21 Oct, 2021 12:00', views: 3200 },
    { date: "21 Oct", fullDate: 'Mon-21 Oct, 2021 13:40', views: 3350 },
    { date: "22 Oct", fullDate: 'Tue-22 Oct, 2021 08:50', views: 2800 },
    { date: "22 Oct", fullDate: 'Tue-22 Oct, 2021 10:10', views: 2100 },
    { date: "22 Oct", fullDate: 'Tue-22 Oct, 2021 11:30', views: 2500 },
    { date: "22 Oct", fullDate: 'Tue-22 Oct, 2021 13:00', views: 1900 },
    { date: "22 Oct", fullDate: 'Tue-22 Oct, 2021 14:20', views: 2550 },
    { date: "23 Oct", fullDate: 'Wed-23 Oct, 2021 09:30', views: 1500 },
    { date: "23 Oct", fullDate: 'Wed-23 Oct, 2021 10:50', views: 1600 },
    { date: "23 Oct", fullDate: 'Wed-23 Oct, 2021 12:15', views: 1550 },
    { date: "23 Oct", fullDate: 'Wed-23 Oct, 2021 13:35', views: 1650 },
    { date: "24 Oct", fullDate: 'Thu-24 Oct, 2021 08:00', views: 3000 },
    { date: "24 Oct", fullDate: 'Thu-24 Oct, 2021 09:20', views: 2900 },
    { date: "24 Oct", fullDate: 'Thu-24 Oct, 2021 10:45', views: 3100 },
    { date: "24 Oct", fullDate: 'Thu-24 Oct, 2021 12:05', views: 2950 },
    { date: "25 Oct", fullDate: 'Fri-25 Oct, 2021 09:50', views: 2550 },
    { date: "25 Oct", fullDate: 'Fri-25 Oct, 2021 11:10', views: 2600 },
    { date: "25 Oct", fullDate: 'Fri-25 Oct, 2021 12:30', views: 1800 },
    { date: "25 Oct", fullDate: 'Fri-25 Oct, 2021 14:00', views: 2500 },
    { date: "26 Oct", fullDate: 'Sat-26 Oct, 2021 08:45', views: 1950 },
    { date: "26 Oct", fullDate: 'Sat-26 Oct, 2021 10:05', views: 2650 },
    { date: "26 Oct", fullDate: 'Sat-26 Oct, 2021 11:25', views: 3000 },
    { date: "26 Oct", fullDate: 'Sat-26 Oct, 2021 12:55', views: 2550 },
    { date: "27 Oct", fullDate: 'Sun-27 Oct, 2021 09:10', views: 2500 },
    { date: "27 Oct", fullDate: 'Sun-27 Oct, 2021 10:30', views: 1900 },
    { date: "27 Oct", fullDate: 'Sun-27 Oct, 2021 11:50', views: 2600 },
    { date: "27 Oct", fullDate: 'Sun-27 Oct, 2021 13:10', views: 2550 },
    { date: "28 Oct", fullDate: 'Mon-28 Oct, 2021 08:00', views: 3000 },
    { date: "28 Oct", fullDate: 'Mon-28 Oct, 2021 09:20', views: 2600 },
    { date: "28 Oct", fullDate: 'Mon-28 Oct, 2021 10:40', views: 1500 },
    { date: "28 Oct", fullDate: 'Mon-28 Oct, 2021 12:00', views: 2500 },
    { date: "29 Oct", fullDate: 'Tue-29 Oct, 2021 09:30', views: 2550 },
    { date: "29 Oct", fullDate: 'Tue-29 Oct, 2021 11:00', views: 3000 },
    { date: "29 Oct", fullDate: 'Tue-29 Oct, 2021 12:30', views: 1900 },
    { date: "29 Oct", fullDate: 'Tue-29 Oct, 2021 14:00', views: 2600 },
    { date: "30 Oct", fullDate: 'Wed-30 Oct, 2021 08:50', views: 2500 },
    { date: "30 Oct", fullDate: 'Wed-30 Oct, 2021 10:10', views: 1900 },
    { date: "30 Oct", fullDate: 'Wed-30 Oct, 2021 11:30', views: 3000 },
    { date: "30 Oct", fullDate: 'Wed-30 Oct, 2021 12:50', views: 2550 },
    { date: "31 Oct", fullDate: 'Thu-31 Oct, 2021 09:45', views: 2600 },
    { date: "31 Oct", fullDate: 'Thu-31 Oct, 2021 11:05', views: 2500 },
    { date: "31 Oct", fullDate: 'Thu-31 Oct, 2021 12:25', views: 1950 },
    { date: "31 Oct", fullDate: 'Thu-31 Oct, 2021 13:45', views: 2700 },
    { date: "1 Nov", fullDate: 'Fri-1 Nov, 2021 08:30', views: 2550 },
    { date: "1 Nov", fullDate: 'Fri-1 Nov, 2021 09:50', views: 2650 },
    { date: "1 Nov", fullDate: 'Fri-1 Nov, 2021 11:10', views: 1700 },
    { date: "1 Nov", fullDate: 'Fri-1 Nov, 2021 12:30', views: 2500 },
    { date: "2 Nov", fullDate: 'Sat-2 Nov, 2021 09:00', views: 3000 },
    { date: "2 Nov", fullDate: 'Sat-2 Nov, 2021 10:20', views: 2550 },
    { date: "2 Nov", fullDate: 'Sat-2 Nov, 2021 11:40', views: 1500 },
    { date: "2 Nov", fullDate: 'Sat-2 Nov, 2021 13:00', views: 2650 },
    { date: "3 Nov", fullDate: 'Sun-3 Nov, 2021 08:45', views: 2500 },
    { date: "3 Nov", fullDate: 'Sun-3 Nov, 2021 10:05', views: 2600 },
    { date: "3 Nov", fullDate: 'Sun-3 Nov, 2021 11:25', views: 1950 },
    { date: "3 Nov", fullDate: 'Sun-3 Nov, 2021 12:45', views: 3000 },
    { date: "4 Nov", fullDate: 'Mon-4 Nov, 2021 09:15', views: 2550 },
    { date: "4 Nov", fullDate: 'Mon-4 Nov, 2021 10:35', views: 1800 },
    { date: "4 Nov", fullDate: 'Mon-4 Nov, 2021 11:55', views: 2600 },
    { date: "4 Nov", fullDate: 'Mon-4 Nov, 2021 13:15', views: 2500 },
    { date: "5 Nov", fullDate: 'Tue-5 Nov, 2021 08:00', views: 3000 },
    { date: "5 Nov", fullDate: 'Tue-5 Nov, 2021 09:20', views: 2550 },
    { date: "5 Nov", fullDate: 'Tue-5 Nov, 2021 10:40', views: 1950 },
    { date: "5 Nov", fullDate: 'Tue-5 Nov, 2021 12:00', views: 2650 },
    { date: "6 Nov", fullDate: 'Wed-6 Nov, 2021 08:45', views: 2500 },
    { date: "6 Nov", fullDate: 'Wed-6 Nov, 2021 10:05', views: 2600 },
    { date: "6 Nov", fullDate: 'Wed-6 Nov, 2021 11:25', views: 3000 },
    { date: "6 Nov", fullDate: 'Wed-6 Nov, 2021 12:45', views: 1700 },
    { date: "7 Nov", fullDate: 'Thu-7 Nov, 2021 09:10', views: 2550 },
    { date: "7 Nov", fullDate: 'Thu-7 Nov, 2021 10:30', views: 3000 },
    { date: "7 Nov", fullDate: 'Thu-7 Nov, 2021 11:50', views: 1950 },
    { date: "7 Nov", fullDate: 'Thu-7 Nov, 2021 13:10', views: 2500 },
    { date: "8 Nov", fullDate: 'Fri-8 Nov, 2021 08:00', views: 2650 },
    { date: "8 Nov", fullDate: 'Fri-8 Nov, 2021 09:20', views: 2550 },
    { date: "8 Nov", fullDate: 'Fri-8 Nov, 2021 10:40', views: 1500 },
    { date: "8 Nov", fullDate: 'Fri-8 Nov, 2021 12:00', views: 2700 },
    { date: "9 Nov", fullDate: 'Sat-9 Nov, 2021 09:30', views: 2500 },
    { date: "9 Nov", fullDate: 'Sat-9 Nov, 2021 11:00', views: 2600 },
    { date: "9 Nov", fullDate: 'Sat-9 Nov, 2021 12:30', views: 1950 },
    { date: "9 Nov", fullDate: 'Sat-9 Nov, 2021 14:00', views: 3000 },
    { date: "10 Nov", fullDate: 'Sun-10 Nov, 2021 08:50', views: 2550 },
    { date: "10 Nov", fullDate: 'Sun-10 Nov, 2021 10:10', views: 1900 },
    { date: "10 Nov", fullDate: 'Sun-10 Nov, 2021 11:30', views: 2600 },
    { date: "10 Nov", fullDate: 'Sun-10 Nov, 2021 12:50', views: 2500 },
  ];

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const dataPoint = chartData.find(
        d => d.date === label && d.views === payload[0].value
      );

      const formattedViews = dataPoint ? `$${dataPoint.views.toLocaleString()}` : 'N/A';
      const formattedDate = dataPoint ? dataPoint.fullDate : label;

      return (
        <div className="bg-white-neutral-800 px-2 py-1 rounded-[8px] border border-white-neutral-700 backdrop-blur-lg">
            <p className="text-[12px] leading-[165%] font-semibold text-base-white">{formattedViews}</p>
            <p className="text-[12px] leading-[165%] font-medium text-white-neutral-400">{formattedDate}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-4 h-[306px]">
      <CardHeader className="flex flex-col items-stretch w-full">
        <div className="flex flex-row justify-between w-full items-center">
          <span className="text-[16px] leading-[160%] font-medium text-base-white">Profit & Loss</span>
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
            <defs>
              <pattern id="dotted-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#FFFFFF14" />
              </pattern>
            </defs>
            <CartesianGrid
              stroke="none"
              fill="url(#dotted-pattern)"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickCount={3}
              minTickGap={90}
              tick={{ fill: '#FFFFFF66', fontSize: 12 }}
            />
            <YAxis dataKey="views" tickLine={false} axisLine={false} tick={{fill: '#FFFFF666', fontSize: 12}} domain={[1400, 3600]} tickFormatter={(views) => `$${views.toLocaleString()}`} /> 
            <ChartTooltip content={<CustomTooltip />} cursor={false}/>
            <Bar dataKey="views" fill="#947FFF" activeBar={{ fill: '#D8D4FF' }} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}