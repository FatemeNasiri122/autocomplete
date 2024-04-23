import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import React from 'react';
import NotFound from './pages/NotFound';
const Home = React.lazy(() => import('./pages/Home'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
