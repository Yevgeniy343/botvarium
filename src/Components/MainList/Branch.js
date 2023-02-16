import React, { useState } from "react";
import styled from "styled-components";

import Node from "./Node";
import { motion } from "framer-motion";

const variants1 = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Branch = ({ item, level, search }) => {
  const [selected, setSelected] = useState(item.selected ?? false);

  const hasChildren = item.children && item.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;

      return item.children.map((child) => {
        return <Branch key={child.id} item={child} level={newLevel} />;
      });
    }

    return null;
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <Wrapper>
      <motion.div variants={variants1} initial="hidden" animate="visible">
        <Node
          search={search}
          item={item}
          selected={selected}
          hasChildren={hasChildren}
          level={level}
          onToggle={toggleSelected}
        />

        {selected && renderBranches()}
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Branch;
