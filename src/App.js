import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './AuthProvider/AuthProvider';
import { router } from './routes/Routes';

function App() {
  const {toggle} = useContext(AuthContext);

  return (
    <div data-theme={toggle ? "lofi" : "luxury"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
