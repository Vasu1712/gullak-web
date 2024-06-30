import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home.js';
import LandingPage from './routes/LandingPage';
import SignupPage from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import ProfilePage from './routes/ProfilePage';
import './firebaseConfig';
import './custom.css';

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
          <Route
            path='/landingPage'
            element=<LandingPage />
          />
          <Route
            path='/signup'
            element=<SignupPage />
          />
          <Route
            path='/login'
            element=<LoginPage />
          />
          <Route
            path='/profile'
            element=<ProfilePage />
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

