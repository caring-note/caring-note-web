import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Consult from "../pages/consult/Consult";
import PastConsult from "../pages/consult/PastConsult";
import ConsultCard from "../pages/consult/ConsultCard";
import MedicineMemo from "../pages/consult/MedicineMemo";
import MedicineConsult from "../pages/consult/MedicineConsult";
import DiscardMedicine from "../pages/consult/DiscardMedicine";
import AssistantRoot from "../pages/assistant/AssistantRoot";
import AssistantHome from "../pages/assistant/AssistantHome";
import AssistantBasicInfo from "../pages/assistant/AssistantBasicInfo";
import AssistantHealthInfo from "../pages/assistant/AssistantHealthInfo";
import AssistantLifeInfo from "../pages/assistant/AssistantLifeInfo";

const Routes = () => {
  const rootRoutes: RouteObject = {
    path: "/",
    element: <Navigate to="/main" />,
    errorElement: <ErrorPage />,
  };

  const noMatchRoutes: RouteObject = {
    path: "*",
    element: <Navigate to="/main" />,
    errorElement: <ErrorPage />,
  };

  const mainRoutes: RouteObject = {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "main",
        element: <Home />,
      },
    ],
  };

  const consultRoutes: RouteObject = {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "consult",
        element: <Consult />,
        children: [
          { index: true, element: <PastConsult /> },
          { path: "pastConsult", element: <PastConsult /> },
          { path: "consultCard", element: <ConsultCard /> },
          { path: "medicineMemo", element: <MedicineMemo /> },
          { path: "medicineConsult", element: <MedicineConsult /> },
          { path: "discardMedicine", element: <DiscardMedicine /> },
        ],
      },
    ],
  };

  const assistantRoutes: RouteObject = {
    path: "/",
    element: <AssistantRoot />,

    children: [
      {
        path: "assistant",
        element: <AssistantHome />,
        children: [
          { index: true, element: <AssistantBasicInfo /> },
          { path: "basicInfo", element: <AssistantBasicInfo /> },
          { path: "healthInfo", element: <AssistantHealthInfo /> },
          { path: "lifeInfo", element: <AssistantLifeInfo /> },
        ],
      },
    ],
  };
  const routes = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    consultRoutes,
    assistantRoutes,
  ];

  return useRoutes(routes);
};
export default Routes;
