import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import {pieChartData, locationPieChartData, paymentPieChartData} from "../FAKE_DATA.JSX";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
    const options1 = {
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
    const options2 = {
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
                text: 'Répartition des Utilisateurs par Pays',
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
    const options3 = {
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
                text: 'Répartition des Moyens de Paiement',
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
        <div className="container">
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="chart-container" style={{
                        width: '600px',
                        height: '600px'
                    }}>
                        <Pie options={options1} data={pieChartData} />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="chart-container" style={{
                        width: '600px',
                        height: '600px'
                    }}>
                        <Pie options={options2} data={locationPieChartData} />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="chart-container" style={{
                        width: '600px',
                        height: '600px'
                    }}>
                        <Pie options={options3} data={paymentPieChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};