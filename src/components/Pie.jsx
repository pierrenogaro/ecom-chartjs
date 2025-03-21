import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartData } from "../FAKE_DATA.JSX";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 12,
                    padding: 8,
                    font: {
                        size: 12
                    }
                }
            },
            title: {
                display: true,
                text: 'Ventes par Catégorie de Produits',
                font: {
                    size: 16
                },
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
        aspectRatio: 1.0
    };

    return (
        <div className="chart-container" style={{
            width: '600px',
            height: '600px',
            margin: '0 auto'
        }}>
            <Pie options={options} data={pieChartData} />
        </div>
    );
};