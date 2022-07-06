
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchWeather from './component/SearchWeather';
import Path from './router';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Path/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
