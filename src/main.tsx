import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import AssistantHome from "./pages/assistant/AssistantHome";
import AssistantRoot from "./pages/assistant/AssistantRoot";
import Consult from "./pages/consult/Consult";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Root from "./pages/Root";
import PastConsult from "./pages/consult/PastConsult";
import ConsultCard from "./pages/consult/ConsultCard";
import MedicineMemo from "./pages/consult/MedicineMemo";
import MedicineConsult from "./pages/consult/MedicineConsult";
import DiscardMedicine from "./pages/consult/DiscardMedicine";
import { Provider } from "react-redux";
import store from "../store";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="consult" element={<Consult />}>
          <Route path="pastConsult" element={<PastConsult />} />
          <Route path="consultCard" element={<ConsultCard />} />
          <Route path="medicineMemo" element={<MedicineMemo />} />
          <Route path="medicineConsult" element={<MedicineConsult />} />
          <Route path="discardMedicine" element={<DiscardMedicine />} />
        </Route>
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
