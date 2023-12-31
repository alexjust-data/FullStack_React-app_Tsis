import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/auth/Signup/Signup';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import WelcomePage from './pages/auth/WelcomePage/WelcomePage';
import AdvertsPage from './pages/adverts/AdvertsPage';
import AdvertPage from './pages/adverts/AdvertPage';
import NewAdvertPage from './pages/adverts/NewAdvertPage';
import Layout from './components/layout/Layout';
import RequireAuth from './pages/auth/components/RequireAuth';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adverts" element={<Layout />}>
          <Route index
            element={
              <RequireAuth>
                <AdvertsPage/>
              </RequireAuth>
            }
          />
          <Route
            path=":id"
            element={
              <RequireAuth>
                <AdvertPage/>
              </RequireAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequireAuth>
                <NewAdvertPage/>
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/404" element={
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontSize: '2em',
              fontWeight: 'bold',
            }}>
              404 | Not found
            </div>} 
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;

