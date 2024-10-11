import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import ErrorBoundary from "./error.boundary";
import { useSelector } from "react-redux";
import {
  selectsearch,
  search,
} from "../../../redux/features/search/search.slice";
import { getItemData } from "../../../lib/request";
import { useDispatch } from "react-redux";
import EX from "../../../assets/img/KakaoTalk_20221126_235103258.png"
import EX1 from "../../../assets/img/ex1.png"
import EX2 from "../../../assets/img/ex2.png"
import EX3 from "../../../assets/img/ex3.png"
import EX4 from "../../../assets/img/ex4.png"
import EX5 from "../../../assets/img/ex5.png"
import EX6 from "../../../assets/img/ex6.png"
import EX7 from "../../../assets/img/ex7.png"
import EX8 from "../../../assets/img/ex8.png"
import EX9 from "../../../assets/img/ex9.png"
import EX10 from "../../../assets/img/ticket.png"
import EX11 from "../../../assets/img/명품수석.png"
function ListComponent(props) {
  const searchOn = useSelector(selectsearch);

  const [cardData, setcardData] = useState([{
    id: "1",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "핸드메이드 옷",
    description:
      "1한정 실발 솰라솰라솰라 abcdeCSS에서는 overflow 속성을 통해서 주어진 공간이 모자라 넘치는 컨텐츠를 어떻게 보여줄지를 제어합니다. 이번 포스팅에서는 크기가 제한된 영역에서 많은 양의",
    category: "11의류",
    thumbnail: EX,
    item_status: "경매대기",
    price: "1,000",
    trackingNumber: "",
    bid_price: "5,000,000",
    view_fk_nickname: "2빅슬릿",
    view_fk_name: "111이동규",
    view_fk_address: "부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "01080080544",
    Creator: {nick_name:"크리에이터ABC"}
  },
  {
    id: "2",
    start_day: "2024-12-24",
    start_time: "22:30",
    name: "가방을 팔 수 있을련가",
    description:
      "12한정 실발 솰라솰라솰라 abcdeCSS에서는 overflow 속성을 통해서 주어진 공간이 모자라 넘치는 컨텐츠를 어떻게 보여줄지를 제어합니다. 이번 포스팅에서는 크기가 제한된 영역에서 많은 양의",
    category: "취미/게임/음반",
    thumbnail: EX1,
    item_status: "경매중",
    price: "120,000",
    trackingNumber: "223456789012345678",
    delivery_company: "cj대한통운",
    bid_price: "2,000,000",
    view_fk_nickname: "2빅슬릿",
    view_fk_name: "121이동규",
    view_fk_address:
      "2부산광역시 수영구 연수로 285 3층 2부산광역시 수영구 연수로 285 3층 2부산광역시 수영구 연수로 285 3층 2부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "02080080544",
    Creator: {nick_name:"비타비딩"}
  },
  {
    id: "3",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "컬렉션 한정판 신발 길이가 더크면 어떻게 되나",
    description: "한정 실발 좔라어ㅏㄹㅁ머라야솰라솰라 ",
    category: "의류",
    thumbnail: EX2,
    item_status: "결제완료",
    price: "100,000",
    trackingNumber: "",
    bid_price: "5,000,000",
    view_fk_nickname: "빅슬릿",
    view_fk_name: "이동규",
    view_fk_address: "부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "01080080544",
    Creator: {nick_name:"크리에이터 명"}
  },
  {
    id: "6",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "이 그림은 뭐라 검색해서 나온걸까? 이름 짓기 힘드네",
    description:
      "한정 실발 솰라솰라솰라 abcdeCSS에서는 overflow 속성을 통해서 주어진 공간이 모자라 넘치는 컨텐츠를 어떻게 보여줄지를 제어합니다. 이번 포스팅에서는 크기가 제한된 영역에서 많은 양의",
    category: "의류",
    thumbnail: EX3,
    item_status: "배송진행",
    price: "240,000",
    trackingNumber: "123456789012345678",
    bid_price: "5,000,000",
    view_fk_nickname: "빅슬릿",
    view_fk_name: "이동규",
    view_fk_address: "부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "01080080544",
    Creator: {nick_name:"블랙로고"}
  },
  {
    id: "4",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "컬렉션 고양이 전용 안경 나만 없어 고양이",
    description:
      "한정 실발 솰라솰라솰라 abcdeCSS에서는 overflow 속성을 통해서 주어진 공간이 모자라 넘치는 컨텐츠를 어떻게 보여줄지를 제어합니다. 이번 포스팅에서는 크기가 제한된 영역에서 많은 양의",
    category: "의류",
    thumbnail: EX4,
    item_status: "경매대기",
    price: "40,000",
    trackingNumber: "123456789012345678",
    bid_price: "5,000,000",
    view_fk_nickname: "빅슬릿",
    view_fk_name: "이동규",
    view_fk_address: "부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "01080080544",
    Creator: {nick_name:"유미할때라면"}
  },
  {
    id: "5",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "중장비나 자동차도 경매 가능 할까?",
    description:
      "한정 실발 솰라솰라솰라 abcdeCSS에서는 overflow 속성을 통해서 주어진 공간이 모자라 넘치는 컨텐츠를 어떻게 보여줄지를 제어합니다. 이번 포스팅에서는 크기가 제한된 영역에서 많은 양의",
    category: "의류",
    thumbnail: EX5,
    item_status: "경매대기",
    price: "100,000,000",
    trackingNumber: "123456789012345678",
    bid_price: "5,000,000",
    view_fk_nickname: "빅슬릿",
    view_fk_name: "이동규",
    view_fk_address: "부산광역시 수영구 연수로 285 3층",
    view_fk_phone: "01080080544",
    Creator: {nick_name:"다함께차차차"}
  },
  {
    id: "7",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "한정판 도서 이런건 오히려 구매자 모으기가 쉽지 않을 듯?",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX6,
    item_status: "경매대기",
    price: "2,000,000",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"책읽어주는ASMR"}
  },
  {
    id: "8",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "공연 티켓 이건 +@ 를 해서 팔면 불법 이려나?",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX7,
    item_status: "경매대기",
    price: "500,000",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"노는게제일좋아"}
  },
  {
    id: "9",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "한정판 앨범 목록을 구성하다보니 확실히 카테고리가 필요하다",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX8,
    item_status: "경매대기",
    price: "241,200",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"블랙핑크조아"}
  },
  {
    id: "10",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "장식품 크리에이터가 직접만든 금 코끼리",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX9,
    item_status: "경매대기",
    price: "5,000,000",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"대장장이"}
  },
  {
    id: "11",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "티켓값은 진짜 한정적 판매일지도?",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX10,
    item_status: "경매대기",
    price: "10,000",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"실시간경매플렛폼"}
  },
  {
    id: "12",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "난 수석의 가치를 몰라 판단해줘",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX11,
    item_status: "경매대기",
    price: "5,000",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"비타비딩"}
  },
  {
    id: "13",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "컬렉션 한정판 신발 길이가 더크면 어떻게 되나",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX,
    item_status: "경매대기",
    price: "1,111",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"크리에이터 명"}
  },
  {
    id: "14",
    start_day: "2024-12-24",
    start_time: "12:30",
    name: "컬렉션 한정판 신발 길이가 더크면 어떻게 되나",
    description: "한정 실발 솰라솰라솰라",
    category: "의류",
    thumbnail: EX,
    item_status: "경매대기",
    price: "1,111",
    trackingNumber: "123456789012345678",
    Creator: {nick_name:"크리에이터 명"}
  },]);
  console.log("🚀 ~ ListComponent ~ cardData:", cardData)
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setcardsPerPage] = useState(8);
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Skeleton loading state
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef(null);
  const dispatch = useDispatch();

  const filterAndSortData = (data) => {
    const filteredData = data.filter(

      (item) =>
        item.item_name.includes(searchOn) ||
        item.category.includes(searchOn) ||
        item.Creator.nick_name.includes(searchOn)
    );

    const sortedData = filteredData.sort((a, b) => {
      const dateA = new Date(`${a.start_day}T${a.start_time}`);
      const dateB = new Date(`${b.start_day}T${b.start_time}`);
      return dateA - dateB;
    });

    return sortedData;
  };
  const fetchItemData = async () => {
    try {
      const data = await getItemData();
      const filter = filterAndSortData(data);
      setcardData(filter); // 기존 데이터를 덮어씁니다
      setCurrentPage(1); // 데이터가 변경되면 첫 페이지로 돌아갑니다
    } catch (err) {
      console.error("Failed to fetch item data:", err);
    }
  };
  useEffect(() => {
    dispatch(search(""));
    fetchItemData();
  }, []);

  useEffect(() => {
    fetchItemData();
  }, [searchOn]);
  useEffect(() => {
    // Simulating loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const calculateHeight = () => {

 

      if (componentRef.current) {
        const width = componentRef.current.offsetWidth;

        if (width > 1800) {
          setcardsPerPage(12);
        } else if (width > 1483) {
          setcardsPerPage(10);
        } else if (width > 1190) {
          setcardsPerPage(8);
        } else {
          setcardsPerPage(6);
        }
      }
    };
    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const navigate = useNavigate();
  const DetailPage = (e) => {
    navigate(`/auction/${e.id}`, { state: e });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper ref={componentRef}>
      {isLoading ? (
        <SkeletonWrapper>
          {Array.from({ length: cardsPerPage }).map((_, index) => (
            <SkeletonCard key={index}>
              <SkeletonImage />
              <SkeletonTitle />
              <SkeletonDateSection />
              <SkeletonCreatorNicname />
              <SkeletonPrice />
            </SkeletonCard>
          ))}
        </SkeletonWrapper>
      ) : (
        <ErrorBoundary>
          <CardContainer>
            {currentCards.map((card) => (
              <Card key={card.id} onClick={() => DetailPage(card)}>
                <ProductImage
                  src={card.thumbnail}
                  alt="Product"
                />
                <TitleSection>
                  <Title>{card.name}</Title>
                </TitleSection>
                <DateSection>
                  <Startday>{card.start_day}</Startday>
                  <StartTime>{card.start_time}</StartTime>
                </DateSection>
                <CreatorNicname>{card.Creator.nick_name}</CreatorNicname>
                <Row>
                  <PriceComment>경매 시작가</PriceComment> <Price>
                    {card.price}
                    </Price>
                    <PriceUnit> 포인트</PriceUnit>
                  </Row>
              </Card>
            ))}
    </CardContainer>
    <PaginationWrapper>
  <Pagination>
    {Array.from({ length: totalPages }).map((_, index) => (
      <Pagination.Item
        key={index + 1}
        active={index + 1 === currentPage}
        onClick={() => handlePageChange(index+1)}
      >
        {index + 1}
      </Pagination.Item>
    ))}
  </Pagination>
</PaginationWrapper>
        </ErrorBoundary>
      )}
     
    </Wrapper>
  );
}

export default ListComponent;

const Wrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  width: 100%;
  padding: 0 14px;
  justify-content: center;
`;
const Card = styled.div`
  width: 100%;
  max-width: 280px;
  height: 340px;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  /* border: 1px solid red; */
  border-radius: 10px;
  width: 100%;
  height: 260px;
  object-fit: cover;
  margin: 0px;
  &:hover {
    /* border: 1px solid #000; 보더 스타일 설정 */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 스타일 설정 */
    cursor: pointer;
  }
`;

const TitleSection = styled.div`
  display: flex;
`;
const Title = styled.h1`
  /* border: 1px solid red; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 280px;
  height: 20px;
  font-size: 14px;
  margin: 5px 0 0 0;

  font-family: "NotoSansKR-Bold";
  color: black;
`;

const DateSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  display: flex;
  width: 280px;
  height: 16px;
  font-size: 12px;
  margin: 0 0 0 0;
  font-family: "GmarketSansTTFMedium";
`;
const Startday = styled.div`
  margin: 0 0 0 0;
`;
const StartTime = styled.div`
  margin: 0 0 0 5px;
`;
const Row =styled.div`
display: flex;
flex-direction: row;
`
const PriceComment = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: gray;
  font-size: 16px;
  height: 20px;
  font-weight: 500;
  margin:  0 10px 0 0;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PriceUnit = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: gray;
  font-size: 16px;
  height: 20px;
  font-weight: 500;
  margin:  0  0 0 5px;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: black;
  font-size: 16px;
  height: 20px;
  font-weight: bolder;
  margin: 0 0 0 0;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CreatorNicname = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: black;
  height: 20px;
  margin: 0 0 0 0;
  font-family: "GmarketSansTTFMedium";
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  justify-content: center;
  width: 100%;
  padding: 14px;
`;

const SkeletonCard = styled.div`
  width: 100%;
  max-width: 280px;
  height: 360px;
  justify-self: center;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

const SkeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  background-color: #ddd;
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

const SkeletonTitle = styled.div`
  width: 100%;
  height: 20px;
  margin: 5px 0 0 0;
  background-color: #ddd;
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

const SkeletonDateSection = styled.div`
  width: 100%;
  height: 12px;
  margin: 2px 0 0 0;
  background-color: #ddd;
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

const SkeletonPrice = styled.div`
  width: 100%;
  height: 18px;
  margin: 2px 0 0 0;
  background-color: #ddd;
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

const SkeletonCreatorNicname = styled.div`
  width: 100%;
  height: 18px;
  margin: 2px 0 0 0;
  background-color: #ddd;
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

const PaginationWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100%;
  max-width: 1200px; // 최대 너비 설정
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
