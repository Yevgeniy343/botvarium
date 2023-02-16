import Wrapper from "./wr-Tech";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import Tree from "../../Components/MainList/Tree";

const Node = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <Tree />
    </Wrapper>
  );
};

export default Node;
