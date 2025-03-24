import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

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
    const [alcoolData, setAlcoolData] = useState({
        labels: [],
        datasets: [{
            label: "Degrés d'alcool par alcool",
            data: [],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            tension: 0.4
        }]
    });

    useEffect(() => {
        const fetchAlcools = async () => {
            try {
                const response = await fetch('http://localhost:8081/alcools/all');
                const alcools = await response.json();

                const labels = alcools.map(alcool => alcool.name);
                const degrees = alcools.map(alcool => parseFloat(alcool.degree));

                setAlcoolData(prevState => ({
                    ...prevState,
                    labels: labels,
                    datasets: [{
                        ...prevState.datasets[0],
                        data: degrees
                    }]
                }));
            } catch (error) {
                console.error('Erreur lors de la récupération des alcools:', error);
            }
        };

        fetchAlcools();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Degrés d\'alcool par alcool'
            }
        }
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <Line options={options} data={alcoolData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}