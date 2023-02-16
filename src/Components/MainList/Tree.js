import Wrapper from "./wr-Tree";
import { useState } from "react";
import Branch from "./Branch";
import treeData from "./TreeData";

const Tree = () => {
  console.log(treeData);
  return (
    <Wrapper>
      {treeData.map((item) => (
        <Branch key={item.id} item={item} level={0} />
      ))}
    </Wrapper>
  );
};

export default Tree;
