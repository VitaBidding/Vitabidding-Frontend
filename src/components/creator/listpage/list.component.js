import React, { useEffect, useState } from "react";

import styled from "styled-components";
import ListStatusComponent from "./list.status.component";
import ListData from "./list.data";
import UpdateModal from "./update.modal";
import TrackingModal from "./tracking.modal";
import { fetchProducts } from "../../../lib/request";
import KakaoImage from "../../../assets/img/KakaoTalk_20221126_235103258.png";
import AImge from "../../../assets/img/vitaBiddingLogo.png";
import BImg from "../../../assets/img/ticket.png";
import CImg from "../../../assets/img/명품수석.png";
import DImg from "../../../assets/img/vitaBiddingLogoBlack.png";
function ListComponent(props) {
  const [products, setProducts] = useState([ {
    item_name: "비타비딩 로고",
    thumbnail: AImge,
    category: "디자인",
    item_status:"경매대기",
    detailed_description:
      " 브랜드의 얼굴을 완성하는 프리미엄 로고 디자인",    start_day: "2024-12-24",
      start_time: "12:30",
  },

  {
    item_name: "핸드 메이드 잠옷",
    thumbnail: KakaoImage, start_day: "2024-12-22",
    start_time: "12:30",
    category: "의류",    item_status:"거래완료",delivery_company:"우체국 택배",trackingNumber:"123456789101",
    detailed_description:
      "편안함과 스타일을 동시에!\n100% 핸드메이드로 제작된 특별한 잠옷입니다.\n부드럽고 내추럴한 소재로 제작되어 피부에 자극 없이 편안하게 입으실 수 있습니다.\n디테일 하나하나 정성을 담아 제작된 이 잠옷은 하루의 피로를 풀어주고 숙면을 도와줍니다.\n\n특징\n\n프리미엄 소재: 통기성이 우수한 고급 면 소재로 여름철에도 쾌적함을 유지해줍니다.\n편안한 핏: 몸을 편안하게 감싸주는 여유 있는 핏으로 하루 종일 입고 싶어질 편안함을 선사합니다.\n섬세한 핸드메이드: 각 제품이 장인의 손길을 거쳐 정성스럽게 제작되었습니다.",
  },

  { item_name: "S석 스탠딩 티켓",  detailed_description:"이 티켓은 당신이 선호하는 공연이나 스포츠 이벤트에서 가장 가까운 자리에서 최고의 경험을 선사합니다. 환상적인 무대와 가장 가까운 거리에서의 관람을 통해, 잊을 수 없는 순간을 직접 느껴보세요.",  item_status:"경매대기",    start_day: "2024-12-24",
    start_time: "12:30", thumbnail: BImg, category: "티켓/교환권" },
  ,
  { item_name: "감정(인) 명품 수석",   detailed_description:"이 수석은 자연이 빚어낸 독창적인 작품으로, 단 하나뿐인 예술적 가치를 지닌 명품 수석입니다. 전문가의 감정을 거쳐 그 진귀함과 가치가 입증된 이 수석은 자연이 주는 아름다움을 고스란히 담고 있습니다.",   item_status:"경매대기",    start_day: "2024-12-24",
    start_time: "12:30",thumbnail: CImg, category: "기타" },
  ,
  { item_name: "비타비딩 블랙 로고",  detailed_description:
    "이 로고는 심플하면서도 강렬한 시각적 요소를 통해 브랜드의 정체성을 효과적으로 전달합니다. 세련된 디자인과 고유의 색감 조합으로, 모든 산업 분야에서 활용 가능하며 전문성과 신뢰감을 동시에 표현합니다.",  item_status:"경매대기", thumbnail: DImg,    start_day: "2024-12-24",
    start_time: "12:30", category: "디자인" }, ]);
  const [effect, seteffect] = useState(0);
  useEffect(() => {
    fetchProducts()
      .then((res) => {
        if (res) {
          setProducts(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [effect]);

  const [show, setShow] = useState(false);
  const [upproduct, setupproduct] = useState({});
  const handleClose = () => {
    seteffect(effect + 1);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [Tshow, setTShow] = useState(false);
  const ThandleClose = () => {
    setTShow(false);
    seteffect("t");
  };
  const ThandleShow = () => setTShow(true);
  return (
    <Wrapper>
      <UpdateModal
        show={show}
        handleClose={handleClose}
        upproduct={upproduct}
      />
      <TrackingModal show={Tshow} handleClose={ThandleClose} />
      <Title>상품 조회/수정</Title>
      <ListStatusComponent products={products} />
      <ListData
        products={products}
        handleShow={handleShow}
        ThandleShow={ThandleShow}
        setupproduct={setupproduct}
      />
    </Wrapper>
  );
}

export default ListComponent;
const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Title = styled.div``;
