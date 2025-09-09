"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { motion } from "framer-motion"

import ChartBackground from "@/assets/overview/background.svg?react"
import ChartUngu from "@/assets/overview/purple.svg?react"
import ChartBiru from "@/assets/overview/blue.svg?react"
import ChartHijau from "@/assets/overview/green.svg?react"
import Gradient from "@/assets/overview/bgradient.svg?react"

export function GreedIndex() {
  return (
    <Card className="bg-white-neutral-900 border border-white-neutral-800 rounded-[12px] w-full gap-0 h-full max-h-[240px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[16px] leading-[160%] text-base-white font-medium">
          Greed Index
        </CardTitle>
      </CardHeader>

      <CardContent className="relative w-full flex flex-col justify-center items-center">
        <div className="w-[250px] h-[130px] relative">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }} 
          >
            <ChartBackground />
          </motion.div>

          <motion.div
            className="absolute top-15.5 left-[-3px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ChartUngu />
          </motion.div>
          
          <motion.div
            className="absolute top-4.5 left-4.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <ChartBiru />
          </motion.div>
          
          <motion.div
            className="absolute left-16 top-[-1px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <ChartHijau />
          </motion.div>
            
          <motion.div
            className="absolute top-6 left-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "backIn" }}
          >
            <Gradient  />
          </motion.div>
          
          <div className="absolute top-13 left-23.5 flex flex-col items-center justify-center gap-0.5">
            <span className="text-[12px] leading-[165%] font-medium text-center text-white-neutral-500">Greed</span>
            <span className="text-[24px] leading-[140%] font-bold text-center text-base-white">75%</span>
            <span className="text-[12px] leading-[165%] font-medium text-center text-success-500">+8.3%</span>
          </div>
        </div>
      </CardContent>

      <CardContent className="flex flex-row w-full justify-between items-center pt-2 px-[42px]">
        <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">
          Index: 0
        </p>
        <p className="text-[12px] leading-[165%] font-medium text-white-neutral-500">
          Index: 100%
        </p>
      </CardContent>
    </Card>
  )
}