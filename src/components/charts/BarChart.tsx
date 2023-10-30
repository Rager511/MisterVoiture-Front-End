import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);

export const options = {
    responsive: true
};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
