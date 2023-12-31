import './App.css';
import { Navbar, Banner, Skills } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;