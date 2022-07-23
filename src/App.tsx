import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import DefaultLayer from "./components/DefaultLayer";

function App() {
  return (
    <div className="App">
      <DefaultLayer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DefaultLayer>
    </div>
  );
}

export default App;
