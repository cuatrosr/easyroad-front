import { ListPole, AddPole } from '../components';
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
        ],
      },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);

export default router;
