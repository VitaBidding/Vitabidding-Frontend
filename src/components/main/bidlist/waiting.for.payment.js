import React, { useEffect, useState } from "react";
import styled from "styled-components";

import WaitingForpaymentItem from "./waiting.for.payment.item";
import { WaitingForpaymentitemapi } from "../../../lib/request";
function WaitingForpayment(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await WaitingForpaymentitemapi(); // API 엔드포인트에 맞게 수정해주세요.
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <ItemList>
      <ItemCount>총 {items.length}개의 결제대기 있습니다.</ItemCount>
      <ItemSection>
        {items.map((item) => (
          <WaitingForpaymentItem key={item.id} item={item} />
        ))}
      </ItemSection>
    </ItemList>
  );
}

export default WaitingForpayment;

const ItemList = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemCount = styled.div`
  /* border: 1px solid blue; */
  @media only screen and (max-width: 360px) {
    width: 260px;
  }
  @media only screen and (min-width: 360px) {
    width: 340px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 992px) {
    width: 900px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
`;
