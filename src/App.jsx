import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <p>Welcome to HomePage</p>
        <h1>This is Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>This is About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>This is Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>This is Contact Page</h1>
      </section>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
