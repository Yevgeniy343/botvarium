import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import MpLine1 from "../Components/MainPage/MpLine1";
import MpLine2 from "../Components/MainPage/MpLine2";
import MpLine3 from "../Components/MainPage/MpLine3";
import MpLine4 from "../Components/MainPage/MpLine4";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <MpLine1 />
      <MpLine2 />
      {/* <MpLine3 />
      <MpLine4 /> */}
    </div>
  );
};

export default MainPage;
