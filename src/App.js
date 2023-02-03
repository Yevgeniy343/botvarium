import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ArticlesPage from "./Pages/ArticlesPage";
import CasePage from "./Pages/CasePage";
import InfoPage from "./Pages/InfoPage";
import Knowledge from "./Pages/Knowledge/Knowledge";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/case", element: <CasePage /> },
  { path: "/articles", element: <ArticlesPage /> },
  { path: "/info", element: <InfoPage /> },
  { path: "/knowledge", element: <Knowledge /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
