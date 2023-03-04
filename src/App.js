import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.scss';
import './Scripts/homePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
