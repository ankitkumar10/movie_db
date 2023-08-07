import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopRated, fetchTrendingAll, fetchWhatspopular } from './features/api/apiSlice';
import { Routes, Route } from 'react-router-dom';
import { getConfigurationDetails } from './utility/common';
import Layout from './sections/common/layout/Layout';
import Main from './sections/main/Main';
import ItemDetails from './sections/itemDetails/ItemDetails';
import './App.css';
import Discover from './sections/discover/Discover';
import Collection from './sections/collection/Collection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingAll()); //trending
    dispatch(fetchWhatspopular()); //popular
    dispatch(fetchTopRated()); //toprated
  },[dispatch])

  useEffect(() => {
    getConfigurationDetails(dispatch);   
  },[dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Main />}/>
          <Route path="movie">
            <Route path=":id" element={<ItemDetails section="movie"/>} />
          </Route>
          <Route path="tv">
            <Route path=":id" element={<ItemDetails section="tv" />} />
          </Route>
          <Route path="discover">
            <Route path=":mediaType" element={<Discover />} />
          </Route>
          <Route path="collection">
            <Route path=":query" element={<Collection />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
