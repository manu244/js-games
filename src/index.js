import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route , HashRouter} from "react-router-dom";
import App from './App';
import Game1 from './components/games/game1';
import Home from './components/home/home';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Game2 from './components/games2/game2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="game1" element={<Game1 />} />
          <Route path="game2" element={<Game2 />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
