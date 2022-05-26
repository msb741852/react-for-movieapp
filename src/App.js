import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import './css/style.css';

function App() {
  return (
    <Router>
      <h2 className="web_title">Movie App with React</h2>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App;
