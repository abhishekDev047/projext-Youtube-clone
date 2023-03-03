
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App font-serif flex">
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <Home/>
      </div>
</div>
  );
}

export default App;
