import React from "react";
import styled from "styled-components";
import WidgetContainer from "../../../containers/creator/widget.container";

function Widgetpage(props) {
  return (
    <Wrapper>
      <WidgetContainer />
    </Wrapper>
  );
}

export default Widgetpage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
  height: 90%;
  margin: 30px 0;
`;
