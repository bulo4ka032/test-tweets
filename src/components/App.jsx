import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/tweets' element={<Tweets/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Route>
    </Routes>
  );
};
