import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  // <!-- chosen anime API (reused from js project): https://docs.api.jikan.moe/ -->
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/animelist" element={<List />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
