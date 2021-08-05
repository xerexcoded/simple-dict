import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import "./Header.css";
import categories from '../../data/category';

const Header = ({category,setcategory,word, setword,LightMode}) => {
    const darkTheme = createTheme({
        palette: {
          primary:{main:LightMode?'#000':'#fff'},
          type: LightMode?'light':'dark',
        },
      });
      const handleChange=(language) => {
          setcategory(language);
          setword(""); 
      };
    return (
        <div className='header'> 
            <span className='title'>{word?word:"what? :]"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                <TextField 
                className="search"  
                label="Search a word"
                label="Standard" 
                value={word}
                onChange={(e)=> setword(e.target.value)}
                 />
                <TextField
                    className="select"
                    select
                    label="language"
                    value ={category}
                    onChange={(e) => handleChange(e.target.value )}
                    
        >
          {
              categories.map((option) =>(
                <MenuItem  key={option.label} value={option.label} >
                {option.value}
                </MenuItem>
              ))
          }
            
          
        </TextField> 
                </ThemeProvider>
            
            </div>
        </div>
    )
}

export default Header
