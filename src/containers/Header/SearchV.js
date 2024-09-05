import React from "react";
import styled from "styled-components";
import Searchbar from "../../components/Header/Searchbar";
function SearchV(props) {
  return (
    <SearchSection>
      <Searchbar />
    </SearchSection>
  );
}

export default SearchV;

const SearchSection = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid red; */
`;
