import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/home'));
const PostForm = lazy(() => import('./pages/PostForm'));
const SinglePost = lazy(() => import('./pages/SinglePost'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isAuthenticated = Boolean(token);

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-pink-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-700 drop-shadow">📝 Make Blogs</h1>
      <Suspense fallback={<div className="text-center mt-10 text-blue-600">Loading...</div>}>
        <Routes>
          {/* ✅ Always show login on / */}
          <Route path="/" element={<Login />} />
          {/* Show register only if not authenticated */}
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/home" replace />}
          />
          {/* ✅ Protected routes */}
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/posts/new"
            element={isAuthenticated ? <PostForm /> : <Navigate to="/" replace />}
          />
          <Route
            path="/posts/:id"
            element={isAuthenticated ? <SinglePost /> : <Navigate to="/" replace />}
          />
          <Route
            path="/posts/:id/edit"
            element={isAuthenticated ? <PostForm /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
