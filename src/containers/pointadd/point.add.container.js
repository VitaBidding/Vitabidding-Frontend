import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PointaddTitle from "../../components/pointadd/pointadd.title";
import PointPurchaseAmount from "../../components/pointadd/point.purchase.amount";
import MethodOfPayment from "../../components/pointadd/method.of.payment";
import CashPayment from "../../components/pointadd/cash.payment";
import { getUserInfo, requestPointCharge } from "../../lib/request"; // 경로는 실제 위치에 맞게 수정

function PointAddContainer() {
  const [purchasePoint, setpurchasePoint] = useState(5000);
  const [cashPayment, setcashPayment] = useState(0);
  const [depositorName, setdepositorName] = useState("");
  const [view_fk_phone, setview_fk_phone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      console.log("🚀 ~ fetchUserInfo ~ userInfo:", userInfo);
      if (userInfo) {
        setdepositorName(userInfo.realName || "");
        setview_fk_phone(userInfo.phone?.replace(/-/g, "") || "");
      }
      setLoading(false);
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    // 구매 포인트가 변경될 때마다 결제 금액을 계산하고 소수점 없이 반올림
    setcashPayment(Math.round(purchasePoint * 1.1));
  }, [purchasePoint]);

  const handlePointCharge = async () => {
    const chargeData = {
      requestedPoints: Number(purchasePoint),
      depositorName: depositorName,
      phoneNumber: view_fk_phone,
    };

    const result = await requestPointCharge(chargeData);
    if (result) {
      alert("포인트 충전 요청이 완료되었습니다.");
      window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/pointadd/acconttransfer`;
    } else {
      alert("포인트 충전 요청에 실패했습니다.");
    }
  };

  if (loading) {
    return <Wrapper>로딩 중...</Wrapper>;
  }
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
        <MethodOfPayment
          depositorName={depositorName}
          setdepositorName={setdepositorName}
          view_fk_phone={view_fk_phone}
          setview_fk_phone={setview_fk_phone}
        />
      </Section3>
      <Section4>
        <CashPayment
          cashPayment={cashPayment}
          depositorName={depositorName}
          view_fk_phone={view_fk_phone}
          onCharge={handlePointCharge}
        />
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
