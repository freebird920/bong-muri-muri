import { memo, useCallback, useEffect, useState } from "react";

type BodyData = {
  weight: number;
  height: number;
};
const DocPractice01Page = memo(() => {
  const [bodyInfo, setBodyInfo] = useState<BodyData[]>([]);
  const fetchJsonData = useCallback(async (): Promise<BodyData[]> => {
    const res = await fetch("/data/pigs.json");
    if (!res.ok) throw new Error("No pigs.json");
    const data = (await res.json()) as BodyData[];
    setBodyInfo(data);
    return data;
  }, []);
  const calculateBMI = (weight: number, height: number): number => {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  useEffect(() => {
    fetchJsonData();
  }, [fetchJsonData]);
  return (
    <>
      <ul>
        {bodyInfo.map((element: BodyData, index: number) => {
          return (
            <li key={`bodyInfo-${element}-${index}`}>
              <p>{element.height}</p>
              <p>{element.weight}</p>
              <p>{calculateBMI(element.weight, element.height)}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
});

DocPractice01Page.displayName = "DocPractice01Page";
export default DocPractice01Page;
