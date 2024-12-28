import {
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type GpaScoreData = {
  admit: 0 | 1;
  gre: number;
  gpa: number;
  rank: number;
};
const DocLossFunctionPage = memo(() => {
  const [w1, setW1] = useState<number | null>(null);
  const [w2, setW2] = useState<number | null>(null);
  const [w3, setW3] = useState<number | null>(null);
  const [bias, setBias] = useState<number | null>(null);
  const [lossSum, setLossSum] = useState<number>(0);
  const [gpascoreData, setGpascoreData] = useState<GpaScoreData[] | null>(null);
  const fetchJsonData = useCallback(async (): Promise<GpaScoreData[]> => {
    const res = await fetch("/data/gpascore.json");
    if (!res.ok) throw new Error("No gpascore.json");
    const data = (await res.json()) as GpaScoreData[];
    setGpascoreData(data);
    return data;
  }, []);
  const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const w1Raw = formData.get("w1");
    const w2Raw = formData.get("w2");
    const w3Raw = formData.get("w3");
    const bRaw = formData.get("b");
    if (
      typeof w1Raw !== "string" ||
      typeof w2Raw !== "string" ||
      typeof w3Raw !== "string" ||
      typeof bRaw !== "string"
    ) {
      return;
    }
    setW1(Number(w1Raw));
    setW2(Number(w2Raw));
    setW3(Number(w3Raw));
    setBias(Number(bRaw));
  }, []);
  useLayoutEffect(() => {
    fetchJsonData();
  }, [fetchJsonData]);
  /**
   * Computes the sigmoid function for a given input.
   * @param x - The input value.
   * @returns The sigmoid of the input.
   */
  const sigmoid = (x: number): number => {
    return 1 / (1 + Math.exp(-x));
  };
  /**
   * BCE의 시그마 내부 부분 계산
   * @param yTrue - 실제 라벨 (0 또는 1)
   * @param yPred - 예측 확률 (0과 1 사이의 값)
   * @returns 각 샘플의 손실 값
   */
  const binaryCrossEntropySample = (yTrue: number, yPred: number): number => {
    const epsilon = 1e-12;
    const yP = Math.min(Math.max(yPred, epsilon), 1 - epsilon);
    return -(yTrue * Math.log(yP) + (1 - yTrue) * Math.log(1 - yP));
  };
  useEffect(() => {
    if (gpascoreData) {
      const totalLoss = gpascoreData.reduce((sum, element) => {
        const { gpa, gre, rank, admit } = element;
        if (w1 !== null && w2 !== null && w3 !== null && bias !== null) {
          const prediction = sigmoid(gre * w1 + gpa * w2 + rank * w3 + bias);
          const loss = binaryCrossEntropySample(admit, prediction);
          return sum + loss;
        }
        return sum;
      }, 0);
      setLossSum(totalLoss);
    }
  }, [gpascoreData, w1, w2, w3, bias]); // 의존성 배열
  return (
    <article className="container mx-auto">
      <div>{gpascoreData === null ? "Loading" : "Loaded"}</div>
      <section>
        <h3>Active Function: Sigmoid</h3>
        <pre className="whitespace-break-spaces rounded-md border-2 p-2 font-mono text-sm">
          {`  /**\n   * Computes the sigmoid function for a given input.\n   * @param x - The input value.\n   * @returns The sigmoid of the input.\n   */\n  const sigmoid = (x: number): number => {\n    return 1 / (1 + Math.exp(-x));\n  };`}
        </pre>
      </section>
      <section>
        <h3 className="text-xl font-extrabold">Loss Function</h3>
        <pre className="whitespace-break-spaces rounded-md border-2 p-2 font-mono text-sm">
          {`/**\n * BCE의 시그마 내부 부분 계산\n * @param yTrue - 실제 라벨 (0 또는 1)\n * @param yPred - 예측 확률 (0과 1 사이의 값)\n * @returns 각 샘플의 손실 값\n */\nfunction binaryCrossEntropySample(yTrue: number, yPred: number): number {\n  const epsilon = 1e-12; // 로그(0) 방지용 작은 값\n  const yP = Math.min(Math.max(yPred, epsilon), 1 - epsilon); // [epsilon, 1 - epsilon] 범위로 클리핑\n  return - (yTrue * Math.log(yP) + (1 - yTrue) * Math.log(1 - yP));\n}`}
        </pre>
      </section>
      <section>
        <h3>예시 데이터 구조</h3>
        <ul className="grid grid-cols-4">
          <li className="flex flex-col">
            <p>admit </p>
            <p>합격여부</p>
          </li>
          <li className="flex flex-col">
            <p>gre</p>
            <p>시험점수</p>
          </li>
          <li className="flex flex-col">
            <p>gpa</p>
            <p>내신등급(4.5: A+)</p>
          </li>
          <li className="flex flex-col">
            <p>rank</p>
            <p>지원대학 등급(1~4, 1이 가장 높음)</p>
          </li>
        </ul>
        <div>손실 합 {lossSum}</div>
        <div>
          {lossSum / (gpascoreData !== null ? gpascoreData?.length : 1)}
        </div>
        <h3>나만의 퍼셉트론 만들기?!</h3>
        <form onSubmit={onFormSubmit} id="perceptron-form"></form>
        <div className="grid grid-cols-5">
          <div className="flex">
            <label htmlFor="input-gre">w1(gre)</label>
            <div className="shrink">
              <input
                name="w1"
                form="perceptron-form"
                id="input-gre"
                type="number"
                step="any"
                placeholder="null"
                className="w-full border-2"
              ></input>
            </div>
          </div>
          <div className="flex">
            <label htmlFor="input-gpa">w2(gpa)</label>
            <div className="shrink">
              <input
                form="perceptron-form"
                name="w2"
                id="input-gpa"
                type="number"
                step="any"
                placeholder="null"
                className="w-full border-2"
              ></input>
            </div>
          </div>

          <div className="flex">
            <label htmlFor="input-rank">w3(rank)</label>
            <div className="shrink">
              <input
                form="perceptron-form"
                placeholder="null"
                type="number"
                step="any"
                name="w3"
                id="input-rank"
                className="w-full border-2"
              ></input>
            </div>
          </div>
          <div className="flex">
            <label htmlFor="input-bias">b(bias)</label>
            <div className="shrink">
              <input
                name="b"
                form="perceptron-form"
                placeholder="null"
                type="number"
                step="any"
                id="input-bias"
                className="w-full border-2"
              ></input>
            </div>
          </div>
          <div>
            <button form="perceptron-form" type="submit">
              설정
            </button>
          </div>
          <div>{w1}</div>
          <div>{w2}</div>
          <div>{w3}</div>
          <div>{bias}</div>
        </div>
      </section>
      <section>
        <ul>
          <li className="grid grid-cols-6">
            <p>gre</p>
            <p>gpa</p>
            <p>rank</p>
            <p>admit</p>
            <p>prediction</p>
            <p>loss</p>
          </li>
          {gpascoreData &&
            gpascoreData.map((element, index: number) => {
              const { gpa, gre, rank, admit } = element;
              const prediction = () => {
                if (
                  w1 === null ||
                  w2 === null ||
                  w3 === null ||
                  bias === null
                ) {
                  return 0;
                }
                return sigmoid(gre * w1 + gpa * w2 + rank * w3 + bias);
              };
              const predictValue = prediction();
              const lossValue = binaryCrossEntropySample(admit, predictValue);

              return (
                <li
                  key={`${element.admit}-${element.gpa}-${index}`}
                  className="grid grid-cols-6"
                >
                  <p>{gre}</p>
                  <p>{gpa}</p>
                  <p>{rank}</p>
                  <p>{admit}</p>
                  <p className="truncate">{predictValue}</p>
                  <p className="truncate">{lossValue}</p>
                </li>
              );
            })}
        </ul>
      </section>
    </article>
  );
});
DocLossFunctionPage.displayName = "DocLossFunctionPage";
export default DocLossFunctionPage;
