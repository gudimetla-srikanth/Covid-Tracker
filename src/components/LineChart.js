import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js'
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement
)
export default function LineChart() {
    const data={
        labels: ["2/24/20", "2/25/20", "2/26/20", "2/27/20", "2/28/20", "2/29/20", "3/1/20", "3/2/20", "3/3/20", "3/4/20", "3/5/20", "3/6/20", "3/8/20", "3/9/20", "3/10/20", "3/11/20", "3/12/20", "3/13/20"
        ],
        datasets: [
            {
                label: "sample dataset",
                data: [669402, 725918, 790929, 869371, 1038176, 1182507, 1254222, 1397886, 669402, 725918, 790929, 869371, 1038176, 1182507, 1254222, 1397886, 669402, 725918, 790929, 869371, 1038176, 1182507, 1254222, 1397886, 669402, 725918, 790929, 869371, 1038176, 1182507, 1254222, 1397886,],
                backgroundColor: "yellow"
            }
        ]
    }
    return (
        <div style={{ width: "350px", height: "400px" }}>
            <Line data={data}></Line>
        </div>

    )
}


