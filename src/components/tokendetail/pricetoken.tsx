"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, type TooltipProps } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const balanceData = [
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 7, price: '9,865' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: -1, price: '3,896' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 12, price: '100' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 8, price: '7,084' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 5, price: '250' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 10, price: '8,560' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 15, price: '4,200' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 30, price: '1,200' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 10, price: '540' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 25, price: '9,900' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 5, price: '7,520' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 20, price: '3,450' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 15, price: '890' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 28, price: '6,120' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 3, price: '500' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 22, price: '9,550' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 18, price: '1,500' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: -5, price: '4,300' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 14, price: '8,700' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 25, price: '900' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 10, price: '2,100' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 35, price: '7,800' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 8, price: '50' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 28, price: '6,540' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: 15, price: '1,000' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: -10, price: '3,500' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: 32, price: '9,999' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: 20, price: '4,250' },
];

const priceData = [
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 5, price: '8,000' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 0, price: '2,500' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 10, price: '6,700' },
  { date: '18 Oct', fullDate: 'Fri-18 Oct, 2021', value: 5, price: '1,000' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: -10, price: '3,200' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 20, price: '9,800' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 10, price: '500' },
  { date: '19 Oct', fullDate: 'Sat-19 Oct, 2021', value: 25, price: '7,800' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 5, price: '2,200' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: -5, price: '900' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 15, price: '8,500' },
  { date: '20 Oct', fullDate: 'Sun-20 Oct, 2021', value: 10, price: '4,000' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 20, price: '9,500' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 30, price: '1,500' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 10, price: '7,000' },
  { date: '21 Oct', fullDate: 'Mon-21 Oct, 2021', value: 25, price: '2,800' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 10, price: '5,500' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: -15, price: '1,200' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 5, price: '8,800' },
  { date: '22 Oct', fullDate: 'Tue-22 Oct, 2021', value: 20, price: '3,000' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 15, price: '9,200' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 35, price: '400' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 8, price: '7,500' },
  { date: '23 Oct', fullDate: 'Wed-23 Oct, 2021', value: 28, price: '2,000' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: 12, price: '8,900' },
  { date: '24 Oct', fullDate: 'Thu-24 Oct, 2021', value: -8, price: '1,200' },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const dataPoint = [...balanceData, ...priceData].find(
      d => d.date === label && d.value === payload[0].value
    );
    const formattedPrice = dataPoint ? `$${dataPoint.price}.00` : 'N/A';
    const formattedDate = dataPoint ? dataPoint.fullDate : label;

    return (
      <div className="bg-white-neutral-800 px-2 py-1 rounded-[8px] border border-white-neutral-700 backdrop-blur-lg">
          <p className="text-[12px] leading-[165%] font-semibold text-base-white">{formattedPrice}</p>
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-400">{formattedDate}</p>
      </div>
    );
  }
  return null;
};

const PriceToken = () => {
  const [activeTab, setActiveTab] = useState('balance');
  const [activeTime, setActiveTime] = useState('1W');

  const chartConfig: ChartConfig = {
    balance: { label: 'Balance', color: '#ffff' },
    price: { label: 'Price', color: '#ffff' },
  };

  const chartData = activeTab === 'balance' ? balanceData : priceData;
  const dataKey = "value";

  const uniqueDates = Array.from(new Set(chartData.map(d => d.date)));

  return (
    <Card className="bg-neutral-900 bg-[url('/src/assets/overview/chart.png')] bg-no-repeat bg-cover bg-bottom text-white border border-white-neutral-800 w-full h-full flex flex-col justify-between">
      <CardHeader className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-row gap-5 items-center">
          <button
            onClick={() => setActiveTab('balance')}
            className={`flex flex-col items-start gap-[2px] border-b pb-[7px] cursor-pointer ${
              activeTab === 'balance' ? 'border-base-white text-base-white' : 'border-transparent text-white-neutral-500'
            }`}
          >
            <span className={`text-[12px] leading-[165%] ${activeTab === 'balance' ? 'text-base-white' : 'text-white-neutral-500'}`}>
              Price
            </span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$2,500.75</span>
              <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className={`size-4 ${activeTab === 'balance' ? 'text-success-500' : 'text-white-neutral-500'}`} />
                <span className={`text-[12px] leading-[165%] font-bold ${activeTab === 'balance' ? 'text-success-500' : 'text-white-neutral-500'}`}>6.4%</span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('price')}
            className={`flex flex-col items-start gap-[2px] border-b pb-[7px] cursor-pointer ${
              activeTab === 'price' ? 'border-base-white text-base-white' : 'border-transparent text-white-neutral-500'
            }`}
          >
            <span className={`text-[12px] leading-[165%] ${activeTab === 'price' ? 'text-base-white' : 'text-white-neutral-500'}`}>
              Market Cap
            </span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$301.55B</span>
              <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className={`size-4 ${activeTab === 'price' ? 'text-success-500' : 'text-white-neutral-500'}`} />
                <span className={`text-[12px] leading-[165%] font-bold ${activeTab === 'price' ? 'text-success-500' : 'text-white-neutral-500'}`}>0.70%</span>
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center">
          {['1H', '1D', '1W', '1M', '1Y'].map((time) => (
            <Button
              key={time}
              onClick={() => setActiveTime(time)}
              variant="overview"
              size="small"
              className={`text-[12px] leaading-[165%] cursor-pointer ${
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
          <LineChart data={chartData}>
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
              ticks={uniqueDates}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              padding={{left: 25}}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: '#FFFFFF66', fontSize: 12, dy: 5 }}
              padding={{ bottom: 10 }}
              minTickGap={10}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <ChartTooltip 
              content={<CustomTooltip />} 
              cursor={{
                  strokeDasharray: "4 4",
                  stroke: "#FFFFFF8F",
                  strokeWidth: 1.5,
              }} 
            />
            <Line
              dataKey={dataKey}
              type="monotone"
              stroke={chartConfig[activeTab].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>

        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PriceToken;