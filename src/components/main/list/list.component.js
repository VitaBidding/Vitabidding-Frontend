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
import vitaBiddingLogoBlack from "../../../assets/img/vitaBiddingLogoBlack.png";

import doucument1 from "../../../assets/img/321.png";
import doucument2 from "../../../assets/img/123.png";

function ListComponent(props) {
  const searchOn = useSelector(selectsearch);

  const [cardData, setcardData] = useState([
    {
      id: 1,
      thumbnail: vitaBiddingLogoBlack,
      name: "비타비딩로고",
      start_day: "시작날짜",
      start_time: "시작시간",
      Creator: { nick_name: "비타비딩" },
      price: "10000",
    },
    {
      id: 2,
      thumbnail: doucument1,
      name: "아무거나",
      start_day: "시작날짜",
      start_time: "시작시간",
      Creator: { nick_name: "비타비딩" },
      price: "10000",
    },
    {
      id: 3,
      thumbnail: doucument2,
      name: "아무거나",
      start_day: "시작날짜",
      start_time: "시작시간",
      Creator: { nick_name: "비타비딩" },
      price: "10000",
    },
    {
      id: 4,
      thumbnail: doucument2,
      name: "아무거나",
      start_day: "시작날짜",
      start_time: "시작시간",
      Creator: { nick_name: "비타비딩" },
      price: "10003230",
    },
  ]);
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

        if (width > 1813) {
          setcardsPerPage(12);
        } else if (width > 1517) {
          setcardsPerPage(10);
        } else if (width > 1221) {
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

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
                <ImgSection>
                  <ProductImage src={card.thumbnail} alt="Product" />
                </ImgSection>
                <TitleSection>
                  <Title>{card.name}</Title>
                </TitleSection>
                <DateSection>
                  <Startday>{card.start_day}</Startday>
                  <StartTime>{card.start_time}</StartTime>
                </DateSection>
                <CreatorNicname>{card.Creator.nick_name}</CreatorNicname>
                <Row>
                  <PriceComment>경매 시작가</PriceComment>{" "}
                  <Price>{formatPrice(card.price)}</Price>
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
                  onClick={() => handlePageChange(index + 1)}
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

  gap: 16px;

  padding: 0 16px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media only screen and (max-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 630px) {
    width: 630px;
  }
  @media only screen and (min-width: 926px) {
    width: 926px;
  }
  @media only screen and (min-width: 1222px) {
    width: 1222px;
  }
  @media only screen and (min-width: 1518px) {
    width: 1518px;
  }
  @media only screen and (min-width: 1814px) {
    width: 1814px;
  }
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
const ImgSection = styled.div`
  /* border: 1px solid red; */
  border-radius: 10px;
  width: 280px;
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 스타일 설정 */
    cursor: pointer;
  }
`;
const ProductImage = styled.img`
  /* border: 1px solid red; */

  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0px;
  transition: transform 0.3s ease;
  &:hover {
    /* border: 1px solid #000; 보더 스타일 설정 */
    transform: scale(1.05);
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
  font-size: 16px;
  margin: 5px 0 0 0;

  font-family: "GmarketSansTTFMedium";
  font-weight: bold;
  color: #1a1a1a;
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
  color: #6d6d6d;
`;
const Startday = styled.div`
  margin: 0 0 0 0;
`;
const StartTime = styled.div`
  margin: 0 0 0 5px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const PriceComment = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: #6d6d6d;
  font-size: 16px;
  height: 20px;
  font-weight: 500;
  margin: 0 5px 0 0;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PriceUnit = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 16px;
  height: 20px;
  font-weight: bold;
  margin: 0 0 0 1px;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 18px;
  height: 20px;
  font-weight: bold;
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
  color: #1a1a1a;
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

  gap: 16px;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media only screen and (max-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 630px) {
    width: 630px;
  }
  @media only screen and (min-width: 926px) {
    width: 926px;
  }
  @media only screen and (min-width: 1222px) {
    width: 1222px;
  }
  @media only screen and (min-width: 1518px) {
    width: 1518px;
  }
  @media only screen and (min-width: 1814px) {
    width: 1814px;
  }
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
