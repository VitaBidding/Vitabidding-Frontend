import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Account } from "../../../lib/request";
import NonAccount from "./non.account";
function MyAccount() {
  const [included, setincluded] = useState(false);

  useEffect(() => {
    Account()
      .then((res) => setincluded(res))
      .catch((err) => console.err(err));
  }, []);
  return (
    <Wrapper>
      {included ? <div>account infomaition</div> : <NonAccount />}
    </Wrapper>
  );
}

export default MyAccount;

const Wrapper = styled.div``;
