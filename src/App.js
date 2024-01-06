import Body from "./components/Body"
import './App.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";
import Browse from "./components/HomePage/Browse";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows/TVShows";
import MyList from "./components/MyList";
import Genre from "./components/Genre";
import GPTSearchPage from "./components/GPTPage/GPTSearchPage";
import MyAccount from "./components/MyAccount";
import Explore from "./components/Explore";

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
          path: 'GPTSearch',
          element: <GPTSearchPage/>
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
        {
          path: 'account',
          element: <MyAccount/>
        },
        {
          path: 'explore',
          element: <Explore/>
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
