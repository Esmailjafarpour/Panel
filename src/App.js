import './app.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/pages/home';


function App() {
  return (
    <div>
     <Topbar/>
     <div className="container">
        <Sidebar/>
        <Home/>
     </div>
    </div>
  );
}

export default App;
