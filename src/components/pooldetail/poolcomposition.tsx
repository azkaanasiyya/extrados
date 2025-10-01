"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"

import ChartUngu from "@/assets/overview/purple.svg?react"
import ChartBiru from "@/assets/overview/blue.svg?react"
import ChartHijau from "@/assets/overview/green.svg?react"
import Gradient from "@/assets/overview/bgradient.svg?react"
import ChartCoba from "@/assets/overview/chartCoba.svg?react"

export function PoolComposition() {
  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0 h-[240px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[16px] leading-[160%] text-base-white font-medium">Pool Composition</CardTitle>
      </CardHeader>
      <CardContent className="relative w-full flex flex-col justify-center items-center">
        <div className="w-[250px] h-[130px] relative">
          <motion.div
            className="absolute top-15.5 left-[-3px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }} 
          >
            <ChartCoba />
          </motion.div>

          <motion.div
            className="absolute top-15.5 left-[-3px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ChartUngu />
          </motion.div>
          
          <motion.div
            className="absolute top-4.5 left-4.5 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <ChartBiru />
          </motion.div>
          
          <motion.div
            className="absolute left-16 top-[-1px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <ChartHijau />
          </motion.div>
            
          <motion.div
            className="absolute top-6 left-5 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "backIn" }}
          >
            <Gradient  />
          </motion.div>
          
          <motion.div
            className="absolute top-14 left-18 flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "backIn" }}
          >
            <span className="text-[12px] leading-[165%] font-medium text-center text-white-neutral-500">Total Liquidity</span>
            <span className="text-[24px] leading-[140%] font-bold text-center text-base-white">$169,7M</span>
          </motion.div>
        </div>
      </CardContent>
      <CardContent className="flex flex-row w-full justify-between items-center pt-2 px-[42px]">
        <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">
          USDC: 21.19%
        </p>
        <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">
          ETH: 78.81%
        </p>
      </CardContent>
    </Card>
  )
}
