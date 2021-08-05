import React from 'react'
import './Definitions.css';
const Definitions = ({word,category,meanings,LightMode}) => {
    return (
        <div className='meanings'>
            {
                meanings[0] && word && category === 'en'&&(
                    <audio src ={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}style={{backgroundColor :"#fff",borderRadius:"10px"}}controls  >AUDIO NOT SUPORTED D:</audio>
                )
            }
            {
                word===""?(<span className='subtitle'>start by typing a word</span>):(meanings.map((mean)=>( mean.meanings.map((item)=>(
                    item.definitions.map((def)=>(
                        <div className='singlemean' style={{backgroundColor:LightMode?' #3b5360':'white', color:LightMode?'white':'black'}}>
                            <b>{def.definition }</b>
                            <hr style={{backgroundColor:'black',width:'100%'}}/>
                            {def.example && (
                                <span>
                                    <b>Example: </b>
                                    {def.example}
                                </span>
                            )}
                             
                            {def.synonym && (
                                <span>
                                <b>Synonym: </b>
                                {def.synonym.map((s)=>`${s}`)}
                            </span>
                            )}

                        </div>
                    ))
                )))))
            }
        </div>
    )
}

export default Definitions
