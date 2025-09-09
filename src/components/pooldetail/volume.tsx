"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';
import { volumeData } from '@/data/volume';
import { tvlData } from '@/data/tvl';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { TooltipProps } from 'recharts';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  activeTab: 'volume' | 'tvl';
}

const CustomVolumeTooltip = ({ active, payload, activeTab }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const value = dataPoint.value;

    let formattedValue;
    if (activeTab === 'volume') {
      formattedValue = `$${value.toFixed(2)}`;
    } else {
      formattedValue = `$${(value / 1e9).toFixed(2)}B`;
    }

    return (
      <div className='bg-neutral-900 rounded-[8px]'>
        <div className="bg-white-neutral-800 px-2 py-1 rounded-[8px] border border-white-neutral-700">
          <p className="text-[12px] leading-[165%] font-semibold text-base-white">{formattedValue}</p>
          <p className="text-[12px] leading-[165%] font-medium text-white-neutral-400">{dataPoint.date}</p>
        </div>
      </div>
    );
  }
  return null;
};

const VolumePoolDetail = () => {
  const [activeTab, setActiveTab] = useState<'volume' | 'tvl'>('volume');
  const [activeTime, setActiveTime] = useState('1W');
  const chartData = activeTab === 'volume' ? volumeData : tvlData;
  const uniqueDates = Array.from(new Set(chartData.map(d => d.date)));

  const chartConfig: ChartConfig = {
    volume: {
      label: 'Volume',
      color: '#947FFF',
    },
    tvl: {
      label: 'TVL',
      color: '#947FFF',
    },
  };

  return (
    <Card className="bg-white-neutral-900 text-white border border-white-neutral-800 w-full h-full flex flex-col justify-between">
      <CardHeader className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-row gap-5 items-center">
          <button
            onClick={() => setActiveTab('volume')}
            className={`flex flex-col items-start gap-[2px] border-b pb-[7px] cursor-pointer ${
              activeTab === 'volume' ? 'border-base-white text-base-white' : 'border-transparent text-white-neutral-500'
            }`}
          >
            <span className={`text-[12px] leading-[165%] ${activeTab === 'volume' ? 'text-base-white' : 'text-white-neutral-500'}`}>Volume</span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$2,500.75</span>
              <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className={`size-4 ${activeTab === 'volume' ? 'text-success-500' : 'text-white-neutral-500'}`} />
                <span className={`text-[12px] leading-[165%] font-bold ${activeTab === 'volume' ? 'text-success-500' : 'text-white-neutral-500'}`}>6.4%</span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('tvl')}
            className={`flex flex-col items-start gap-[2px] border-b pb-[7px] cursor-pointer ${
              activeTab === 'tvl' ? 'border-base-white text-base-white' : 'border-transparent text-white-neutral-500'
            }`}
          >
            <span className={`text-[12px] leading-[165%] ${activeTab === 'tvl' ? 'text-base-white' : 'text-white-neutral-500'}`}>TVL</span>
            <div className='flex flex-row gap-2 items-center'>
              <span className="text-[24px] leading-[140%] font-bold">$301.55B</span>
              <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className={`size-4 ${activeTab === 'tvl' ? 'text-success-500' : 'text-white-neutral-500'}`} />
                <span className={`text-[12px] leading-[165%] font-bold ${activeTab === 'tvl' ? 'text-success-500' : 'text-white-neutral-500'}`}>0.70%</span>
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
          <BarChart 
            data={chartData}
            accessibilityLayer
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
              ticks={uniqueDates}
              tick={{ fill: '#9CA3AF' }} 
              axisLine={false} 
              tickLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
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
            <ChartTooltip content={<CustomVolumeTooltip activeTab={activeTab} />} />
            <Bar
              dataKey="value"
              fill={chartConfig[activeTab].color}
              radius={[4, 4, 0, 0]}
              barSize={5}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default VolumePoolDetail;