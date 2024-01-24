import { StackedAreaChart as Chart } from "@carbon/charts-react";
import { ChartTheme, ScaleTypes } from "@carbon/charts";

export default function StackedAreaCharts() {
	return (
		<>
			<Chart
				data={initialData}
				options={{
					toolbar: { enabled: false },
					title: "Stacked area (percentage)",
					axes: {
						left: {
							stacked: true,
							percentage: true,
							ticks: {},
							mapsTo: "value",
						},
						bottom: {
							scaleType: ScaleTypes.TIME,
							mapsTo: "date",
						},
					},
					curve: "curveMonotoneX",
					height: "400px",
					theme: ChartTheme.G100,
				}}
			/>
			<Chart
				data={initialData}
				options={{
					toolbar: { enabled: false },
					title: "Stacked area",
					axes: {
						left: {
							stacked: true,
							ticks: {},
							mapsTo: "value",
						},
						bottom: {
							scaleType: ScaleTypes.TIME,
							mapsTo: "date",
						},
					},
					curve: "curveMonotoneX",
					height: "400px",
					theme: ChartTheme.G100,
				}}
			/>
		</>
	);
}

export const initialData = [
	{
		group: "Dataset 1",
		date: "2019-01-01T05:00:00.000Z",
		value: 10000,
	},
	{
		group: "Dataset 1",
		date: "2019-01-05T05:00:00.000Z",
		value: 65000,
	},
	{
		group: "Dataset 1",
		date: "2019-01-08T05:00:00.000Z",
		value: 10000,
	},
	{
		group: "Dataset 1",
		date: "2019-01-13T05:00:00.000Z",
		value: 49213,
	},
	{
		group: "Dataset 1",
		date: "2019-01-17T05:00:00.000Z",
		value: 51213,
	},
	{
		group: "Dataset 2",
		date: "2019-01-01T05:00:00.000Z",
		value: 20000,
	},
	{
		group: "Dataset 2",
		date: "2019-01-05T05:00:00.000Z",
		value: 25000,
	},
	{
		group: "Dataset 2",
		date: "2019-01-08T05:00:00.000Z",
		value: 60000,
	},
	{
		group: "Dataset 2",
		date: "2019-01-13T05:00:00.000Z",
		value: 30213,
	},
	{
		group: "Dataset 2",
		date: "2019-01-17T05:00:00.000Z",
		value: 55213,
	},
	{
		group: "Dataset 3",
		date: "2019-01-01T05:00:00.000Z",
		value: 30000,
	},
	{
		group: "Dataset 3",
		date: "2019-01-05T05:00:00.000Z",
		value: 20000,
	},
	{
		group: "Dataset 3",
		date: "2019-01-08T05:00:00.000Z",
		value: 40000,
	},
	{
		group: "Dataset 3",
		date: "2019-01-13T05:00:00.000Z",
		value: 60213,
	},
	{
		group: "Dataset 3",
		date: "2019-01-17T05:00:00.000Z",
		value: 25213,
	},
];
