import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CompletepaymentItem from "./complete.payment.item";
import { completepaymentitemapi } from "../../../lib/request";

function Completepayment(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await completepaymentitemapi(); // API 엔드포인트에 맞게 수정해주세요.
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <ItemList>
      <ItemCount>총 {items.length}개의 결제완료가 있습니다.</ItemCount>
      <ItemSection>
        {items.map((item) => (
          <CompletepaymentItem key={item.id} item={item} />
        ))}
      </ItemSection>
    </ItemList>
  );
}

export default Completepayment;

const ItemList = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemCount = styled.div`
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
