
import './App.css';
// import {ClassComponent} from "./components/ClassComponent";
import "./components/style.css"
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import { useState } from "react";


function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const ClickFunction = (e) => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const ClickClass = (e) => setClsHidden((current) => !current);
  return (
    
    <div  className='text1'>
       <h1 className='App'>Styling Using Functional And Class Component</h1>
       <div className="bn">
        <button className="btn fb" onClick={ClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="btn cb" onClick={ClickClass}>
          To see styling in Class Component
        </button>
</div>
<div className="text2">
        <>{!funcHidden ? <FunctionalComponent /> : null}</>
        <>{!clsHidden ? <ClassComponent /> : null}</>
      </div>
    </div>
  );
}

export default App;