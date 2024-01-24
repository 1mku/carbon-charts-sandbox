import {
	Alignments,
	ChartTheme,
	LegendPositions,
	type PieChartOptions,
} from "@carbon/charts";
import { PieChart } from "@carbon/charts-react";

const data = [
	{ group: "2V2N 9KYPM version 1", value: 20000 },
	{ group: "L22I P66EP L22I P66EP L22I P66EP", value: 65000 },
	{ group: "JQAI 2M4L1", value: 75000 },
	{ group: "J9DZ F37AP", value: 1200 },
	{ group: "YEL48 Q6XK YEL48", value: 10000 },
	{ group: "Misc", value: 25000 },
];

const options: PieChartOptions = {
	title: "Pie",
	legend: {
		position: LegendPositions.RIGHT,
		truncation: {
			threshold: 100,
		},
	},
	resizable: true,
	theme: ChartTheme.G100,
};

const centeredOptions: PieChartOptions = {
	title: "Pie (centered)",
	resizable: true,
	legend: {
		alignment: Alignments.CENTER,
	},
	pie: {
		alignment: Alignments.CENTER,
	},
	theme: ChartTheme.G100,
};

export default function PieCharts() {
	return (
		<>
			<PieChart data={data} options={options} />
			<PieChart data={data} options={centeredOptions} />
		</>
	);
}
