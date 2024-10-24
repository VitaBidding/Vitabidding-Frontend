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
  const [products, setProducts] = useState([{}]);
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
