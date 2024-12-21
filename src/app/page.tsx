import { memo } from "react";
import SigmoidChart from "../components/SigmoidChar";
const HomePage = memo(() => {
  return (
    <>
      <h1 className="text-2xl font-extrabold">
        봉우리코더 딥러닝 연구회(봉딥연)
      </h1>
      <SigmoidChart />
    </>
  );
});
HomePage.displayName = "HomePage";
export default HomePage;
