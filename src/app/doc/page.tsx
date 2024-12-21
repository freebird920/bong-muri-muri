import { memo, useId } from "react";

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
      </article>
    </div>
  );
});

DocPage.displayName = "DocPage";
export default DocPage;
