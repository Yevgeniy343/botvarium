import MainPage from "./Pages/MainPage";
import ServicesPage from "./Pages/Services/ServicesPage";
import ArticlesPage from "./Pages/ArticlesPage";
import CasePage from "./Pages/CasePage";
import InfoPage from "./Pages/InfoPage";
import Knowledge from "./Pages/Knowledge/Knowledge";
import WebAppPage from "./Pages/Services/WebAppPage";
import PwaAppPage from "./Pages/Services/PwaAppPage";
import LcClientsPage from "./Pages/Services/LcClientsPage";
import LcPartnersPage from "./Pages/Services/LcPartnersPage";
import PortalPage from "./Pages/Services/PortalPage";
import MessengerPage from "./Pages/Services/MessengerPage";
import Node from "./Pages/Tech/Node";
import Docker from "./Pages/Tech/Docker";
import Mongo from "./Pages/Tech/Mongo";
import Redis from "./Pages/Tech/Redis";
import Postgre from "./Pages/Tech/Postgre";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/case", element: <CasePage /> },
  { path: "/articles", element: <ArticlesPage /> },
  { path: "/info", element: <InfoPage /> },
  { path: "/knowledge", element: <Knowledge /> },
  { path: "/web-app", element: <WebAppPage /> },
  { path: "/pwa-app", element: <PwaAppPage /> },
  { path: "/clients-pa", element: <LcClientsPage /> },
  { path: "/partners-pa", element: <LcPartnersPage /> },
  { path: "/portal", element: <PortalPage /> },
  { path: "/messenger", element: <MessengerPage /> },
  { path: "/technology/nodejs", element: <Node /> },
  { path: "/technology/docker", element: <Docker /> },
  { path: "/technology/mongodb", element: <Mongo /> },
  { path: "/technology/redis", element: <Redis /> },
  { path: "/technology/postgresql", element: <Postgre /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
