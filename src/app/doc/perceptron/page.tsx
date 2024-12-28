import { FormEvent, memo, useId, useState } from "react";

const DocPerceptronPage = memo(() => {
  return (
    <div className="container mx-auto px-2 pb-2">
      <article className="flex flex-col space-y-2">
        <div className="w-full">
          <a
            className="rounded-md border-2 px-2 py-1 hover:bg-rose-500 hover:bg-opacity-40"
            href="/doc"
          >
            목록으로
          </a>
        </div>
        <h1 className="text-xl font-extrabold">퍼셉트론</h1>
        <p>
          퍼셉트론(Perceptron)은 퍼셉트론은 입력값(x<sub>n</sub>)에 가중치(w
          <sub>n</sub>)를 적용하고 바이어스(b)를 더한 가중합을 계산한 뒤,
          활성함수(Active Function)를 통해 이진 출력(y)을 생성하는 단순 선형
          분류 모델입니다.
        </p>
        <a href="https://www.ebssw.kr/edc/cultursens/cultursensMvpView.do?alctcrSn=57365&cntntsSn=26341&stepSn=56471&lctreSn=1853597&pageIndex=1">
          강의 영상
        </a>
        <div>
          <div className="grid grid-cols-7 gap-4">
            <div className="col-span-2 flex flex-col space-y-2">
              <div className="flex space-x-2">
                <p className="grow border-2 text-center">x1</p>
                <p className="flex items-center justify-center">*</p>
                <p className="grow border-2 text-center">w1</p>
              </div>
              <div className="flex space-x-2">
                <p className="grow border-2 text-center">x2</p>
                <p className="flex items-center justify-center">*</p>
                <p className="grow border-2 text-center">w2</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center justify-center">→</p>
              <p className="flex items-center justify-center">→</p>
            </div>
            <div className="col-span-2 flex items-center justify-center rounded-md border-2">
              <p>
                {`activeFunction( `}
                <span className="text-xl font-extrabold">∑</span>
                <span className="font-bold">x</span>
                <sub>n</sub>
                <span className="font-bold">w</span>
                <sub>n</sub>
                {`   +   `}
                <span className="font-bold">b</span>
                {`)`}
              </p>
            </div>
            <div className="flex items-center justify-center">→</div>
            <div className="flex items-center justify-center rounded-md border-2 font-extrabold">
              y
            </div>
          </div>
        </div>
        <div className="rounded-md border-2 p-2">
          <pre className="whitespace-break-spaces">
            {`/**\n * stepFunction\n * 입력이 0보다 작으면 0을, 입력이 0 이상이면 1을 출력하는 함수\n * @param x: number\n * @return 0 | 1\n */\nconst stepFunction = (x:number)=>{\n  if(x<0) return 0;\n  if(x>=0) return 1;\n}`}
          </pre>
        </div>

        {/* 퍼셉트론 회로 */}
        {[
          { title: "AND", array: [0, 0, 0, 1] },
          { title: "OR", array: [0, 1, 1, 1] },
          { title: "NAND", array: [1, 1, 1, 0] },
        ].map((element) => {
          return (
            <div key={`${element.title}-perceptron`}>
              <h3 className="font-extrabold">{element.title} 게이트</h3>
              <Perceptron
                y00={element.array[0] as 0 | 1}
                y01={element.array[1] as 0 | 1}
                y10={element.array[2] as 0 | 1}
                y11={element.array[3] as 0 | 1}
              ></Perceptron>
            </div>
          );
        })}
        <div>
          <h3 className="text-lg font-extrabold">XOR 게이트</h3>
          <XorPerceptron></XorPerceptron>
        </div>
      </article>
    </div>
  );
});

DocPerceptronPage.displayName = "DocPerceptronPage";
export default DocPerceptronPage;

type PerceptronParams = {
  w1: number;
  w2: number;
  bias: number;
};
const XorPerceptron = memo(() => {
  const stepFunction = (x: number) => {
    if (isNaN(x)) throw new Error("isNan()");
    if (x < 0) return 0;
    if (x >= 0) return 1;
    throw new Error("wtf");
  };
  const perceptonCompute = (
    perceptronParam: PerceptronParams,
    x1: number,
    x2: number,
  ): 0 | 1 => {
    const result =
      x1 * perceptronParam.w1 + x2 * perceptronParam.w2 + perceptronParam.bias;
    return stepFunction(result);
  };
  const [perceptron1, setPerceptron1] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  const [perceptron2, setPerceptron2] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  const [perceptron3, setPerceptron3] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  const [perceptron4, setPerceptron4] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  const [perceptron5, setPerceptron5] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  const [perceptron6, setPerceptron6] = useState<PerceptronParams>({
    w1: 0,
    w2: 0,
    bias: 0,
  });
  return (
    <div className="flex flex-col space-y-2">
      <p>XOR은 x1과 x2가 다를 때면 1, 같으면 0을 출력한다.</p>
      <h4>XOR 게이트 만들기</h4>
      <div className="grid grid-cols-3 gap-4 p-4 font-mono">
        <section className="grid grid-rows-1 gap-4">
          <div className="grid grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  x<sub>1</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  x<sub>2</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P1</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>1</sub>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  x<sub>1</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  x<sub>2</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P2</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>2</sub>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  x<sub>1</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  x<sub>2</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P3</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>3</sub>
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col space-y-2">
          <div className="grid grow grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  y<sub>1</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  y<sub>2</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P4</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>4</sub>
              </span>
            </div>
          </div>

          <div className="grid grow grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  y<sub>2</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  y<sub>3</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P5</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>5</sub>
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="grid grow grid-cols-4 rounded-md border-2 p-2">
            <div className="grid grid-rows-1">
              <p>
                <span>
                  y<sub>4</sub>
                </span>
                <span>→</span>
              </p>
              <p>
                <span>
                  y<sub>5</sub>
                </span>
                <span>→</span>
              </p>
            </div>
            <div className="grid grid-rows-1 items-center text-center">
              <div className="flex">P6</div>
            </div>
            <div className="grid grid-rows-1 items-center text-center">→</div>
            <div className="grid grid-rows-1 items-center text-center">
              <span>
                y<sub>out</sub>
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="grid grid-cols-4 gap-2">
        <section className="flex flex-col space-y-2">
          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P1</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron1.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron1,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron1(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron1.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron1,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron1(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron1.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron1,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron1(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>
          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P2</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron2.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron2,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron2(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron2.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron2,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron2(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron2.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron2,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron2(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>
          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P3</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron3.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron3,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron3(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron3.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron3,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron3(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron3.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron3,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron3(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="grid grid-rows-2 space-y-2">
          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P4</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron4.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron4,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron4(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron4.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron4,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron4(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron4.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron4,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron4(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>

          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P5</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron5.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron5,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron5(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron5.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron5,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron5(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron5.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron: PerceptronParams = {
                        ...perceptron5,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron5(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="grid grid-rows-1">
          <div className="rounded-md border-2 p-2">
            <h4 className="text-center font-extrabold">P6</h4>
            <section>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w1" className="text-sm">
                  w1
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w1"
                    placeholder="w1"
                    type="number"
                    step="any"
                    value={perceptron6.w1}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron6,
                        w1: Number(event.currentTarget.value),
                      };
                      setPerceptron6(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  w2
                </label>
                <div className="shrink">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-w2"
                    type="number"
                    step="any"
                    placeholder="w2"
                    value={perceptron6.w2}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron6,
                        w2: Number(event.currentTarget.value),
                      };
                      setPerceptron6(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <label htmlFor="p1-w2" className="text-sm">
                  bias
                </label>
                <div className="shrink items-center">
                  <input
                    className="w-full rounded-md border-2 text-sm"
                    id="p1-bias"
                    type="number"
                    placeholder="bias"
                    step="any"
                    value={perceptron6.bias}
                    onChange={(event) => {
                      // Create a new object to avoid mutating the state directly
                      const newPerceptron = {
                        ...perceptron6,
                        bias: Number(event.currentTarget.value),
                      };
                      setPerceptron6(newPerceptron);
                    }}
                  ></input>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="rounded-md border-2 p-2">
          <h4>진리표</h4>
          <section className="flex flex-col items-center justify-center">
            <div className="grid w-full grid-cols-4">
              <div className="text-center font-bold">
                x<sub>1</sub>
              </div>
              <div className="text-center font-bold">
                x<sub>2</sub>
              </div>
              <div className="text-center font-bold">
                y<sub>out</sub>
              </div>
              <div className="text-center font-bold">
                y<sub>predict</sub>
              </div>
            </div>
            {[
              [0, 0],
              [0, 1],
              [1, 0],
              [1, 1],
            ].map((element, index) => {
              const resultP1 = perceptonCompute(
                perceptron1,
                element[0],
                element[1],
              );
              const resultP2 = perceptonCompute(
                perceptron2,
                element[0],
                element[1],
              );
              const resultP3 = perceptonCompute(
                perceptron3,
                element[0],
                element[1],
              );
              const resultP4 = perceptonCompute(
                perceptron4,
                resultP1,
                resultP2,
              );
              const resultP5 = perceptonCompute(
                perceptron5,
                resultP2,
                resultP3,
              );
              const resultP6 = perceptonCompute(
                perceptron6,
                resultP4,
                resultP5,
              );
              return (
                <div className="grid w-full grid-cols-4" key={`jinri-${index}`}>
                  <div className="text-center">{element[0]}</div>
                  <div className="text-center">{element[1]}</div>
                  <div className="text-center">
                    {element[0] !== element[1] ? 1 : 0}
                  </div>
                  <div className="text-center">{resultP6}</div>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </div>
  );
});

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
      <section className="grid grid-cols-3 gap-4">
        <section className="flex flex-col items-center justify-center space-y-2 rounded-md border-2 p-2">
          <form id={`${compId}-form`} onSubmit={handleFormSubmit}></form>

          <div className="flex space-x-2">
            <label className="text-xs" htmlFor={`${compId}-input-w1`}>
              w1
            </label>
            <div className="shrink">
              <input
                form={`${compId}-form`}
                id={`${compId}-input-w1`}
                className="w-full border-2 text-sm"
                placeholder="w1"
                name="w1"
                type="number"
                step="any"
              ></input>
            </div>
          </div>
          <div className="flex space-x-2">
            <label className="text-xs" htmlFor={`${compId}-input-w2`}>
              w2
            </label>
            <div className="shrink">
              <input
                form={`${compId}-form`}
                id={`${compId}-input-w2`}
                className="w-full border-2 text-sm"
                placeholder="w2"
                type="number"
                name="w2"
                step="any"
              ></input>
            </div>
          </div>
          <div className="flex space-x-2">
            <label className="text-xs" htmlFor={`${compId}-input-bias`}>
              BIAS
            </label>
            <div className="shrink">
              <input
                form={`${compId}-form`}
                id={`${compId}-input-bias`}
                name="bias"
                className="w-full border-2 text-sm"
                placeholder="BIAS"
                type="number"
                step="any"
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="rounded-md border-2 px-2 py-1 font-bold hover:bg-rose-300 hover:bg-opacity-30"
              form={`${compId}-form`}
            >
              설정하기
            </button>
          </div>
        </section>
        <div className="rounded-md border-2 p-2">
          <h4 className="font-bold">현재 세팅</h4>
          <p>
            w1:{" "}
            {w1 ?? (
              <span className="font-bold text-neutral-500 text-opacity-50">
                적으세요
              </span>
            )}
          </p>
          <p>
            w2:{" "}
            {w2 ?? (
              <span className="font-bold text-neutral-500 text-opacity-50">
                적으세요
              </span>
            )}
          </p>
          <p>
            bias:{" "}
            {bias ?? (
              <span className="font-bold text-neutral-500 text-opacity-50">
                적으세요
              </span>
            )}
          </p>
        </div>
        <div className="rounded-md border-2 p-2">
          <h4 className="font-bold">진리표</h4>
          <ul className="text-center">
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
              <p>
                {computePerceptron(0, 0) ?? (
                  <span className="font-bold text-neutral-500 text-opacity-50">
                    ??
                  </span>
                )}
              </p>
            </li>
            <li className="grid grid-cols-4">
              <p>0</p>
              <p>1</p>
              <p>{props.y01}</p>
              <p>
                {computePerceptron(0, 1) ?? (
                  <span className="font-bold text-neutral-500 text-opacity-50">
                    ??
                  </span>
                )}
              </p>
            </li>
            <li className="grid grid-cols-4">
              <p>1</p>
              <p>0</p>
              <p>{props.y10}</p>
              <p>
                {computePerceptron(1, 0) ?? (
                  <span className="font-bold text-neutral-500 text-opacity-50">
                    ??
                  </span>
                )}
              </p>
            </li>
            <li className="grid grid-cols-4">
              <p>1</p>
              <p>1</p>
              <p>{props.y11}</p>
              <p>
                {computePerceptron(1, 1) ?? (
                  <span className="font-bold text-neutral-500 text-opacity-50">
                    ??
                  </span>
                )}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
});
