import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario'
import SocialButton from './SocialButton'

function App() {

  const [error, setError] = useState(false)
  const icons = [{image:'https://img.icons8.com/?size=48&id=32323&format=png'},{image:'https://img.icons8.com/?size=48&id=13912&format=png'}, {image: 'https://img.icons8.com/?size=48&id=17949&format=png'}, {image: 'https://img.icons8.com/?size=48&id=13930&format=png'}]

  return (
    <>  
    <div className="card bg-light mb-3" >
    <div className="card-header">Registrese aca!</div>
    <div className="card-body">
     
    <div className="icons">
           {
      icons.map(icon =>{
        return  <SocialButton key={icon.image} icons={icon.image}/>
        
      }) 
    }
          </div>
    <Formulario error={error} setError={setError}/>
    </div>
  </div>

     
    </>
  )
}

export default App
