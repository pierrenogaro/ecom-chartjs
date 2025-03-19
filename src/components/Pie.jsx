import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import {pieChartData} from "../FAKE_DATA.JSX";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
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

    return <Pie options={options} data={pieChartData} />;
};