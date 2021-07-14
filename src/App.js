import './App.css';
import SBySolid from './component/SBySolid';
import OBySolid from './component/OBySolid';
import IBySolid from './component/IBySolid';
import DBySolid from './component/DBySolid';

function App() {
  return (
    <div className="App">
      <SBySolid className="Solid"/>
      <OBySolid className="Solid"/>
      <IBySolid className="Solid"/>
      <DBySolid className="Solid"/>
    </div>
  );
}

export default App;
