import { useState } from 'react'
import Light from './components/Light'
import lightsData from './lightsData'

export default function App() {
  const [lights, setLights] = useState(lightsData)

  function toggle(id) {
    setLights(prevLights => 
      prevLights.map(light =>
        light.id === id ? {...light, on: !light.on} : light
      )
    )
  }
  
  function turnOnAll() {
    setLights(prevLights =>
      prevLights.map(light =>
        ({...light, on: true})
      )
    )
  }

  function turnOffAll() {
    setLights(prevLights =>
      prevLights.map(light =>
        ({...light, on: false})
      )
    )
  }
  
  

  return (
    <div className="app-container">

      <div className="buttons-container">
        <button className="turn-on-all-btn" onClick={turnOnAll}>Turn On All</button>
        <button className="turn-off-all-btn" onClick={turnOffAll}>Turn Off All</button>
      </div>

      <div className="lights-container">
        {lights.map(light => (
          <Light key={light.id} id={light.id} colour={light.colour} on={light.on} toggle={toggle} />
        ))}
      </div>

    </div>
  )
}
