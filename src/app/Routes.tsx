import AssistantInfo from '@/pages/Assistant/AssistantInfo';
import AssistantLayout from '@/pages/Assistant/layout/AssistantLayout';
import Assistant from '@/pages/Assistant/Assistant';
import Consult from '@/pages/Consult';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import { RouteObject, useRoutes } from 'react-router-dom';

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

const Routes = () => {
  const noMatchRoutes: AppRouteObject = {
    path: '/*',
    element: <ErrorPage />,
  };

  const mainRoutes: AppRouteObject = {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  };

  const consultRoutes: AppRouteObject = {
    path: '/consult',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Consult />,
      },
    ],
  };

  const assistantRoutes: RouteObject = {
    path: '/assistant',
    element: <AssistantLayout />,
    children: [
      {
        path: '',
        element: <Assistant />,
      },
      {
        path: 'info',
        element: <AssistantInfo />,
      },
    ],
  };
  const routes: AppRouteObject[] = [
    noMatchRoutes,
    mainRoutes,
    consultRoutes,
    assistantRoutes,
  ];

  return useRoutes(routes);
};
export default Routes;
