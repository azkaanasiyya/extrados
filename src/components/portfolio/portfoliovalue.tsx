"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, type TooltipProps } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { CategoricalChartState } from 'recharts/types/chart/types'; 

const portfolioData = [
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
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		const dataPoint = portfolioData.find(d => d.date === label && d.value === payload[0].value);
		
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

const PortfolioValue = () => {
	const [activeTime, setActiveTime] = useState('1W');
	const [lineSplitPercentage, setLineSplitPercentage] = useState(100); 

	const chartConfig: ChartConfig = {
		value: {
			label: 'Portfolio Value',
			color: '#ffff',
		},
	};

	const uniqueDates = Array.from(new Set(portfolioData.map(d => d.date)));
	const chartData = portfolioData; 
	const handleMouseMove = (state: CategoricalChartState) => {
		if (state.activeTooltipIndex !== undefined && state.activeTooltipIndex !== null) {
			const index = state.activeTooltipIndex;
			const totalPoints = chartData.length - 1; 
			const percentage = (index / totalPoints) * 100;

			setLineSplitPercentage(percentage);
		}
	};

	const handleMouseLeave = () => {
		setLineSplitPercentage(100); 
	};
	const allDataValues = chartData.map(d => d.value).filter(v => typeof v === 'number');
	const globalMin = Math.min(...allDataValues);
	const globalMax = Math.max(...allDataValues);
	
	const yDomain = [
		globalMin - 5,
		globalMax + 5
	]; 

	return (
		<Card className="bg-neutral-900 bg-[url('/src/assets/overview/chart.png')] bg-no-repeat bg-cover bg-bottom text-white border-none shadow-none w-full h-full">
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
					<LineChart 
						data={portfolioData}
						onMouseMove={handleMouseMove} 
						onMouseLeave={handleMouseLeave} 
					>
						<defs>
							<pattern id="dotted-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
								<circle cx="2" cy="2" r="1.2" fill="#FFFFFF14" />
							</pattern>
						</defs>
						
						<defs>
							<linearGradient id="lineColorSplit" x1="0%" y1="0" x2="100%" y2="0">
								<stop offset="0%" stopColor="#FFFFFF" />
								<stop offset={`${lineSplitPercentage}%`} stopColor="#FFFFFF" />
								
								<stop offset={`${lineSplitPercentage}%`} stopColor="#FFFFFF33" />
								<stop offset="100%" stopColor="#FFFFFF33" />
							</linearGradient>
						</defs>

						<CartesianGrid 
							stroke='none'
							fill='url(#dotted-pattern)'
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
							tick={{
								fill: '#FFFFFF66',
								fontSize: 12,
								dy: 5
							}}
							padding={{ bottom: 10 }}
							minTickGap={10}
							axisLine={false}
							tickLine={false}
							tickCount={5}
							domain={yDomain}
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
							dataKey="value"
							type="monotone"
							stroke="url(#lineColorSplit)"
							strokeWidth={2}
							dot={false}
							activeDot={{ 
								r: 3, 
								stroke: '#FFFFFF',
								strokeWidth: 2, 
								fill: '#FFFFFF', 
							}}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default PortfolioValue;