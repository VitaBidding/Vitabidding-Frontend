import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NonLogin from "../../components/header/non.login";
import LoginVIcon from "../../components/header/login.v";
import { useCheckProfile } from "../../lib/useCheckProfile";
export default function LoginContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const accessToken = localStorage.getItem("accessToken");
      setIsAuthenticated(!!accessToken);
    };

    checkAuthStatus();
  }, []);

  const checkProfile = useCheckProfile();

  useEffect(() => {
    checkProfile();
  }, []);
  return (
    <SearchSection>
      {isAuthenticated ? (
        <div>
          <LoginVIcon />
        </div>
      ) : (
        <div>
          <NonLogin />
        </div>
      )}
    </SearchSection>
  );
}

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
