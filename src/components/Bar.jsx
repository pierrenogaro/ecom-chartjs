import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {barChartData} from "../FAKE_DATA.JSX";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Ventes par Catégorie de Produits'
            }
        }
    }

    return <Bar options={options} data={barChartData} />

}