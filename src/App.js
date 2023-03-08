import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './Scripts/homePage';
import './Scripts/wizardScript';
import HomePage from './Pages/HomePage';
import WizardHome from './Pages/WizardHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WizardHome />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
