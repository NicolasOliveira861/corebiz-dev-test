import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
