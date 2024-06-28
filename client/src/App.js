import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home.js';

// import ProtectedRoute from './components/ProtectedRoute';

function App() {

	// const [cookie] = useCookies(['token']);
  // const isUserLoggedIn = !!localStorage.getItem('user')
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=<Home />
          />
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

