import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import MainLayout from "./components/Layout/MainLayout.tsx";
import Login from "./pages/Login.tsx";
import AllDoctors from "./pages/AllDoctors.tsx";
import About from "./pages/About.tsx";
import Content from "./pages/Content.tsx";
import { ToastContainer } from "react-toastify";
import DoctorDatailes from "./pages/DoctorDatailes.tsx";
import MyAppoiment from "./pages/MyAppoiment.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/AllDoctors",
        Component: AllDoctors,
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/Content",
        Component: Content,
      },
      {
        path: "/:id",
        Component: DoctorDatailes,
      },
      {
        path: "/MyAppoiment",
        Component: MyAppoiment,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>,
);
