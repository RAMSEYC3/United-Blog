import Home from './Pages/Home';
import Create from './Pages/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
