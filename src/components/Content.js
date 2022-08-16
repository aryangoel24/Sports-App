import React, {useState} from 'react'
import Standings from './Standings.js'
import Players from './Players.js'
import '../App.css'

const Navbar = () => {

    const [active, setActive] = useState(true)

  return (
    <div className='content-container'>
        <div className='tabs'>
            <div className='tab-standings' onClick={() => setActive(true)}>
                <h2 style={{color: active ? '#c20114' : null}}>Football</h2>
            </div>
            <div className='tab-players' onClick={() => setActive(false)}>
                <h2 style={{color: !active ? '#c20114' : null}}>Cricket</h2>
            </div>
        </div>

        {active ? <Standings /> : <Players />}
    </div>
  )
}

export default Navbar