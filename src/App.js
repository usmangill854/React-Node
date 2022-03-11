 import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Dashboard from './page/Dashboard';
import Register from './page/Register';
function App() {
  return (
    <div  >
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>} /> 
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
