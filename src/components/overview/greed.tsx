"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ChartBase from "@/assets/connect/greed.svg?react"

export function GreedIndex() {
  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0 h-full max-h-[240px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[16px] leading-[160%] text-base-white font-medium">
          Greed Index
        </CardTitle>
      </CardHeader>
      <CardContent className="relative w-full flex flex-col justify-center items-center">
        <ChartBase className="w-[250px] h-[130px]" />
      </CardContent>
      <CardContent className="flex flex-row w-full justify-between items-center pt-2 px-[42px]">
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">Index: 0</p>
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">Index: 100%</p>
      </CardContent>
    </Card>
  )
}
