import Body from "./components/Body"
import './App.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";
import Browse from "./components/Browse";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows";
import MyList from "./components/MyList";
import Genre from "./components/Genre";

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
        {
          path: 'movies',
          element: <Movies/>
        },
        {
          path: 'tvshows',
          element: <TVShows/>
        },
        {
          path: 'mylist',
          element: <MyList/>
        },
        {
          path: 'genre',
          element: <Genre/>
        },
        // {
        //   path: 'moviePage',
        //   element: <MoviePage/>
        // }
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
