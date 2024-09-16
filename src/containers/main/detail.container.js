import React from "react";
import styled from "styled-components";
import ThumbnailComponet from "../../components/main/list/thumbnail.componet";
import DescriptionComponet from "../../components/main/list/description.componet";
import TitleComponet from "../../components/main/list/title.componet";
function DetailContainer(props) {
  return (
    <Container>
      <TitleComponet />
      <RowColSection>
        <ThumbnailComponet />
        <DescriptionComponet />
      </RowColSection>
    </Container>
  );
}

export default DetailContainer;

const Container = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "GmarketSansTTFLight";
`;
const RowColSection = styled.div`
  display: flex;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
