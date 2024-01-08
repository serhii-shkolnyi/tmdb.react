import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";

const routerConfig = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
  },
]);

export { routerConfig };
