import logo from './logo.svg';
import './App.css';
import Todo from './TodoComponent/Todo';
import Fileexplorer from './FileExplorer/Fileexplorer';
import formdata from  "./data.json"
import Stepper from './Stepper/Stepper';
import Tab from './TabComponent/Tab';
import {steps} from "./Steps"

function App() {
  return (
    <div className="App">
     {/* <Todo/> */}
     {/* <Fileexplorer  formdata={formdata}/> */}
     {/* <Stepper stepper={steps}/> */}
     <Tab tab={steps}/>
    </div>
  );
}

export default App;
