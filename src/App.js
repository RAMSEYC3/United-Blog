import Home from './Pages/Home';
// import Navbar from './Navbar/Navbar';
import Create from './Pages/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
