import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TransactioncompletedItem from "./transaction.completed.item";
import { transactioncompleteditemapi } from "../../../lib/request";
function Transactioncompleted(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await transactioncompleteditemapi(); // API 엔드포인트에 맞게 수정해주세요.
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ItemList>
      <ItemCount>총 {items.length}개의 거래완료 건이 있습니다.</ItemCount>
      <ItemSection>
        {items.map((item) => (
          <TransactioncompletedItem key={item.id} item={item} />
        ))}
      </ItemSection>
    </ItemList>
  );
}

export default Transactioncompleted;

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
