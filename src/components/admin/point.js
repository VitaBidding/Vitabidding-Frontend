import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getAllPointRequests,
  getPointRequestsByStatus,
  getPointRequestsByUserId,
  approveOrRejectPointRequest,
} from "../../lib/admin.request";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const TabButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#45a049" : "#e0e0e0")};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f5f5f5;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const UserName = styled.span`
  color: #2196f3;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  &.approve {
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #45a049;
    }
  }

  &.reject {
    background-color: #f44336;
    color: white;
    &:hover {
      background-color: #da190b;
    }
  }
`;

const ErrorMessage = styled.p`
  color: #f44336;
  padding: 10px;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 20px;
`;

function Point() {
  const [pointRequests, setPointRequests] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPointRequests();
  }, [selectedTab, selectedUser]);

  const fetchPointRequests = async () => {
    try {
      let requests;
      if (selectedUser) {
        requests = await getPointRequestsByUserId(selectedUser);
      } else if (selectedTab === "all") {
        requests = await getAllPointRequests();
      } else {
        requests = await getPointRequestsByStatus(selectedTab);
      }
      setPointRequests(requests || []);
    } catch (err) {
      setError("포인트 요청을 불러오는 중 오류가 발생했습니다.");
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedUser(null);
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
    setSelectedTab("all");
  };

  const handleApproveReject = async (requestId, action) => {
    try {
      await approveOrRejectPointRequest(requestId, { status: action });
      fetchPointRequests();
    } catch (err) {
      setError(
        `요청 ${
          action === "approved" ? "승인" : "거절"
        } 중 오류가 발생했습니다.`
      );
    }
  };

  return (
    <Container>
      <Title>포인트 관리</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <TabContainer>
        <TabButton
          active={selectedTab === "all"}
          onClick={() => handleTabChange("all")}
        >
          전체
        </TabButton>
        <TabButton
          active={selectedTab === "pending"}
          onClick={() => handleTabChange("pending")}
        >
          대기
        </TabButton>
        <TabButton
          active={selectedTab === "approved"}
          onClick={() => handleTabChange("approved")}
        >
          승인
        </TabButton>
        <TabButton
          active={selectedTab === "rejected"}
          onClick={() => handleTabChange("rejected")}
        >
          거부
        </TabButton>
      </TabContainer>

      <Table>
        <thead>
          <tr>
            <Th>요청 ID</Th>
            <Th>사용자</Th>
            <Th>요청 포인트</Th>
            <Th>입금자명</Th>
            <Th>전화번호</Th>
            <Th>요청 일시</Th>
            <Th>상태</Th>
            <Th>작업</Th>
          </tr>
        </thead>
        <tbody>
          {pointRequests.map((request) => (
            <tr key={request.id}>
              <Td>{request.id}</Td>
              <Td>
                <UserName
                  onClick={() => handleUserClick(request.point.user.id)}
                >
                  {request.point.user.realName}
                </UserName>
              </Td>
              <Td>{request.requestedPoints.toLocaleString()}P</Td>
              <Td>{request.depositorName}</Td>
              <Td>{request.phoneNumber}</Td>
              <Td>{new Date(request.requestedAt).toLocaleString()}</Td>
              <Td>{request.status}</Td>
              <Td>
                {request.status === "pending" && (
                  <>
                    <ActionButton
                      className="approve"
                      onClick={() =>
                        handleApproveReject(request.id, "approved")
                      }
                    >
                      승인
                    </ActionButton>
                    <ActionButton
                      className="reject"
                      onClick={() =>
                        handleApproveReject(request.id, "rejected")
                      }
                    >
                      거부
                    </ActionButton>
                  </>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Point;
