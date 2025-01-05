import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import WhatIsReactPage from "./pages/WhatIsReact.jsx";
import InstallationPage from "./pages/Installation.jsx";
import BasicsPage from "./pages/Basics.jsx";
import StylingPage from "./pages/Styling.jsx";
import EventsPage from "./pages/Events.jsx";
import AdvancedPage from "./pages/Advanced.jsx";
import ReduxPage from "./pages/Redux.jsx";
import ReactRouterPage from "./pages/ReactRouter.jsx";
import AuthenticationPage from "./pages/Authentication.jsx";
import RootLayout from "./pages/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/what-is-react", element: <WhatIsReactPage /> },
      { path: "/installation", element: <InstallationPage /> },
      { path: "/basics", element: <BasicsPage /> },
      { path: "/styling", element: <StylingPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/advanced", element: <AdvancedPage /> },
      { path: "/redux", element: <ReduxPage /> },
      { path: "/react-router", element: <ReactRouterPage /> },
      { path: "/authentication", element: <AuthenticationPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
