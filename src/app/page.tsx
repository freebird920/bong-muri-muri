import { memo } from "react";
import wallpaper from "../assets/wallpaper.png";
const HomePage = memo(() => {
  return (
    <>
      <img src={wallpaper} className="select-none"></img>
    </>
  );
});
HomePage.displayName = "HomePage";
export default HomePage;
