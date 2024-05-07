import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  ProjectPage,
  NoticePage,
  MemberPage,
  MemberDetail,
} from "./pages/index";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "notices",
        element: <NoticePage />,
      },
      {
        path: "members",
        element: <MemberPage />,
      },
      {
        path: "members/:id",
        element: <MemberDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
