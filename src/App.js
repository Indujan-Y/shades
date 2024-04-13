import "./App.css";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 not found</div>
  },
  {
    path: "/login",
    element: <Login />,
  }, {
    path: "/signup",
    element: <SignUp />
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router}/>
  </div>;
}

export default App;
