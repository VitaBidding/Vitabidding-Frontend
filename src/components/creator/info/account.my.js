import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Accountreq } from "../../../lib/request";
import NonAccount from "./account.non";
import AccountInfoComponent from "./account.info";

function MyAccount() {
  const [AccountInfo, setaccountInfo] = useState(false);

  useEffect(() => {
    Accountreq()
      .then((res) => {
        return setaccountInfo(res);
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <Wrapper>
      {AccountInfo ? (
        <AccountInfoComponent AccountInfo={AccountInfo} />
      ) : (
        <NonAccount />
      )}
    </Wrapper>
  );
}

export default MyAccount;

const Wrapper = styled.div``;
