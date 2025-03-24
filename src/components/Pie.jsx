import { useState, useEffect } from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
    const [alcoolData, setAlcoolData] = useState({
        labels: [],
        datasets: [{
            label: "Répartition des alcools",
            data: [],
            backgroundColor: [],
            borderColor: []
        }]
    });

    useEffect(() => {
        const fetchAlcools = async () => {
            try {
                const response = await fetch('http://localhost:8081/alcools/all');
                const alcools = await response.json();

                const typeCount = {};
                alcools.forEach(alcool => {
                    const type = alcool.name.split(' ')[0] || 'Autre';
                    typeCount[type] = (typeCount[type] || 0) + 1;
                });

                const labels = Object.keys(typeCount);
                const counts = Object.values(typeCount);

                const backgroundColor = labels.map(() =>
                    `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.6)`
                );
                const borderColor = backgroundColor.map(color => color.replace('0.6', '1'));

                setAlcoolData(prevState => ({
                    ...prevState,
                    labels: labels,
                    datasets: [{
                        ...prevState.datasets[0],
                        data: counts,
                        backgroundColor,
                        borderColor
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
                text: 'Répartition des types d\'alcools'
            }
        }
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="chart-container" style={{
                        width: '600px',
                        height: '600px'
                    }}>
                        <Pie options={options} data={alcoolData} />
                    </div>
                </div>
            </div>
        </div>
    )
}