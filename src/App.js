
import './App.css';
import Calculater from './components/Calculater';
import ToggleButton from './components/ToggleButton';
import { useEffect,useState } from 'react';
function App() {
  const [theme, setTheme] = useState('light-theme')
  const [text, setText] = useState('Dark-Mode')

  document.body.className=theme
  useEffect(() => {
    
  
 
  }, [theme])

  const handleToggle = ()=>{
    if(theme==='light-theme'){
      setTheme('dark-theme')
      setText('Light-Mode')
    }
    else{
      setTheme('light-theme')
      setText('Dark-Mode')

    }
  }
  
  return (
    <div className="app">
     
     <Calculater/>
     <ToggleButton text={text} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
