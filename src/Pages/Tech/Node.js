import Wrapper from "./wr-Tech";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import TechNav from "../../Components/Tech/TechNav";

const Node = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <TechNav />
    </Wrapper>
  );
};

export default Node;
