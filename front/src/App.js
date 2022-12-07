import './App.css';

import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import Nav from './components/layout/Nav.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/galeria' element={<GaleriaPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/novedades' element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
 /*<BrowserRouter>
<Nav />
<Routes>
<Routhe path ='/' element={<HomePage />} />
<Routhe path ='/nosotros' element={<NosotrosPage />} />
<Routhe path ='/galeria' element={<GaleriaPage />} />
<Routhe path ='/contacto' element={<ContactoPage />} />
<Routhe path ='/novedades' element={<NovedadesPage />} />
</Routes>
</BrowserRouter> */