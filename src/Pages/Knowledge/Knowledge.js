import Wrapper from "./wr-Knowlrdge";
import Navbar from "../../Components/Navigation/Navbar";
import Cloud from "../../Components/Cloud/Cloud";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";

const Knowledge = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <Cloud />
    </Wrapper>
  );
};

export default Knowledge;
