import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, Projects, Dashboard } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: 'projects', element: <Projects /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);

export default router;
