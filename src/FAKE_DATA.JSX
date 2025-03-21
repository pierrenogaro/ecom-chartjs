export const lineChartData = {
    labels: [
        'Patins',
        'Crosses',
        'Casques',
        'Protections',
        'Gants',
        'Maillots',
    ],
    datasets: [
        {
            label: "Ventes par catégorie (€)",
            data: [
                299.99 + 349.99,
                189.99 + 209.99,
                159.99,
                0,
                0,
                79.99,
            ],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",

            ],
            borderWidth: 1,
        },
    ],
}
export const barChartData = {
    labels: [
        'Patins',
        'Crosses',
        'Casques',
        'Protections',
        'Gants',
        'Maillots',
    ],
    datasets: [
        {
            label: "Ventes par catégorie (€)",
            data: [
                299.99 + 349.99,
                189.99 + 209.99,
                159.99,
                0,
                0,
                79.99,
            ],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",

            ],
            borderWidth: 1,
        },
    ],
};
export const pieChartData = {
    labels: [
        'Patins',
        'Crosses',
        'Casques',
        'Protections',
        'Gants',
        'Maillots',
    ],
    datasets: [
        {
            label: "Ventes par catégorie (€)",
            data: [
                299.99 + 349.99,
                189.99 + 209.99,
                159.99,
                0,
                0,
                79.99,
            ],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",

            ],
            borderWidth: 1,
        },
    ],
};

export const locationLineChartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
        {
            label: "France",
            data: [1200, 1350, 1450, 1600, 1750, 1900],
            backgroundColor: "rgba(0, 114, 206, 0.6)",
            borderColor: "rgba(0, 114, 206, 1)",
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: "Belgique",
            data: [450, 520, 580, 650, 720, 790],
            backgroundColor: "rgba(223, 197, 50, 0.6)",
            borderColor: "rgba(223, 197, 50, 1)",
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: "Suisse",
            data: [320, 370, 410, 470, 520, 590],
            backgroundColor: "rgba(255, 0, 0, 0.6)",
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: "Canada",
            data: [180, 220, 250, 290, 330, 380],
            backgroundColor: "rgba(236, 45, 45, 0.6)",
            borderColor: "rgba(236, 45, 45, 1)",
            borderWidth: 1,
            tension: 0.4
        }
    ]
};
export const locationBarChartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
        {
            label: "France",
            data: [1200, 1350, 1450, 1600, 1750, 1900],
            backgroundColor: "rgba(0, 114, 206, 0.6)",
            borderColor: "rgba(0, 114, 206, 1)",
            borderWidth: 1
        },
        {
            label: "Belgique",
            data: [450, 520, 580, 650, 720, 790],
            backgroundColor: "rgba(223, 197, 50, 0.6)",
            borderColor: "rgba(223, 197, 50, 1)",
            borderWidth: 1
        },
        {
            label: "Suisse",
            data: [320, 370, 410, 470, 520, 590],
            backgroundColor: "rgba(255, 0, 0, 0.6)",
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 1
        },
        {
            label: "Canada",
            data: [180, 220, 250, 290, 330, 380],
            backgroundColor: "rgba(236, 45, 45, 0.6)",
            borderColor: "rgba(236, 45, 45, 1)",
            borderWidth: 1
        }
    ]
};
export const locationPieChartData = {
    labels: ['France', 'Belgique', 'Suisse', 'Canada', 'Autre Europe', 'Reste du monde'],
    datasets: [
        {
            label: "Répartition des utilisateurs par pays (%)",
            data: [55, 15, 12, 8, 7, 3],
            backgroundColor: [
                "rgba(0, 114, 206, 0.6)",
                "rgba(223, 197, 50, 0.6)",
                "rgba(255, 0, 0, 0.6)",
                "rgba(236, 45, 45, 0.6)",
                "rgba(46, 75, 160, 0.6)",
                "rgba(129, 129, 129, 0.6)"
            ],
            borderColor: [
                "rgba(0, 114, 206, 1)",
                "rgba(223, 197, 50, 1)",
                "rgba(255, 0, 0, 1)",
                "rgba(236, 45, 45, 1)",
                "rgba(46, 75, 160, 1)",
                "rgba(129, 129, 129, 1)"
            ],
            borderWidth: 1
        }
    ]
};

export const paymentLineChartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
        {
            label: "Carte de crédit",
            data: [4500, 5200, 4800, 5500, 6200, 7100],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: "PayPal",
            data: [2500, 2900, 3300, 3800, 4100, 4600],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: "Apple Pay",
            data: [1200, 1100, 980, 1050, 1300, 1500],
            backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
            tension: 0.4
        }
    ]
};
export const paymentBarChartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
        {
            label: "Carte de crédit",
            data: [4500, 5200, 4800, 5500, 6200, 7100],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        },
        {
            label: "PayPal",
            data: [2500, 2900, 3300, 3800, 4100, 4600],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        },
        {
            label: "Apple Pay",
            data: [1200, 1100, 980, 1050, 1300, 1500],
            backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1
        }
    ]
};
export const paymentPieChartData = {
    labels: ['Carte de crédit', 'PayPal', 'Apple Pay'],
    datasets: [
        {
            label: "Répartition des moyens de paiement (%)",
            data: [45, 30, 10],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(255, 206, 86, 0.6)",
            ],
            borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1
        }
    ]
};