import ClientManagement from "@/pages/\bClientManagement";
import AssistantBasicInfo from "@/pages/assistant/AssistantBasicInfo";
import AssistantHealthInfo from "@/pages/assistant/AssistantHealthInfo";
import AssistantHome from "@/pages/assistant/AssistantHome";
import AssistantIndependentInfo from "@/pages/assistant/AssistantIndependentInfo";
import AssistantLifeInfo from "@/pages/assistant/AssistantLifeInfo";
import AssistantRoot from "@/pages/assistant/AssistantRoot";
import AssistantView from "@/pages/assistant/AssistantView";
import Consult from "@/pages/Consult";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import { RouteObject, useRoutes } from "react-router-dom";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

const Routes = () => {
    const noMatchRoutes: AppRouteObject = {
      path: "/*",
      element: <ErrorPage />,
    };

    const mainRoutes: AppRouteObject = {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    }; 

  const consultRoutes: AppRouteObject = {
    path: "/consult",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Consult />,
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

  const clientManagementRoute: AppRouteObject = {
    path: "/client-management",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ClientManagement />,
      },
    ],
  };

  const routes: AppRouteObject[] = [
    noMatchRoutes,
    mainRoutes,
    consultRoutes,
    assistantRoutes,
    clientManagementRoute,
  ];

  return useRoutes(routes);
};
export default Routes;
