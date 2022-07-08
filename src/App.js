
import { BrowserRouter } from 'react-router-dom';
import './App.css';
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
