import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      </Routes>


    </Router>  
  );
}

export default App;