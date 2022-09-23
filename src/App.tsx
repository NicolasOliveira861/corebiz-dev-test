import Store from './context/StoreContext';
import Router from './routes';

function App() {
  return (
    <Store>
      <Router />
    </Store>
  );
}

export default App;
