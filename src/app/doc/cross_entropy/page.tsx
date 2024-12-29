import { memo } from "react";

const DocCrossEntropyPage = memo(() => {
  const informationContent = (p: number) => {
    if (p <= 0) return 0;
    return -1 * Math.log2(p);
  };
  // const partialEntropy = (p: number) => {
  //   if (p <= 0) return 0;
  //   return p * informationContent(p);
  // };
  // const entropy = (pArray: number[]) => {
  //   return pArray.reduce((acc, p) => acc + partialEntropy(p), 0);
  // };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2">
        <div className="flex w-full items-end justify-end">
          <a href="/doc" className="hover:underline">
            목록으로
          </a>
        </div>
        <h2 className="text-xl font-black">Cross Entropy</h2>
        <h3 className="font-extrabold">정보이론에서의 Entropy</h3>
        <p>Entropy는 불확실성을 말한다. 불확실성이 크면 정보량이 크다.</p>
        <h3>정보량</h3>
        <div className="rounded-md border-2 p-2">
          <pre className="whitespace-break-spaces font-mono">{`/**\n  * @param P: 사건이 일어날 확률\n  */\n  function informationContent(P:number){\n    if(P <= 0) return 0;\n    return -1 * P * Math.log2(P)\n  }`}</pre>
        </div>
        <div>
          <p>확률이 클 수록 정보량은 적다. 확률이 낮을 수록 정보량이 크다.</p>
        </div>
        <div className="rounded-md border-2 p-2">
          <ul className="">
            <li className="grid grid-cols-2 font-extrabold">
              <p>확률</p>
              <p>정보량</p>
            </li>
            {[1, 0.9, 0.5, 0.1, 0.01, 0.001].map((element) => {
              return (
                <li
                  key={`${element}-information-content-table`}
                  className="grid grid-cols-2"
                >
                  <p>{element}</p>
                  <p className="truncate">{informationContent(element)}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>
            엔트로피가 높다는 것은 확률이 균일하게 분포되어 있어서 어떤 결과
            나올지 알 수 없다는 것을 말함.
          </p>
          <p>
            만약 특정 값이 나올 확률이 높다는 것은 달리 말해 불확실성이
            줄어든다는 것을 말함. 따라서 엔트로피 값도 낮음
          </p>
          <p>주사위의 엔트로피</p>
        </div>
        <div>
          <pre className="whitespace-break-spaces">{`
        `}</pre>
        </div>
      </div>
    </div>
  );
});

DocCrossEntropyPage.displayName = "DocCrossEntropyPage";
export default DocCrossEntropyPage;
