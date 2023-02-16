import Wrapper from "./wr-Technology";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import TechNav from "../../Components/Tech/TechNav";
import Node from "../../Components/Tech/Node";

const Technology = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <div className="content">
        <TechNav />
        <Node />
      </div>
    </Wrapper>
  );
};

export default Technology;
