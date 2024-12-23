import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// 시그모이드 함수 정의
const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));

const SigmoidChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 데이터 생성
    const xValues: number[] = [];
    const yValues: number[] = [];
    for (let x = -6; x <= 6; x += 0.1) {
      xValues.push(Number(x.toFixed(1))); // 소수점 처리
      yValues.push(sigmoid(x));
    }

    // Chart.js 그래프 초기화
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues, // X축 값
        datasets: [
          {
            label: "Sigmoid Function",
            data: yValues, // Y축 값
            borderColor: "blue",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "x",
            },
          },
          y: {
            title: {
              display: true,
              text: "sigmoid(x)",
            },
            min: 0,
            max: 1,
          },
        },
      },
    });

    // Cleanup to prevent multiple initializations
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Sigmoid Function</h2>
      <canvas ref={canvasRef} width={500} height={300}></canvas>
    </div>
  );
};

export default SigmoidChart;
