// pages
import Home from './pages/Home';
import Details from './pages/Details';

// router
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </>
  )
}

export default App
