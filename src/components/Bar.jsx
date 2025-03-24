import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChart = () => {
    const [alcoolData, setAlcoolData] = useState({
        labels: [],
        datasets: [{
            label: "Nombre d'ingrédients par alcool",
            data: [],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        }]
    });

    useEffect(() => {
        const fetchAlcools = async () => {
            try {
                const response = await fetch('http://localhost:8081/alcools/all');
                const alcools = await response.json();

                const labels = alcools.map(alcool => alcool.name);
                const ingredientCounts = alcools.map(alcool => alcool.ingredients ? alcool.ingredients.length : 0);

                setAlcoolData(prevState => ({
                    ...prevState,
                    labels: labels,
                    datasets: [{
                        ...prevState.datasets[0],
                        data: ingredientCounts
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
                text: 'Nombre d\'ingrédients par alcool'
            }
        }
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <Bar options={options} data={alcoolData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}