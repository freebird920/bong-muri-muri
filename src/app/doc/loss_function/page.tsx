import { memo, useCallback, useLayoutEffect, useState } from "react";

type GpaScoreData = {
  admit: 0 | 1;
  gre: number;
  gpa: number;
  rank: number;
};
const DocLossFunctionPage = memo(() => {
  const [gpascoreData, setGpascoreData] = useState<GpaScoreData | null>(null);
  const fetchJsonData = useCallback(async (): Promise<GpaScoreData> => {
    const res = await fetch("/data/gpascore.json");
    if (!res.ok) throw new Error("No gpascore.json");
    const data = (await res.json()) as GpaScoreData;
    setGpascoreData(data);
    return data;
  }, []);
  useLayoutEffect(() => {
    fetchJsonData();
  }, [fetchJsonData]);
  return (
    <article className="container mx-auto">
      <div>{gpascoreData === null ? "Loading" : "Loaded"}</div>
      <section>
        <h2 className="text-xl font-extrabold">Loss Function</h2>
      </section>
      <section>
        <div className="grid grid-cols-2">
          <div></div>
        </div>
      </section>
    </article>
  );
});
DocLossFunctionPage.displayName = "DocLossFunctionPage";
export default DocLossFunctionPage;
