import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/App.css';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/country/:name", element: <DetailPage /> }
    ]
  }
], {
  basename: "/JS-frameworks-libraries-practice/rest-countries-api-with-color-theme-switcher-master"
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
