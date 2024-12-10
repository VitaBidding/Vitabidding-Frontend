import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_VITE_SERVER_URL;
//로그인체크===========================================================
export const requestCheckProfile = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  try {
    const response = await axios.get(`/auth/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      // withCredentials: true,
    });
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error("유저 정보 조회 실패:", error);
    // if (accessToken) localStorage.removeItem("accessToken");
    return null;
  }
};

//로그인===========================================================
export const requestLogin = async (data) => {
  // data = { email, password };
  try {
    const response = await axios.post(`/auth/login`, data);

    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    return "success";
  } catch (error) {
    console.error("로그인 실패:", error);
    return error.response.data.message;
  }
};

//소셜로그인 네이버
export const requestLoginNaver = async ({ data }) => {
  // data = { email, password };
  try {
    const response = await axios.post(`/auth/logiNnaver`, data);
    // console.log('로그인 성공:', response.data);

    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

//소설로그인 구글
export const requestLoginGoogle = async ({ data }) => {
  // data = { email, password };
  try {
    const response = await axios.post(`/auth/loginGoogle`, data);
    // console.log('로그인 성공:', response.data);

    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

//로그아웃==========================================================
export const requestLogout = async () => {
  const accessToken = localStorage.getItem("accessToken");
  // console.log("🚀 ~ requestLogout ~ accessToken:", accessToken);
  try {
    const response = await axios.post(
      `/auth/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return response;
  } catch (error) {
    console.error("유저 로그아웃 실패", error);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};
//이메일 인증코드 보내기 ========================================
export const requestEmailVerification = async (data) => {
  try {
    const response = await axios.post(`/auth/send-code`, { email: data });

    return response.status;
  } catch (error) {
    console.error("이메일 코드보내기 실패", error);
    return "네트워크 에러 이메일 코드 보내기 실패";
  }
};
//이메일 인증코드 확인 보내기======================================
export const verifyEmailCode = async (data) => {
  try {
    const response = await axios.post(`/auth/verify-code`, data);

    return response.status;
  } catch (error) {
    console.error("이메일 코드확인 실패", error);
    return "네트워크 에러 이메일 코드 확인 실패";
  }
};

//닉네임 중복 확인 =============================================
export const requestNicknameCheck = async (data) => {
  try {
    const response = await axios.post(`/auth/check-nickname`, { name: data });

    return response.data.message;
  } catch (error) {
    // console.error("중복확인 실패", error);
    if (error.status === 409) {
      return "이미 사용중인 닉네임 입니다";
    } else {
      return "네트워크 에러 중복확인 실패";
    }
  }
};
//회원가입 ===================================================
export const requestSignup = async (data) => {
  try {
    const response = await axios.post(`/auth/signup1`, data);

    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }
    return "success";
  } catch (error) {
    // console.error("회원가입 실패:", error);

    return error.response.data.message;
  }
};

//회원추가정보(이름,핸드폰,주소) ===============================================
export const requestUserProfile = async (
  userName,
  userPhone,
  Zonecode,
  FuAddress,
  ExAddress,
  DeAddress
) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return null;

    await axios
      .post(
        `/auth/signup2`,
        {
          realName: userName,
          phone: userPhone,
          address: {
            zipCode: Zonecode,
            streetAddress1: FuAddress,
            state: ExAddress,
            streetAddress2: DeAddress,
          },
          agreement: {
            usagePolicyV: true,
            personalInformationV: true,
          },
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then(() => {
        window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
      });
  } catch (error) {
    // console.error("회원추가정보(핸드폰,주소) 등록 실패", error);
    if (error.data.message === "이미 추가 정보가 등록되어 있습니다.") {
      window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
    } else {
      alert("회원추가정보(이름,핸드폰,주소) 등록 실패");
    }
  }
};
//핸드폰번호 입력===================================================
export const EnterPhoneNumber = async (userPhone) => {
  try {
    await axios.post(`/auth/send-phone-code`, { phoneNumber: userPhone });
  } catch (error) {
    console.error("핸드폰 번호 전송 실패:", error);
    alert("핸드폰 번호 전송 실패:");
  }
};
//핸드폰 인증=============================================================
export const Certification = async (userPhone, CertificationNumber) => {
  try {
    const res = await axios.post(`/auth/verify-phone-code`, {
      phoneNumber: userPhone,
      code: CertificationNumber,
    });

    if (res.data.message === "Phone number verified successfully") {
      return "인증완료";
    } else {
      return "잘못된 인증 번호 입니다";
    }
  } catch (error) {
    console.log(error);
    return "잘못된 인증 번호 입니다";
  }
};

//회원정보 edit=======================================================
export const EditNickname = async (userNickname) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  await axios
    .put(
      `/auth/profile`,
      { name: userNickname },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    .catch((err) => {
      console.error(err);
      alert(`${err.response.data.message}`);
    });
};

export const EditPhoneNumber = async (userPhone) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  await axios
    .put(
      `/auth/profile`,
      { phone: userPhone },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
    .catch((err) => {
      console.error(err);
      alert(`${err.response.data.message}`);
    });
};

export const EditAddress = async (
  Zonecode,
  FuAddress,
  ExAddress,
  DeAddress
) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  axios
    .put(
      `/auth/profile`,
      {
        address: {
          zipCode: Zonecode,
          streetAddress1: FuAddress,
          state: ExAddress,
          streetAddress2: DeAddress,
        },
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
    .catch((err) => {
      console.error(err);
      alert(`${err.response.data.message}`);
    });
};

//회원 탈퇴 ========================================================

export const requestWithdrawal = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  await axios
    .delete(`/auth/delete-account`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      // withCredentials: true,
    })
    .then((res) => {
      console.log("🚀 ~ .then ~ res:", res);
      if (res.data.message === "회원 탈퇴가 완료되었습니다.") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = process.env.REACT_APP_MAIN_CLIENT_URL;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

//이용약관,개인정보 수집 및 동의 (크리에이터)
export const onclickURLAgreedC = async (checkItems) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  const usage_policy = checkItems.includes("usage_policy");
  const personal_information = checkItems.includes("personal_information");
  try {
    await axios
      .post(
        `/auth/convert-to-business`,
        {
          usagePolicyC: usage_policy,
          personalInformationC: personal_information,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
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
    const response = await axios.post(`/creator/studio/edit`, data, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("방송 LIVE URL 등록 실패", error);
  }
};

// 경매위젯, 경매장주소, 등록된 live url 받아오기
export const Loadwidget = async () => {
  try {
    const response = await axios.get(`/creator/studio`, {
      withCredentials: true,
    }); // 서버의 API 엔드포인트에 맞게 설정
    return response;
  } catch (error) {
    console.error("경매위젯주소 불러오기 실패", error);
    return;
  }
};

//통장계좌 받아오기
export const Accountreq = async () => {
  try {
    const res = await axios.get(`/account`, {
      withCredentials: true,
    });
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
      `/Accountregistration`,
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
    await axios.get(`/creator/products/new`, Data, {
      withCredentials: true,
    }); // 서버의 API 엔드포인트에 맞게 설정
    return true;
  } catch (error) {
    console.error("물건등록 실패", error);
    return false;
  }
};

//시간체크

export const TimeCheck = async () => {
  try {
    const res = axios.get(`/auth/timechk`, {
      withCredentials: true,
    });
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
    await axios.get(`/creator/products/edit`, Data, {
      withCredentials: true,
    }); // 서버의 API 엔드포인트에 맞게 설정
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
      `/creator/products/remove`,
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
    const response = await axios.get(`/products`, {
      withCredentials: true,
    });
    return response.data.result;
  } catch (error) {
    console.error("전체 물건 조회 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//낙찰완료 아이템(결제가 필요한 아이템목록) 조회
export const WaitingForpaymentitemapi = async () => {
  try {
    const response = await axios.get(`/products/WaitingForpaymentitemapi`, {
      withCredentials: true,
    });
    return response.data.result;
  } catch (error) {
    console.error("낙찰된 물건 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//결제완료 후 배송진행상태의 아이템 조회
export const completepaymentitemapi = async () => {
  try {
    const response = await axios.get(`/products/completepaymentitemapi`, {
      withCredentials: true,
    });
    return response.data.result;
  } catch (error) {
    console.error("결제완료 아이템 불러오기 실패", error);
    throw error; // 에러를 던져서 상위 함수에서 처리할 수 있게 함
  }
};

//거래완료 아이템 조회
export const transactioncompleteditemapi = async () => {
  try {
    const response = await axios.get(`/products/transactioncompleteditemapi`, {
      withCredentials: true,
    });
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
      `/products/itempayment`,
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
      `/auctioncompleteapi`,
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
