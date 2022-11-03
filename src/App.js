import './App.css';
import Home from './screens/home';
import Connector from './screens/connector';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="pipelines"/>} />
          <Route path='pipelines'>
            <Route index element={<Home />}/>
          </Route>
          <Route path='connector'>
            <Route index element={<Connector />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
