import Navbar from "../Components/Navigation/Navbar";
import MpLine1 from "../Components/MainPage/MpLine1";
import MpLine2 from "../Components/MainPage/MpLine2";
import MpLine3 from "../Components/MainPage/MpLine3";
import MpLine4 from "../Components/MainPage/MpLine4";
import Wrapper from "../Pages/wr-MainPage";

const MainPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <MpLine1 />
      <MpLine2 />
      {/* <MpLine3 />
      <MpLine4 /> */}
    </Wrapper>
  );
};

export default MainPage;
