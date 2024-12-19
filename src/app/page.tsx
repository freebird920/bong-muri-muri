import { memo } from "react";
const HomePage = memo(() => {
  return (
    <>
      <h1 className="text-2xl font-extrabold">
        봉우리코더 딥러닝 연구회(봉딥연)
      </h1>
    </>
  );
});
HomePage.displayName = "HomePage";
export default HomePage;
