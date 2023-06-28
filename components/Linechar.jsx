"use client"
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Week1', 'Week2', 'Week3', 'Week4',],
      datasets: [
        {
          label: 'Guest',
          data: [200, 300, 200, 500, 400, 200],
          borderColor: 'pink',
          backgroundColor: 'pink',
          pointRadius:5,
          tension:0.5
        },
        {
          label: 'User',
          data: [100, 500, 200, 300, 200, , 500],
          borderColor: 'lightgreen',
          backgroundColor: 'lightgreen',
          pointRadius:5,
          tension:0.5
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
          
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <div>
          <p className="font-bold text-2xl">Activites</p>
          <select className="text-gray-500 cursor-pointer" name="" id="">
            <option value="">May - June 2021</option>
            <option value="">May - June 2022</option>
            <option value="">May - June 2023</option>
          </select>
        </div>
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;