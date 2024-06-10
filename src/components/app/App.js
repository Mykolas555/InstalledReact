import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Start from "../start/Start"

function App() {
  return (
    <>
    <h1>Start</h1>
    <Router>
      <Routes>
        <Route exact path="/start" element={<Start />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
