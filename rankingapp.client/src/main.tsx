import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RankItem from './component/RankItems'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar.tsx';
import RankingContainer from './component/RankingContainer';
import AlbumImageArr from './component/albumImages.tsx';
import MovieImageArr from './component/movieImages.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/rank-movies" element={<RankingContainer dataType={1} imgArr={MovieImageArr} />} />
                <Route path="/rank-albums" element={<RankingContainer dataType={2} imgArr={AlbumImageArr} />} />
                <Route path="/weatherforcast" element={<RankItem />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
