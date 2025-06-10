import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
import Vista1 from './Vista1';
import Vista2 from './Vista2';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/vista1" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
        <Route path="*" element={<Vista1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
