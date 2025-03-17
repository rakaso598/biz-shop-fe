## 목표 : `rdbms-e-shop-be` 저장소 백엔드에 연결하기

### vite + react + js 로 만들어진 프론트엔드 프로젝트.

![화면 캡처 2025-03-17 190731](https://github.com/user-attachments/assets/a431cef4-98bc-423b-a61b-0e17d6dee32a)

---

#### `CORS` : 브라우저의 보안 정책 매커니즘. 브라우저에서 HTTP 요청을 현재 도메인과 다른 도메인으로 보냈을 경우, 응답을 받더라도 사용자에게 전달하지 않는 것을 의미.

#### 해결하려면 -> `서버 쪽에서` 특정 도메인으로부터의 요청을 `허락`했음을 브라우저에 알려줘야 함.

#### 그래야 브라우저가 중간에 응답을 차단하지 않고 넘겨줍니다.

---

#### `CORS` 에러 해결을 위해 백엔드에 `npm i cors` 진행하세요. 

---

#### `client` - - - - - - - - - - - - `server`

#### `브라우저` - - - - - - - - - - - - `server` | `CORS`는 브라우저에서만 발생!

#### `Postman` - - - - - - - - - - - - `server`

#### `rest client` - - - - - - - - - - - - `server`

#### `thunder client` - - - - - - - - - - - - `server`

#### `cURL` - - - - - - - - - - - - `server`

---

#### `index.api.js` : `baseURL`로 `{ clinet }` 셍성, `users.api.js`에서 받아서 사용

#### `users.api.js` : `client.post("/users/sign-up", data)` 포함, `client` 객체를 사용하여 요청 보냄.

#### SignUpSection.jsx : `회원가입 폼`, `CORS`에러를 처음 만나는 페이지.

---

### Axios를 사용해 백엔드 서버에 요청을 보냄.
