import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
