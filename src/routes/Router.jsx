import { ListPole, AddPole, DetailsPole, ActionsPole } from '../components';
import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, Projects, Dashboard, Project } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/:projectId',
        element: <Project />,
        children: [
          {
            path: 'list',
            element: <ListPole />,
          },
          {
            path: 'add',
            element: <AddPole />,
          },
          {
            path: ':poleSerial/details',
            element: <DetailsPole />,
          },
          {
            path: ':poleSerial/actions',
            element: <ActionsPole />,
          },
        ],
      },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);

export default router;
