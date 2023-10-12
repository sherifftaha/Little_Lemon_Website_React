import Home from './pages/Home';
import BookingPage from './pages/BookingPage/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App;
