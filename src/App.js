import { BrowserRouter, Routes, Route } from 'react-router-dom';

import createAxiosInstance from './Service/AxiosClient';
import Home from './Page/Home/Home.component';
import Detail from './Page/Detail/Detail.component';
import './App.css';
import './styles/global.css';

function App() {
  const axios = createAxiosInstance();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home axios={axios} />} />
        <Route path="/detail" element={<Detail axios={axios} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
