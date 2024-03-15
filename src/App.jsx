import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

function App() {
  console.log(import.meta.env.VITE_URL_BACK_HTTP);
  console.log(import.meta.env.VITE_URL_BACK_WS);
  return <RouterProvider router={router} />;
}

export default App;
