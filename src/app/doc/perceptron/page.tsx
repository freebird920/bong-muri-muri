import { FormEvent, memo, useId, useState } from "react";

const DocPerceptronPage = memo(() => {
  return (
    <div className="container mx-auto">
      <article className="flex flex-col space-y-2">
        <h1 className="text-xl font-extrabold">퍼셉트론</h1>
        <p>
          퍼셉트론(Perceptron)은 퍼셉트론은 입력값(x<sub>n</sub>)에 가중치(w
          <sub>n</sub>)를 적용하고 바이어스(b)를 더한 가중합을 계산한 뒤,
          활성함수(Active Function)를 통해 이진 출력(y)을 생성하는 단순 선형
          분류 모델입니다.
        </p>
        <div>
          <div className="grid grid-cols-7">
            <div className="col-span-2 flex flex-col">
              <div className="flex">
                <p className="grow border-2 text-center">x1</p>
                <p className="flex items-center justify-center">*</p>
                <p className="grow border-2 text-center">w1</p>
              </div>
              <div className="flex">
                <p className="grow border-2 text-center">x2</p>
                <p className="flex items-center justify-center">*</p>
                <p className="grow border-2 text-center">w2</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center justify-center">→</p>
              <p className="flex items-center justify-center">→</p>
            </div>
            <div className="col-span-2 flex items-center justify-center border-2">
              <p>
                {`activeFunction( `}
                <span>∑</span>
                <span>
                  x<sub>n</sub>
                </span>
                <span>
                  w<sub>n</sub>
                </span>
                {`   +   b)`}
              </p>
            </div>
            <div className="flex items-center justify-center">→</div>
            <div className="flex items-center justify-center border-2">y</div>
          </div>
        </div>
        <div className="border-2">
          <pre>
            {`/**\n * stepFunction\n * 입력이 0보다 작으면 0을, 입력이 0 이상이면 1을 출력하는 함수\n * @param x: number\n */\nconst stepFunction = (x:number)=>{\n  if(x<0) return 0;\n  if(x>=0) return 1;\n}`}
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
        <section>
          <h3>퍼셉트론 NAND 회로</h3>
          {/* 퍼셉트론 컨트롤러 */}
          <Perceptron y00={1} y01={1} y10={1} y11={0}></Perceptron>
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
      <div className="">
        <h4>진리표</h4>
        <ul className="border-2 text-center">
          <li className="grid grid-cols-4 font-bold">
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
