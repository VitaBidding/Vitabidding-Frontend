import axios from "axios";

//로그인체크
export const requestChekLogin = async () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) return null;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/user/profile`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        // withCredentials: true,
      }
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error("유저 정보 조회 실패:", error);
    if (accessToken) localStorage.removeItem("access_token");
    return null;
  }
};

//로그인
export const requestLogin = async ({ data }) => {
  // data = { email, password };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auth/login`,
      data
    );
    // console.log('로그인 성공:', response.data);

    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

//소셜로그인 네이버
export const requestLoginNaver = async (data) => {
  // data = { email, password };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auth/logiNnaver`,
      data
    );
    // console.log('로그인 성공:', response.data);

    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

//소설로그인 구글
export const requestLoginGoogle = async (data) => {
  // data = { email, password };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auth/loginGoogle`,
      data
    );
    // console.log('로그인 성공:', response.data);

    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

//로그아웃
export const requestLogout = async () => {
  const accessToken = localStorage.getItem("access_token");
  localStorage.removeItem("access_token");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auth/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        // withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("유저 정보 조회 실패:", error);
    if (accessToken) {
      localStorage.removeItem("access_token");
    }
  }
};
//이메일 인증코드 보내기
export const requestEmailVerification = async (data) => {
  // data = { email };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/user/requestemailverification`,
      data
    );
    // console.log('이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.', response.data);
    // console.log('사용가능한 닉네입니다.', response.data);
    return response.data.message;
  } catch (error) {
    console.error("이메일 코드보내기 실패", error);
    return "네트워크 에러 이메일 코드 보내기 실패";
  }
};
//이메일 인증코드 보내기
export const verifyEmailCode = async (data) => {
  // data = { email, verificationCode };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/user/verifyemailcode`,
      data
    );
    // console.log('이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.', response.data);
    // console.log('사용가능한 닉네입니다.', response.data);
    return response.data.message;
  } catch (error) {
    console.error("이메일 코드확인 실패", error);
    return "네트워크 에러 이메일 코드 확인 실패";
  }
};

//닉네임 중복 확인
export const requestNicknameCheck = async (data) => {
  // data = { nickname };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/user/nicknamecheck`,
      data
    );
    // console.log('이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.', response.data);
    // console.log('사용가능한 닉네입니다.', response.data);
    return response.data.message;
  } catch (error) {
    console.error("중복확인 실패", error);
    return "네트워크 에러 중복확인 실패";
  }
};
//회원가입
export const requestSignup = async (data) => {
  //{ email, nickname, password, repeatPassword }
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/user`,
      data
    );
    // console.log('회원가입 성공:', response.data);
    return response;
  } catch (error) {
    console.error("회원가입 실패:", error);
  }
};

//회원추가정보(핸드폰,주소)
export const requestUserProfile = async (
  userName,
  userPhone,
  Zonecode,
  FuAddress,
  ExAddress,
  DeAddress
) => {
  if (DeAddress === "") {
    DeAddress = null;
  }
  try {
    await axios
      .get(
        `${process.env.REACT_APP_VITE_SERVER_URL}/creator/register`,
        {
          userName: userName,
          userPhone: userPhone,
          Zonecode: Zonecode,
          FuAddress: FuAddress,
          ExAddress: ExAddress,
          DeAddress: DeAddress,
        },
        { withCredentials: true }
      )
      .then(() => {
        window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/widget`;
      });
  } catch (error) {
    window.location.href = process.env.REACT_APP_MAIN_CLIENT_URL;
    console.error("회원추가정보(핸드폰,주소) 등록 실패", error);
  }
};
//핸드폰번호 입력
export const EnterPhoneNumber = async (userPhone) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/sms/send`,
      { phoneNumber: userPhone },
      { withCredentials: true }
    );
  } catch (error) {
    console.error("핸드폰 번호 전송 실패:", error);
  }
};
//핸드폰 인증
export const Certification = async (userPhone, CertificationNumber) => {
  await axios
    .post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/sms/verify`,
      {
        phoneNumber: userPhone,
        verifyCode: CertificationNumber,
      },
      { withCredentials: true }
    )
    .then((req) => {
      if (req.data.message === "본인인증 성공") {
        return true;
      } else {
      }
    })
    .catch((error) => console.log(error));
};

//회원정보 edit
export const EditNickname = async (userNickname) => {
  await axios
    .patch(
      `${process.env.REACT_APP_VITE_SERVER_URL}/edit/nickname`,
      { nick_name: userNickname },
      { withCredentials: true }
    )
    .catch((err) => {
      console.error(err);
    });
};

export const EditPhoneNumber = async (userPhone) => {
  await axios
    .patch(
      `${process.env.REACT_APP_VITE_SERVER_URL}/edit/phone`,
      { phone: userPhone },
      { withCredentials: true }
    )
    .catch((err) => {
      console.error(err);
    });
};

export const EditAddress = async (
  Zonecode,
  FuAddress,
  ExAddress,
  DeAddress
) => {
  axios
    .patch(
      `${process.env.REACT_APP_VITE_SERVER_URL}/edit/address`,
      {
        Zonecode: Zonecode,
        FuAddress: FuAddress,
        ExAddress: ExAddress,
        DeAddress: DeAddress,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.error(err);
    });
};

//회원 탈퇴

export const requestWithdrawal = async () => {
  await axios
    .delete(`${process.env.REACT_APP_VITE_SERVER_URL}/auth/delete`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.message === "회원탈퇴 성공") {
        window.location.href = process.env.REACT_APP_MAIN_CLIENT_URL;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

//이용약관,개인정보 수집 및 동의 (뷰어)
export const onclickURLAgreedV = async (checkItems) => {
  const usage_policy = checkItems.includes("usage_policy");
  const personal_information = checkItems.includes("personal_information");
  try {
    await axios
      .get(
        `${process.env.REACT_APP_VITE_SERVER_URL}/viewer/agreement`,
        {
          usage_policy: usage_policy,
          personal_information: personal_information,
        },
        { withCredentials: true }
      )
      .then((req) => {
        if (req.data.code === 1005) {
          window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/info`;
        } else if (req.data.code === 3005) {
          window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
        }
      });
  } catch (error) {
    console.error("이용약관,개인정보 수집 및 동의 실패:", error);
  }
};

//이용약관,개인정보 수집 및 동의 (크리에이터)
export const onclickURLAgreedC = async (checkItems) => {
  const usage_policy = checkItems.includes("usage_policy");
  const personal_information = checkItems.includes("personal_information");
  try {
    await axios
      .get(
        `${process.env.REACT_APP_VITE_SERVER_URL}/creator/agreement`,
        {
          usage_policy: usage_policy,
          personal_information: personal_information,
        },
        { withCredentials: true }
      )
      .then((req) => {
        if (req.data.code === 1005) {
          window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator`;
        } else if (req.data.code === 3005) {
          window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
        }
      });
  } catch (error) {
    console.error("이용약관,개인정보 수집 및 동의 실패(크리에이터):", error);
  }
};

//방송 등록 URL
export const Channelurl = async (data) => {
  // data = { email, password, passwordConfirm, nick_name };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_VITE_SERVER_URL}/creator/studio/edit`,
      data,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("방송 LIVE URL 등록 실패", error);
  }
};

// 경매위젯, 경매장주소, 등록된 live url 받아오기
export const Loadwidget = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/creator/studio`,
      {
        withCredentials: true,
      }
    ); // 서버의 API 엔드포인트에 맞게 설정
    return response;
  } catch (error) {
    console.error("경매위젯주소 불러오기 실패", error);
    return;
  }
};

//통장계좌 받아오기
export const Accountreq = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/account`,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch {
    return false;
  }
};

//통장 계좌 등록하기

export const Accountregistration = async ({
  selectedBank,
  userAccountNumber,
}) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/Accountregistration`,
      { selectedBank, userAccountNumber },
      {
        withCredentials: true,
      }
    );
    return res;
  } catch {
    return false;
  }
};
//---------------------물건 crud-----------------------------
//물건등록

export const EnrollmentItem = async (Data) => {
  try {
    await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/creator/products/new`,
      Data,
      {
        withCredentials: true,
      }
    ); // 서버의 API 엔드포인트에 맞게 설정
    return true;
  } catch (error) {
    console.error("물건등록 실패", error);
    return false;
  }
};

//시간체크

export const TimeCheck = async () => {
  try {
    const res = axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auth/timechk`,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (error) {
    console.error("시간불러오기 실패", error);
    return false;
  }
};

// 물건 조회

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/creator/products`,
      {
        withCredentials: true,
      }
    ); // 서버의 API 엔드포인트에 맞게 설정
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 물건 수정
export const EditItem = async (Data) => {
  try {
    await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/creator/products/edit`,
      Data,
      {
        withCredentials: true,
      }
    ); // 서버의 API 엔드포인트에 맞게 설정
    return true;
  } catch (error) {
    console.error("물건 수정 실패", error);
    return false;
  }
};

//물건삭제
export const DeleteItem = async (id) => {
  try {
    await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/creator/products/remove`,
      { item_id: id },
      { withCredentials: true }
    ); // 서버의 API 엔드포인트에 맞게 설정
    return true;
  } catch (error) {
    console.error("물건 삭제 실패", error);
    return false;
  }
};

//물건 전체 검색 조회

export const getItemData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/products`,
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("전체 물건 조회 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//낙찰완료 아이템(결제가 필요한 아이템목록) 조회
export const WaitingForpaymentitemapi = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/products/WaitingForpaymentitemapi`,
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("낙찰된 물건 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//결제완료 후 배송진행상태의 아이템 조회
export const completepaymentitemapi = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/products/completepaymentitemapi`,
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("결제완료 아이템 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//거래완료 아이템 조회
export const transactioncompleteditemapi = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/products/transactioncompleteditemapi`,
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("거래완료 아이템 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//낙찰된 물품 결제 및 배송지 주소 보내기

export const itempayment = async ({
  userName,
  userPhone,
  Zonecode,
  FuAddress,
  ExAddress,
  DeAddress,
  itempaymentpoint,
}) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/products/itempayment`,
      {
        userName: userName,
        userPhone: userPhone,
        Zonecode: Zonecode,
        FuAddress: FuAddress,
        ExAddress: ExAddress,
        DeAddress: DeAddress,
        itempaymentpoint: itempaymentpoint,
      },
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("낙찰된 아이템 결제 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//경매 완료 버튼 api

export const auctioncompleteapi = async ({ el }) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_VITE_SERVER_URL}/auctioncompleteapi`,
      { item: el },
      {
        withCredentials: true,
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("거래완료 아이템 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};
