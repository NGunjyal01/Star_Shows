import Body from "./components/Body"
import './App.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";
import Browse from "./components/Browse";
import MoviePage from "./components/MoviePage";

function App() {

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
      path: '/body',
      element: <Body/>,
      children: [
        {
          path: 'browse',
          element: <Browse/>
        },
      ]
    }
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
