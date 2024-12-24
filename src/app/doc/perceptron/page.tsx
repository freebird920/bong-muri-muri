import { FormEvent, memo, useId, useState } from "react";

const DocPerceptronPage = memo(() => {
  return (
    <div>
      <article>
        <h1>퍼셉트론</h1>
        <h1>퍼셉트론이란?</h1>
        <div className="border-2">
          <h4 className="font-extrabold">Step Function</h4>
          <p>입력이 0보다 작으면 0을, 입력이 0 이상이면 1을 출력하는 함수</p>
          <pre>
            {`const stepFunction = (x:number)=>{\n  if(x<0) return 0;\n  if(x>=0) return 1;\n}`}
          </pre>
        </div>

        {/* 퍼셉트론 회로 */}

        <section>
          <h3>퍼셉트론 AND 회로</h3>
          {/* 퍼셉트론 컨트롤러 */}
          <Perceptron y00={0} y01={0} y10={0} y11={1}></Perceptron>
        </section>
        <section>
          <h3>퍼셉트론 OR 회로</h3>
          {/* 퍼셉트론 컨트롤러 */}
          <Perceptron y00={0} y01={1} y10={1} y11={1}></Perceptron>
        </section>
      </article>
    </div>
  );
});

DocPerceptronPage.displayName = "DocPerceptronPage";
export default DocPerceptronPage;

interface PerceptronProps {
  y00: 0 | 1;
  y01: 0 | 1;
  y10: 0 | 1;
  y11: 0 | 1;
}
const Perceptron = memo((props: PerceptronProps) => {
  const compId = useId();
  const [bias, setBias] = useState<number | null>(null);
  const [w1, setW1] = useState<number | null>(null);
  const [w2, setW2] = useState<number | null>(null);

  const stepFunction = (x: number) => {
    if (isNaN(x)) throw new Error("isNan()");
    if (x < 0) return 0;
    if (x >= 0) return 1;
  };
  const computePerceptron = (x1: number, x2: number) => {
    if (w1 === null || w2 === null || bias === null) return;
    const temp = x1 * w1 + x2 * w2 + bias;
    return stepFunction(temp);
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bias = formData.get("bias");
    const w1 = formData.get("w1");
    const w2 = formData.get("w2");
    if (bias === null || w1 === null || w2 === null)
      throw new Error("empty form data");
    if (
      typeof bias !== "string" ||
      typeof w1 !== "string" ||
      typeof w2 !== "string"
    )
      throw new Error("input is not string");
    const numberBias = Number(bias);
    const numberW1 = Number(w1);
    const numberW2 = Number(w2);
    if (isNaN(numberBias) || isNaN(numberW1) || isNaN(numberW2))
      throw new Error("NaN");
    setBias(numberBias);
    setW1(numberW1);
    setW2(numberW2);
  };

  return (
    <div>
      <div>
        <h4>stepFunction</h4>
        <p>입력이 0보다 작으면 0, 0 이상이면 1을 출력함.</p>
      </div>
      <section>
        <form id={`${compId}-form`} onSubmit={handleFormSubmit}></form>
        <div className="flex">
          <label htmlFor={`${compId}-input-bias`}>BIAS</label>
          <div className="grow">
            <input
              form={`${compId}-form`}
              id={`${compId}-input-bias`}
              name="bias"
              className="border-2"
              placeholder="BIAS"
              type="number"
              step="any"
            ></input>
          </div>
        </div>
        <div className="flex">
          <label htmlFor={`${compId}-input-w1`}>w1</label>
          <div className="grow">
            <input
              form={`${compId}-form`}
              id={`${compId}-input-w1`}
              className="border-2"
              placeholder="w1"
              name="w1"
              type="number"
              step="any"
            ></input>
          </div>
        </div>
        <div className="flex">
          <label htmlFor={`${compId}-input-w2`}>w2</label>
          <div className="grow">
            <input
              form={`${compId}-form`}
              id={`${compId}-input-w2`}
              className="border-2"
              placeholder="w2"
              type="number"
              name="w2"
              step="any"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md border-2 px-2 py-1 font-bold hover:bg-rose-300 hover:bg-opacity-30"
          form={`${compId}-form`}
        >
          설정하기
        </button>
      </section>
      <div>
        <h4>상태</h4>
        <p>bias: {bias}</p>
        <p>w1: {w1}</p>
        <p>w2: {w2}</p>
      </div>
      <div>
        <h4>진리표</h4>
        <ul>
          <li className="grid grid-cols-4">
            <p>x1</p>
            <p>x2</p>
            <p>y</p>
            <p>y*</p>
          </li>
          <li className="grid grid-cols-4">
            <p>0</p>
            <p>0</p>
            <p>{props.y00}</p>
            <p>{computePerceptron(0, 0)}</p>
          </li>
          <li className="grid grid-cols-4">
            <p>0</p>
            <p>1</p>
            <p>{props.y01}</p>
            <p>{computePerceptron(0, 1)}</p>
          </li>
          <li className="grid grid-cols-4">
            <p>1</p>
            <p>0</p>
            <p>{props.y10}</p>
            <p>{computePerceptron(1, 0)}</p>
          </li>
          <li className="grid grid-cols-4">
            <p>1</p>
            <p>1</p>
            <p>{props.y11}</p>
            <p>{computePerceptron(1, 1)}</p>
          </li>
        </ul>
      </div>
    </div>
  );
});
