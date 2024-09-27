import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
