import React, { useState } from "react";
import styled from "styled-components";
import Info from "../../../components/Creator/info/Info";
import MailVerify from "../../../components/Creator/info/MailVerify";
function InfoContainers(props) {
  const [Maildisplay, setMaildisplay] = useState(true); //info 컨테이너 작성후 활성화
  // const [Maildisplay, setMaildisplay] = useState(false); // info 컨테니어 작성후 비활성화
  return (
    <Section>
      <MailVerifySection>{!Maildisplay && <MailVerify setMaildisplay={setMaildisplay} />}</MailVerifySection>
      <InfoSection>{Maildisplay && <Info />}</InfoSection>
    </Section>
  );
}

export default InfoContainers;

const Section = styled.div`
  width: 100%;
`;
const MailVerifySection = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;
const InfoSection = styled.div``;
