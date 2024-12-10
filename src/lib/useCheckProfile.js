import { useDispatch } from "react-redux";
import { requestCheckProfile } from "./request";
import {
  real_name,
  email,
  login_type,
  nick_name,
  phone,
  reduxExAddress,
  reduxFuAddress,
  reduxDeAddress,
  reduxZonecode,
} from "../redux/features/user/user.slice";
export const useCheckProfile = () => {
  const dispatch = useDispatch();

  const checkProfile = async () => {
    try {
      const res = await requestCheckProfile();
      console.log("🚀 ~ checkProfile ~ res:", res.data);

      if (res.data.message === "사용자 정보 조회 성공") {
        dispatch(real_name(res.data.user.realName));
        dispatch(email(res.data.user.email));
        dispatch(login_type(res.data.user.role));
        dispatch(nick_name(res.data.user.name));
        dispatch(phone(res.data.user.phone));
        const address = res.data.user.addresses[0];

        if (address) {
          dispatch(reduxExAddress(address.state)); // state 속성
          dispatch(reduxFuAddress(address.streetAddress1)); // street_address1 속성
          dispatch(reduxDeAddress(address.streetAddress2)); // street_address2 속성
          dispatch(reduxZonecode(address.zipCode)); // zip_code 속성
        }
      }
    } catch (error) {
      console.error("프로필 체크 실패:", error);
    }
  };

  return checkProfile;
};
