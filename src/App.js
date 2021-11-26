import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
