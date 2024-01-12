import './App.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Login from "./components/Login/Login";
import Body from "./components/Body"
import Browse from "./components/HomePage/Browse";
import MoviePage from "./components/Movies/MoviePage";
import Movies from "./components/Movies/Movies";
import TVShows from "./components/TVShows/TVShows";
import MyList from "./components/MyList";
import Genres from "./components/Genres/Genres";
import GPTSearchPage from "./components/GPTPage/GPTSearchPage";
import MyAccount from "./components/MyAccount";
import Explore from "./components/Explore";
import TVShowPage from "./components/TVShows/TVShowPage";
import GenrePage from "./components/Genres/GenrePage";

function App() {

  // const appRouter = createBrowserRouter([
  //   {
  //       path: "/",
  //       element: <Login/>,
  //   },
  //   {
  //     path: '/body',
  //     element: <Body/>,
  //     children: [
  //       {
  //         path: 'browse',
  //         element: <Browse/>
  //       },
  //       {
  //         path: 'GPTSearch',
  //         element: <GPTSearchPage/>
  //       },
  //       {
  //         path: 'movies',
  //         element: <Movies/>
  //       },
  //       {
  //         path: 'tvshows',
  //         element: <TVShows/>
  //       },
  //       {
  //         path: 'mylist',
  //         element: <MyList/>
  //       },
  //       {
  //         path: 'genre',
  //         element: <Genre/>
  //       },
  //       {
  //         path: 'account',
  //         element: <MyAccount/>
  //       },
  //       {
  //         path: 'explore',
  //         element: <Explore/>
  //       },
  //     ]
  //   }
  // ]);

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Login/>}/>
          <Route path="browse" element={<Browse/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="tvshows" element={<TVShows/>}/>
          <Route path="mylist" element={<MyList/>}/>
          <Route path="genre" element={<Genres/>}>
            <Route path=":genre_id" element={<GenrePage/>}/>
          </Route>
          <Route path="GPTSearch" element={<GPTSearchPage/>}/>
          <Route path="explore" element={<Explore/>}/>
          <Route path="account" element={<MyAccount/>}/>
          <Route path="movies/:movie_id" element={<MoviePage/>}/>
          <Route path="tvshows/:tvShow_id" element={<TVShowPage/>}/>
        </Route>
      </>
    )
  )

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
