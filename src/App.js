import {useState} from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {
  const [role,setRole]=useState('dev')
  console.log('hello');
  const em=true;
  return (
    <div className="App">
     <h1>hello</h1>
     {em? (<>
     
      <input type="text" onChange={(e)=>{
        console.log(e.target.value);
        setRole(e.target.value)
      }}  />
     
     <Employee name="Sherzod" role="Web developer"/>
     <Employee name="quvondiq" role={role}/>
     <Employee name="quvondiq" role="backend"/>
     <Employee name="quvondiq" />
     <Employee name="quvondiq" role="backend"/>
     <Employee name="quvondiq" role={role}/>
     <Employee name="quvondiq" role="backend"/>
     <Employee name="quvondiq" />
     <Employee name="quvondiq" role="backend"/>
     </>):<p>No employee is here</p>}

     
    </div>
  );
}

export default App;
