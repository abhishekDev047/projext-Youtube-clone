
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App flex flex-col bg-black text-white">
      <Navbar/>
      <div className='flex w-full mt-auto'>
      <Sidebar/>
      <Home/>
      </div>
</div>
  );
}

export default App;
