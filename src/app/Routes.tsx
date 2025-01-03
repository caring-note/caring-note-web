import AssistantBasicInfo from "@/pages/assistant/AssistantBasicInfo";
import AssistantHealthInfo from "@/pages/assistant/AssistantHealthInfo";
import AssistantHome from "@/pages/assistant/AssistantHome";
import AssistantIndependentInfo from "@/pages/assistant/AssistantIndependentInfo";
import AssistantLifeInfo from "@/pages/assistant/AssistantLifeInfo";
import AssistantRoot from "@/pages/assistant/AssistantRoot";
import AssistantView from "@/pages/assistant/AssistantView";
import Consult from "@/pages/consult/Consult";
import ConsultCard from "@/pages/consult/ConsultCard";
import DiscardMedicine from "@/pages/consult/DiscardMedicine";
import MedicineConsult from "@/pages/consult/MedicineConsult";
import MedicineMemo from "@/pages/consult/MedicineMemo";
import PastConsult from "@/pages/consult/PastConsult";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

const Routes = () => {
  const rootRoutes: AppRouteObject = {
    path: "/",
    element: <Navigate to="/main" />,
    errorElement: <ErrorPage />,
  };

  const noMatchRoutes: AppRouteObject = {
    path: "*", 
    element: <Navigate to="/" />,
    errorElement: <ErrorPage />,
  };

  const mainRoutes: AppRouteObject = {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "main",
        element: <Home />,
      },
    ],
  };

  const consultRoutes: AppRouteObject = {
    path: "/",
    element: <Layout />,
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
    path: "/assistant",
    element: <AssistantRoot />,
    children: [
      {
        path: "",
        element: <AssistantView />,
      },
      {
        path: "view",
        element: <AssistantHome />,
        children: [
          { index: true, element: <AssistantBasicInfo /> },
          { path: "basicInfo", element: <AssistantBasicInfo /> },
          { path: "healthInfo", element: <AssistantHealthInfo /> },
          { path: "lifeInfo", element: <AssistantLifeInfo /> },
          { path: "IndependentInfo", element: <AssistantIndependentInfo /> },
        ],
      },
    ],
  };
  const routes: AppRouteObject[] = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    consultRoutes,
    assistantRoutes,
  ];

  return useRoutes(routes);
};
export default Routes;
