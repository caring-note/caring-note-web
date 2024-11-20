import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import AssistantHome from "./pages/assistant/AssistantHome";
import AssistantRoot from "./pages/assistant/AssistantRoot";
import Consult from "./pages/Consult";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="consult" element={<Consult />} />
      </Route>
    </Route>,

    /**
     * 기초상담(Assistant 화면들 아래 Route에 추가하세요~
     * 폴더 경로는 pages/assistant 밑에 만드시면 됩니다
     * react-router-dom 이 뭔가 많이 바뀌었네요..?
     * 함 보시고 배우시면서 ㅎㅎ Happy Coding!
     */
    <Route path="/assistant" element={<AssistantRoot />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<AssistantHome />} />
        {/* Route 추가하세요 */}
      </Route>
    </Route>,
  ]),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
