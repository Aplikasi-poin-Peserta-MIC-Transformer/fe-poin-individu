import React from 'react';
import { Routes, Route, useOutlet } from "react-router-dom";
import PerivateRoute from './components/private-routes';
import Layout from './components/layout';

const Loading = React.lazy(() => import('./components/loading'));

const Login = React.lazy(() => import('./views/Auth/login'));
const Register = React.lazy(() => import('./views/Auth/register'));

const Gift = React.lazy(() => import('./views/Pages/gift'));
const GiftDetail = React.lazy(() => import('./views/Pages/gift_detail'));
const Barcode = React.lazy(() => import('./views/Pages/barcode'));
const Point = React.lazy(() => import('./views/Pages/point'));
const Profile = React.lazy(() => import('./views/Pages/profile'));
const ProfileEdit = React.lazy(() => import('./views/Pages/profile_edit'));
const ProfileMyGift = React.lazy(() => import('./views/Pages/profile_myGift'));
const ProfileResetPwd = React.lazy(() => import('./views/Pages/profile_reset_pwd'));

const MobileView = () => {
  const outlet = useOutlet();
  return (
    <div className="container-height container-width pb-5 mb-5">{outlet}</div>
  )
}

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MobileView />}>
          <Route element={<Layout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="*" element={<div className='page-not-found'>Page not Found 404</div>} />

          <Route path="/" element={<PerivateRoute />} >
            <Route path="/" element={<Layout />} >
              <Route path="/gift" element={<Gift />} />
              <Route path="/gift/:id" element={<GiftDetail />} />
              <Route path="/barcode" element={<Barcode />} />
              <Route path="/point" element={<Point />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
              <Route path="/profile/my-gift" element={<ProfileMyGift />} />
              <Route path="/profile/reset-password" element={<ProfileResetPwd />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
