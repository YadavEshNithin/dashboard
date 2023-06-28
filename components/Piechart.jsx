"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Basic Tees', 'Custom Shorts', 'Super Hoodies',],
        datasets: [
          {
            label: 'Top Products',
            data: [550, 300, 140, ],
            backgroundColor: [
              'lightgreen',
              'yellow',
              'pink',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 0,
          },
        ],
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'right',
        
        },
        title: {
          display: true,
          text: 'Top Products',
          
          
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default PieChart;