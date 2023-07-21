import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Post from "./pages/Post";

function App() {
  // <!-- chosen anime API (reused from js project): https://docs.api.jikan.moe/ -->

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home exact />} />
          <Route path="/animelist" element={<List />} />
          <Route path="/animelist/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
