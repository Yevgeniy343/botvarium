import styled from "styled-components";

const Node = ({ item, hasChildren, level, onToggle, search }) => {
  return (
    <Wrapper>
      <div
        className="node"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={onToggle}
      >
        <p className="item-label">{item.label}</p>
        {hasChildren ? "  +" : " "}
        {/* {hasChildren && <button onClick={onToggle}>toggle</button>} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: var(--transition2);
  height: 100%;
  .node {
    display: flex;
    height: 100%;

    max-width: 100%;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 1.3rem;
    cursor: pointer;

    :hover {
      transition: var(--transition2);
      background-color: var(--theme-ui-colors-green05);
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Node;
