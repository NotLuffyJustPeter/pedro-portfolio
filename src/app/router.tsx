import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { ProjectDetailPage } from '../features/projects/pages/ProjectDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'project/:slug',
          element: <ProjectDetailPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
