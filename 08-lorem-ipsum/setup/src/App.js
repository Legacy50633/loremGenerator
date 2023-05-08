import React, { useState } from 'react';
import data from './data';
function App() {
  const [lorem,setLorem] = useState([])
  const [index,setIndex] = useState(0)
  const handle =(e)=>{
     e.preventDefault()
    let amount = parseInt(index)
    if(amount >0){
   setLorem(data.slice(0,amount))
    }
    else{
      setLorem(data[0])
    }
      }
  return (
      <section className="section-center">
        <h3>Bored of Lorem ipsum..?!</h3>

        <form action="" className="lorem-form" onSubmit={handle}>
               <label htmlFor="index">Paragraphs</label>
             <input type="number" name="index" id="index" max={9}
              onChange={(e)=>{setIndex(e.target.value) 
                
              }}   />
        <button > Generate</button>
        </form>
        <div>
      {lorem}
        
        </div>
      </section>
    )
}

export default App;
