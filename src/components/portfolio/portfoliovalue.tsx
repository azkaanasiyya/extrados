"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';

const portfolioData = [
    { date: '18 Oct', balance: 5 },
    { date: '19 Oct', balance: 0 },
    { date: '20 Oct', balance: 10 },
    { date: '21 Oct', balance: 5 },
    { date: '22 Oct', balance: -10 },
    { date: '23 Oct', balance: 20 },
    { date: '24 Oct', balance: 10 },
];

const PortfolioValue = () => {
    const [activeTime, setActiveTime] = useState('1W');

    const chartConfig: ChartConfig = {
        balance: {
            label: 'Balance',
            color: '#ffff',
        },
    };

    return (
        <Card className="bg-white-neutral-800 bg-[url('/src/assets/overview/chart.png')] bg-no-repeat bg-cover bg-bottom text-white border-none shadow-none w-full h-full">
            <CardHeader className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col items-start gap-[2px] border-b pb-[7px] border-base-white text-base-white">
                        <span className="text-[12px] leading-[165%] text-base-white">Portfolio Value</span>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className="text-[24px] leading-[140%] font-bold">$2,500.75</span>
                            <div className='flex flex-row gap-1 items-center'>
                                <TrendingUp className="size-4 text-success-500" />
                                <span className="text-[12px] leading-[165%] font-bold text-success-500">6.4%</span>
                            </div>
                        </div>
                    </div>
                </div>
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
            </CardHeader>
            <CardContent className="w-full">
                <ChartContainer config={chartConfig} className="h-[196px] w-full">
                    <LineChart data={portfolioData}>
                        <XAxis
                            dataKey="date"
                            tick={{ fill: '#9CA3AF' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tickFormatter={(value) => `${value}%`}
                            tick={{
                                fill: '#FFFFFF66',
                                fontSize: 12,
                                dy: 5
                            }}
                            padding={{ bottom: 20 }}
                            minTickGap={10}
                            axisLine={false}
                            tickLine={false}
                            tickCount={5}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                            dataKey="balance"
                            type="monotone"
                            stroke={chartConfig.balance.color}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default PortfolioValue;