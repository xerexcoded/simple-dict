import axios from 'axios';
import './App.css';
import {useEffect,useState} from 'react';
import { Container, withStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Footer from "./components/Footer/Footer";
function App() {
  
  const [word, setword] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setcategory] = useState("en");
  const [LightMode, setLightMode] = useState(false)
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  const dictionaryApi = async() => {
     try{
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        console.log(data);
        setMeanings(data.data);

     }catch(error){console.log(error);}

  };
   
  useEffect(() => {
    dictionaryApi();
  }, [word,category])
  return (
     
    <div className="App" style={{height:"100vh", backgroundColor:LightMode?"#fff":"#282c34",color:LightMode? "black":"white",transition:"all 0.5 linear"}}>
      <Container maxWidth='md' style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly "}}>
         <div style={{position:"absolute",top:0,right:15,paddingTop:10}}>
            <span>{LightMode?"Dark":"Light"} Mode</span>
           <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)} />
          </div>
         <Header category={category} setcategory={setcategory} word={word} setword={setword} LightMode={LightMode}/>
         {meanings && ( //render only if meaning is present
           <Definitions word={word} meanings={meanings} category={category} LightMode={LightMode}/>
         )} 
              
      </Container>
      <Footer/> 
    </div>
  );
}

export default App;
 