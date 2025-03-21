import React from 'react';
import { useNavigate } from 'react-router-dom';

const chartTypes = [
    {
        id: 'bar',
        title: 'Bar Chart',
        description: 'Visualisez des données comparatives avec des barres verticales.',
        color: 'rgb(54, 162, 235)',
        path: '/bar-chart'
    },
    {
        id: 'line',
        title: 'Line Chart',
        description: 'Suivez les changements et les tendances au fil du temps avec des points de données connectés.',
        color: 'rgb(255, 99, 132)',
        path: '/line-chart'
    },
    {
        id: 'pie',
        title: 'Pie Chart',
        description: 'Affichez des données proportionnelles sous forme de tranches d\'un cercle complet.',
        color: 'rgb(255, 206, 86)',
        path: '/pie-chart'
    }
];

export const Home = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="container py-5">
            <div className="row text-center mb-5">
                <div className="col">
                    <h1>Tableau de Bord des Ventes</h1>
                    <p className="lead">Sélectionnez un type de graphique pour visualiser les données de ventes par catégorie de produits</p>
                </div>
            </div>

            <div className="row justify-content-center">
                {chartTypes.map((chart) => (
                    <div className="col-md-4 mb-4" key={chart.id}>
                        <div
                            className="card h-100 shadow-sm"
                            onClick={() => handleCardClick(chart.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                className="card-header text-white"
                                style={{ backgroundColor: chart.color }}
                            >
                                <h3>{chart.title}</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{chart.description}</p>
                                <div className="d-grid">
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: chart.color, color: 'white' }}
                                    >
                                        Voir le Graphique
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;