import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../../redux/features/search/search.slice";
function Searchbar(props) {
  const [searchField, setSearchField] = useState("");

  const onChangesearchField = (e) => {
    setSearchField(e.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickSearch = () => {
    navigate(`/list`);
    dispatch(search(searchField));
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };
  return (
    <SearchbarSection>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className="input"
            type="text"
            placeholder="search"
            value={searchField}
            onChange={onChangesearchField}
            onKeyPress={onKeyPress}
          />
          <Button
            className="button"
            variant="outline-primary"
            onClick={() => onClickSearch()}
          >
            <BsSearch />
          </Button>
        </InputGroup>
      </Form.Group>
    </SearchbarSection>
  );
}

export default Searchbar;

const SearchbarSection = styled.div`
  flex-wrap: nowrap;
  font-size: 11pt;
  @media only screen and (max-width: 360px) {
    width: 150px;
  }
  @media only screen and (min-width: 360px) {
    width: 200px;
  }
  @media only screen and (min-width: 420px) {
    width: 200px;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 500px;
  }
`;
