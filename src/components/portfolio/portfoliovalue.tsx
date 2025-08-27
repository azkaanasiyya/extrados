"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Line, LineChart, XAxis, YAxis, type TooltipProps } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const portfolioData = [
    { date: '18 Oct', value: 7, price: '9,865' },
    { date: '18 Oct', value: -1, price: '3,896' },
    { date: '18 Oct', value: 12, price: '100' },
    { date: '18 Oct', value: 8, price: '7,084' },
    { date: '19 Oct', value: 5, price: '250' },
    { date: '19 Oct', value: 10, price: '8,560' },
    { date: '19 Oct', value: 15, price: '4,200' },
    { date: '19 Oct', value: 30, price: '1,200' },
    { date: '20 Oct', value: 10, price: '540' },
    { date: '20 Oct', value: 25, price: '9,900' },
    { date: '20 Oct', value: 5, price: '7,520' },
    { date: '20 Oct', value: 20, price: '3,450' },
    { date: '21 Oct', value: 15, price: '890' },
    { date: '21 Oct', value: 28, price: '6,120' },
    { date: '21 Oct', value: 3, price: '500' },
    { date: '21 Oct', value: 22, price: '9,550' },
    { date: '22 Oct', value: 18, price: '1,500' },
    { date: '22 Oct', value: -5, price: '4,300' },
    { date: '22 Oct', value: 14, price: '8,700' },
    { date: '22 Oct', value: 25, price: '900' },
    { date: '23 Oct', value: 10, price: '2,100' },
    { date: '23 Oct', value: 35, price: '7,800' },
    { date: '23 Oct', value: 8, price: '50' },
    { date: '23 Oct', value: 28, price: '6,540' },
    { date: '24 Oct', value: 15, price: '1,000' },
    { date: '24 Oct', value: -10, price: '3,500' },
    { date: '24 Oct', value: 32, price: '9,999' },
    { date: '24 Oct', value: 20, price: '4,250' },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const dataPoint = portfolioData.find(d => d.date === label && d.value === payload[0].value);
    
    const formattedPrice = dataPoint ? `$${dataPoint.price}.00` : 'N/A';

    return (
      <div className='bg-neutral-900 rounded-[8px]'>
        <div className="bg-white-neutral-800 px-2 py-1 rounded-[8px] border border-white-neutral-700">
          <p className="text-[12px] leading-[165%] font-semibold text-base-white">{formattedPrice}</p>
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-400">{label}</p>
        </div>
      </div>
    );
  }
  return null;
};

const PortfolioValue = () => {
    const [activeTime, setActiveTime] = useState('1W');

    const chartConfig: ChartConfig = {
        value: {
            label: 'Portfolio Value',
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
                        <ChartTooltip content={<CustomTooltip />} />
                        <Line
                            dataKey="value"
                            type="monotone"
                            stroke={chartConfig.value.color}
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