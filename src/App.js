import React, {useEffect, useState} from 'react';
import './App.css';
import BirdCard from './components/BirdCard';

const API_BIRD = 'https://aves.ninjas.cl/api/birds'

function App() {

  const [birds, setBirds] = useState([])

  useEffect(() => {
    searchBirds()
  }, [])

  const searchBirds =  async () => {
    const response = await fetch(API_BIRD)
    const data = await response.json()
    
    setBirds(data.splice(0, 21))
  } 

  return (
    <div className="app">
      <h1>BIRDS-LAND</h1>

      <div className="search">
        <input 
        placeholder="Search for birds..."
        value=""
        onChange={() => {}}
        />
      </div>

      

        {birds?.length > 0 
        ?(
          <div className='container'>
            {birds.map(bird =>(
              <BirdCard bird={bird} />
            ))}

          </div>
        ):(
          <div className='empty'>
            <h2>No birds found.</h2>
          </div>
          )
        }
    </div>
  );
}

export default App;
