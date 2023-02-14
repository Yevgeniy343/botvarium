import Navbar from "../Components/Navigation/Navbar";
import MpLine1 from "../Components/MainPage/MpLine1";
import MpLine2 from "../Components/MainPage/MpLine2";
import MpLine3 from "../Components/MainPage/MpLine3";
import MpLine4 from "../Components/MainPage/MpLine4";
import Wrapper from "../Pages/wr-MainPage";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Sidebar from "../Components/Navigation/Sidebar";
import SubMenu from "../Components/Navigation/SubMenu";

const MainPage = () => {
  const [state, setState] = useState(true);
  return (
    <ThemeProvider theme={state ? BaseTheme : BaseTheme2}>
      <Wrapper>
        {/* <Container onClick={() => setState(!state)}>
          <h3>Hello</h3>
        </Container> */}
        <Navbar />
        <Sidebar />
        <SubMenu />
        <MpLine1 />
        <MpLine2 />
        <MpLine3 />
        <div style={{ height: "300px" }}></div>
        {/* <MpLine4 /> */}
      </Wrapper>
    </ThemeProvider>
  );
};

const Container = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.background};
`;

const BaseTheme = {
  background: "red",
};
const BaseTheme2 = {
  background: "white",
};

export default MainPage;
