import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {lineChartData} from "../FAKE_DATA.JSX";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
export const LineGraph = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position:'top',
            },
            title : {
                display: true,
                text: 'Ventes par Catégorie de Produits'
            }
        }
    }

    return <Line options={options} data={lineChartData}/>

}