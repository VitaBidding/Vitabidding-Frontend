import axios from 'axios';

export const requestChekLogin = async () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) return null;
    try {
      const response = await axios.get(
        `${process.env.VITE_SERVER_URL}/user/profile`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          // withCredentials: true,
        },
      );
      // console.log(response.data);
      return response;
    } catch (error) {
      console.error('유저 정보 조회 실패:', error);
      if (accessToken) localStorage.removeItem('access_token');
      return null;
    }
  };

  export const requestLogin = async (data) => {
    // data = { email, password };
    try {
      const response = await axios.post(
        `${process.env.VITE_SERVER_URL}/auth/login`,
        data,
      );
      // console.log('로그인 성공:', response.data);
  
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
  
      return response;
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  
  export const requestLoginGoogleV = async (data) => {
    // data = { email, password };
    try {
      const response = await axios.post(
        `${process.env.VITE_SERVER_URL}/auth/loginGoogleV`,
        data,
      );
      // console.log('로그인 성공:', response.data);
  
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
  
      return response;
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  export const requestLoginGoogleC = async (data) => {
    // data = { email, password };
    try {
      const response = await axios.post(
        `${process.env.VITE_SERVER_URL}/auth/loginGoogleC`,
        data,
      );
      // console.log('로그인 성공:', response.data);
  
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
  
      return response;
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  export const requestLogout = async () => {
    const accessToken = localStorage.getItem('access_token');
    localStorage.removeItem('access_token');
    try {
      const response = await axios.post(
        `${process.env.VITE_SERVER_URL}/auth/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          // withCredentials: true,
        },
      );
      return response;
    } catch (error) {
      console.error('유저 정보 조회 실패:', error);
      if (accessToken) {
        localStorage.removeItem('access_token');
      }
    }
  };
  export const requestSignup = async (data) => {
    // data = { email, password, passwordConfirm, nick_name };
    try {
      const response = await axios.post(
        `${process.env.VITE_SERVER_URL}/user`,
        data,
      );
      // console.log('회원가입 성공:', response.data);
      return response;
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  
export const requestUserProfile = async () => {
    const accessToken = localStorage.getItem('access_token');
    try {
      const response = await axios.get(
        `${process.env.VITE_SERVER_URL}/user/profile`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          // withCredentials: true,
        },
      );
      return response;
    } catch (error) {
      console.error('유저 정보 조회 실패:', error);
    }
  };