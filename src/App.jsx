import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SignIn from "./routes/signIn/SignIn";
import SignUP from "./routes/signUp/SignUp";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import AboutPage from "./routes/about/AboutPage";
import AgentsPage from "./routes/agents/AgentsPage";
import ContactPage from "./routes/contact/ContactPage";
import ErrorPage from "./routes/errorPage/ErrorPage";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const takenUsernames = ["Admin", "user123", "test_user"];
  const passwords = ["admin", "user123", "testuse"];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          username={username}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/signin",
          element: (
            <SignIn
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              takenUsernames={takenUsernames}
              passwords={passwords}
            />
          ),
        },
        {
          path: "/signup",
          element: (
            <SignUP
              setPassword={setPassword}
              setUsername={setUsername}
              takenUsernames={takenUsernames}
            />
          ),
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage username={username} password={password} />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/agents",
          element: <AgentsPage />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
