import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import ErrorBoundary from "./error.boundary";
import { useSelector } from "react-redux";
import { selectsearch, search } from "../../redux/features/search/search.slice";
import { getItemData } from "../../lib/request";
import { useDispatch } from "react-redux";

function ListComponent(props) {
  const searchOn = useSelector(selectsearch);

  const [cardData, setcardData] = useState([]);

  //scroll 영역 설정
  const [contentHeight, setContentHeight] = useState("");
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

      setcardData(filter);
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
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      // console.log("🚀 ~ file: ListComponent.js:175 ~ calculateHeight ~ windowWidth:", windowWidth);

      if (componentRef.current) {
        const width = componentRef.current.offsetWidth;
        // console.log("Width:", width);
        if (width > 1800) {
          setcardsPerPage(12);
        } else if (width > 1500) {
          setcardsPerPage(10);
        } else if (width > 1200) {
          setcardsPerPage(8);
        } else {
          setcardsPerPage(6);
        }
      }
      if (windowWidth > 1784) {
        const computedHeight = windowHeight - 100;
        setContentHeight(computedHeight + "px");
      } else if (windowWidth > 1450) {
        const computedHeight = windowHeight - 100;
        setContentHeight(computedHeight + "px");
      } else if (windowWidth > 992) {
        const computedHeight = windowHeight - 100;
        setContentHeight(computedHeight + "px");
      } else {
        const computedHeight = windowHeight - 60;
        setContentHeight(computedHeight + "px");
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
    navigate(`/viewer/detail/${e.id}`, { state: e });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper contentHeight={contentHeight} ref={componentRef}>
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
                  src={card.Item_thumbnail.thumbnail}
                  alt="Product"
                />
                <TitleSection>
                  <Title>{card.item_name}</Title>
                </TitleSection>
                <DateSection>
                  <Startday>{card.start_day}</Startday>
                  <StartTime>{card.start_time}</StartTime>
                </DateSection>
                <CreatorNicname>{card.Creator.nick_name}</CreatorNicname>
                <Price>{card.starting_price} 포인트</Price>
              </Card>
            ))}
            <BPaginationWrapper>
              <Pagination>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Pagination.Item
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </BPaginationWrapper>
          </CardContainer>
        </ErrorBoundary>
      )}
      <APaginationWrapper>
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </APaginationWrapper>
    </Wrapper>
  );
}

export default ListComponent;

const Wrapper = styled.div`
  height: ${(props) => props.contentHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 90%;
  width: auto;
`;
const Card = styled.div`
  /* border: 1px solid green; */
  width: 280px;
  height: 360px;
  margin: 10px;
`;

const ProductImage = styled.img`
  /* border: 1px solid red; */
  border-radius: 10px;
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin: 0px;
  :hover {
    /* border: 1px solid #000; 보더 스타일 설정 */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 스타일 설정 */
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
const Startday = styled.p`
  margin: 0 0 0 0;
`;
const StartTime = styled.p`
  margin: 0 0 0 5px;
`;
const Price = styled.p`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  color: gray;
  font-size: 16px;
  height: 20px;
  font-weight: bold;
  margin: 0 0 0 0;
  font-family: "GmarketSansTTFMedium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CreatorNicname = styled.p`
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 90%;
  width: auto;
`;

const SkeletonCard = styled.div`
  width: 280px;
  height: 360px;
  margin: 10px;
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

const APaginationWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100%;
  justify-content: center;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

const BPaginationWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100%;
  justify-content: center;
  margin-top: 5px;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
