import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ex from "../../../assets/img/KakaoTalk_20221126_235103258.png";
import WaitingForpaymentItem from "./waiting.for.payment.item";
import { WaitingForpaymentitemapi } from "../../../lib/request";
function WaitingForpayment(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      title:
        "제품이름 넣는 곳 정하는 중 AONE CRUISE GP-943 점보 게이밍 장패드  AONE CRUISE GP-943 점보 게이밍 장패드  AONE CRUISE GP-943 점보 게이밍 장패드 AONE CRUISE GP-943 점보 게이밍 장패드  ",
      startDate: "2023-07-10",
      startTime: "14:18",
      creator: "판매자이름1",
      price: "300000",
      category: "의류",
      description:
        "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!",
      Thumbnail: Ex,
      deliveryfee: "3,000",
    },
    {
      id: 2,
      title: "제품 넣는 곳 정하는 중",
      startDate: "2023-09-27",
      startTime: "11:00",
      creator: "판매자이름2",
      price: "300000",
      category: "의류",
      description:
        "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!",
      Thumbnail: Ex,
      deliveryfee: "3,000",
    },
    {
      id: 3,
      title: "제품 넣는 곳 정하는 중",
      startDate: "2023-09-27",
      startTime: "11:00",
      creator: "판매자이름2",
      price: "300,000",
      category: "의류",
      description:
        "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!",
      Thumbnail: Ex,
      deliveryfee: "3,000",
    },
    {
      id: 4,
      title: "제품 넣는 곳 정하는 중",
      startDate: "2023-09-27",
      startTime: "11:00",
      creator: "판매자이름2",
      price: "300,000",
      category: "의류",
      description:
        "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!",
      Thumbnail: Ex,
      deliveryfee: "3,000",
    },
    {
      id: 5,
      title: "제품 넣는 곳 정하는 중",
      startDate: "2023-09-27",
      startTime: "11:00",
      creator: "판매자이름2",
      price: "300000",
      category: "의류",
      description:
        "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!",
      Thumbnail: Ex,
      deliveryfee: "3,000",
    },
  ]);

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
