import Store from 'context/StoreContext';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';

const Router = () => {
  return (
    <Store>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Store>
  );
};

export default Router;
