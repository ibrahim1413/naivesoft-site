import { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import { Privacy, Terms } from './pages/Legal';

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const mode = useSelector((state) => state.theme.mode);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='team' element={<Team />} />
        <Route path='feedback' element={<Feedback />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='terms' element={<Terms />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
