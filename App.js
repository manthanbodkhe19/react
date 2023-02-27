
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';


//add color changing buttons in this app
function App() {
const [mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);
const showAlert = (message, type)=>{
setAlert({
  msg: message, 
  type: type
})
setTimeout(() => {
  setAlert(null);      //this methos is used in alert to automatically gayab the alert 
}, 3000);               //aftter 3 sec par mujko achha laga isiliye maine rehnediya
}


const togglemode = ()=>{
if (mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("dark mode is enabled", "success")
  document.title = 'TextUtils - dark mode';
  
}
else {
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("dark mode is disables", "success")
  document.title = 'TextUtils - light mode';
}
}


return (
<>
{/*< Navbar title="TextUtiles" aboutText="AboutUs"/>?*/} 




<Navbar title="TextUtiles" mode={mode} togglemode={togglemode} />
{/*<Navbar/> agar default hono toh upper wala remove karo bass navbar rakho */}

<Alert alert={alert}/>
<div className="container my-3">
{/*< TextForm showAlert={showAlert} heading="Enter your texyt here to analyze" mode={mode}></TextForm>*/}
<About/>

</div>



</> 
   
 
   
      
  );
}

export default App;

