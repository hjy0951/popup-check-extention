import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navigation-bar">LOGO</div>
      <div className="main-contents">MAIN</div>
      <div className="footer-bar">FOOTER</div>
    </div>
  );
}

export default App;
