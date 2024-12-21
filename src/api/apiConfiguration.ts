import { Configuration } from "./configuration";

let token: string = "";

// 토큰 저장 함수
export const setToken = (newToken: string) => {
  token = newToken;
  localStorage.setItem("authToken", newToken); // 로컬 스토리지에 저장
};

// 저장된 토큰 불러오기 함수
export const getToken = () => {
  if (token === "") {
    token =
      localStorage.getItem("authToken") || "FAILED_LOCALSTORAGE_AUTHTOKEN!"; // 로컬 스토리지에서 불러오기
  }
  return token;
};

// 커스터마이즈된 Configuration (axios Configuration)
export const createCustomConfiguration = () =>
  new Configuration({
    accessToken: getToken, // 토큰을 동적으로 추가
  });
