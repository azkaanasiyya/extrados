// src/components/overview/TotalBalanceChart.tsx
"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';

const chartData = [
  { date: '18 Oct', balance: 5, price: 2800 },
  { date: '19 Oct', balance: 0, price: 2750 },
  { date: '20 Oct', balance: 10, price: 2846 },
  { date: '21 Oct', balance: 5, price: 2810 },
  { date: '22 Oct', balance: -10, price: 2825 },
  { date: '23 Oct', balance: 20, price: 2850 },
  { date: '24 Oct', balance: 10, price: 2840 },
];

const TotalBalance = () => {
  const [activeTab, setActiveTab] = useState('balance');
  const [activeTime, setActiveTime] = useState('1W');

  const chartConfig: ChartConfig = {
    balance: {
      label: 'Balance',
      color: '#ffff',
    },
    price: {
      label: 'Price',
      color: '#ffff',
    },
  };

  return (
    <Card className="bg-white-neutral-800 bg-[url('/src/assets/overview/chart.png')] bg-no-repeat bg-cover bg-bottom text-white border-none shadow-none w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-5 items-center">
          <button
            onClick={() => setActiveTab('balance')}
            className={`flex flex-col items-start gap-[2px] border-b pb-[7px] cursor-pointer ${
              activeTab === 'balance' ? 'border-base-white text-base-white' : 'border-transparent text-white-neutral-500'
            }`}
          >
            <span className={`text-[12px] leading-[165%] text-base-white ${activeTab === 'balance' ? 'text-base-white' : 'text-white-neutral-500'}`}>Total Balance</span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$9,257.00</span>
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
            <span className={`text-[12px] leading-[165%] text-base-white ${activeTab === 'price' ? 'text-base-white' : 'text-white-neutral-500'}`}>Price</span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$2,846.00</span>
              <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className={`size-4 ${activeTab === 'price' ? 'text-success-500' : 'text-white-neutral-500'}`} />
                <span className={`text-[12px] leading-[165%] font-bold ${activeTab === 'price' ? 'text-success-500' : 'text-white-neutral-500'}`}>2.2%</span>
              </div>
            </div>
          </button>
        </div>
        {/* Pastikan container di sini juga fleksibel */}
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
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#9CA3AF' }} 
                axisLine={false} // Mengatur warna garis sumbu X
                tickLine={false} // Menghilangkan garis kecil pada setiap tick
              />
             <YAxis 
                tickFormatter={(value) => `${value}%`} 
                tick={{ 
                  fill: '#FFFFFF66', 
                  fontSize: 12, // Mengatur ukuran teks menjadi 10px
                  dy: 5 // Mengatur posisi vertikal teks agar lebih rapi
                }} 
                padding={{ bottom: 20 }} // Mengatur jarak garis sumbu Y
                minTickGap={10} // Mengatur jarak minimal antar tick
                axisLine={false}
                tickLine={false}
                tickCount={5}
              />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey={activeTab}
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

export default TotalBalance;