import { memo, useEffect, useId, useRef, useState } from "react";
import Chart from "chart.js/auto";
const DocPage = memo(() => {
  const compId = useId();
  const sigmoidFunction = (x: number): number => {
    return 1 / (1 + Math.exp(-x));
  };
  const inputValue: [number, number] = [1, 1];
  const modelWeight: [number, number] = [1, 1];
  const doPerceptron = () => {
    let temp: number = 0;
    for (const [index, weight] of modelWeight.entries()) {
      console.log(`Index: ${index}, Weight: ${weight}`);
      const val = weight * inputValue[index];
      temp = temp + val;
    }
    const bias = -1.5;
    console.log(temp + bias);
    return sigmoidFunction(temp + bias);
  };
  return (
    <div>
      <article>
        <h1>퍼셉트론</h1>
        <h1>퍼셉트론이란?</h1>
        <h2>활성함수 - Sigmoid 함수</h2>
        <pre>
          {`
            // typescript
            const sigmoidFunction = (x: number): number => {
              return 1 / (1 + Math.exp(-x));
            };
          `}
        </pre>
        <h2>퍼셉트론으로 AND 논리 회로 구현</h2>
        <button
          onClick={() => {
            const result = doPerceptron();
            console.log(result);
          }}
        >
          테스트
        </button>
        <section>
          <form id={`${compId}-form`}></form>
          <div>
            <input form={`${compId}-form`}></input>
          </div>
          <div>
            <input></input>
          </div>
        </section>
        {/* 퍼셉트론 회로 */}

        <section>
          <h3>퍼셉트론 AND 회로</h3>
          {/* 퍼셉트론 컨트롤러 */}
          <AndPerceptron></AndPerceptron>
        </section>
      </article>
    </div>
  );
});

DocPage.displayName = "DocPage";
export default DocPage;
const stepFunction = (x: number): number => (x < 0 ? 0 : 1);

const StepFunctionChart = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 데이터 생성
    const xValues: number[] = [];
    const yValues: number[] = [];
    for (let x = -6; x <= 6; x += 0.1) {
      xValues.push(Number(x.toFixed(1))); // 소수점 처리
      yValues.push(stepFunction(x));
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
            label: "Step Function",
            data: yValues, // Y축 값
            borderColor: "red",
            borderWidth: 2,
            fill: false,
            stepped: true, // 계단 형태를 위해 설정
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
            min: -1,
            max: 1,
          },
          y: {
            title: {
              display: true,
              text: "f(x)",
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
      <h2>Step Function</h2>
      <canvas ref={canvasRef} width={50} height={30}></canvas>
    </div>
  );
});
const AndPerceptron = memo(() => {
  const compId = useId();
  const [bias, setBias] = useState(0);

  return (
    <div>
      <StepFunctionChart></StepFunctionChart>
      <div className="flex">
        <label htmlFor={`${compId}-input-bias`}>BIAS</label>
        <div className="grow">
          <input
            id={`${compId}-input-bias`}
            value={bias}
            className="border-2"
            placeholder="BIAS"
            onChange={(event) => setBias(Number(event.currentTarget.value))}
          ></input>
        </div>
      </div>
      <div className="flex">
        <label htmlFor={`${compId}-input-bias`}>w1</label>
        <div className="grow">
          <input
            id={`${compId}-input-bias`}
            value={bias}
            className="border-2"
            placeholder="BIAS"
            onChange={(event) => setBias(Number(event.currentTarget.value))}
          ></input>
        </div>
      </div>
    </div>
  );
});
