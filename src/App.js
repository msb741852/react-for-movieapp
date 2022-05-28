import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import './css/style.css';

function App() {
  return (
    <Router>
      <h1 className="web_title">Movie App with React</h1>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App;
