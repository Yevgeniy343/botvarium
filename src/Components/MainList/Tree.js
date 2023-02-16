import Wrapper from "./wr-Tree";
import Branch from "./Branch";
import treeData from "./TreeData";
import React, { useEffect } from "react";
import { treeDataHandler } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Tree = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(treeDataHandler(treeData), []);
  });
  return (
    <Wrapper>
      {treeData.map((item) => (
        <Branch key={item.id} item={item} level={0} />
      ))}
    </Wrapper>
  );
};

export default Tree;
