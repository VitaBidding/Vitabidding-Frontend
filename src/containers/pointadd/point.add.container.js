import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PointaddTitle from "../../components/pointadd/pointadd.title";
import PointPurchaseAmount from "../../components/pointadd/point.purchase.amount";
import MethodOfPayment from "../../components/pointadd/method.of.payment";
import CashPayment from "../../components/pointadd/cash.payment";
function PointAddContainer() {
  const [purchasePoint, setpurchasePoint] = useState(5000);
  const [cashPayment, setcashPayment] = useState(0);

  useEffect(() => {
    // 구매 포인트가 변경될 때마다 결제 금액을 계산하고 소수점 없이 반올림
    setcashPayment(Math.round(purchasePoint * 1.1));
  }, [purchasePoint]);

  return (
    <Wrapper>
      <Section1>
        <PointaddTitle />
      </Section1>
      <Section2>
        <PointPurchaseAmount
          setpurchasePoint={setpurchasePoint}
          purchasePoint={purchasePoint}
        />
      </Section2>
      <Section3>
        <MethodOfPayment />
      </Section3>
      <Section4>
        <CashPayment cashPayment={cashPayment} />
      </Section4>
    </Wrapper>
  );
}

export default PointAddContainer;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 800px;
  grid-template-rows: repeat(10, 1fr);
`;

const Section1 = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
`;
const Section2 = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2 / 5;
`;
const Section3 = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 5 / 9;
`;
const Section4 = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 9 / 11;
`;
