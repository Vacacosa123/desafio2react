import { useState } from "react"
import Alert from "./Alert"


const Formulario = ({error, setError}) => {

  //useState usados
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [contraseña, setcontraseña] = useState("")
  const [contraseñaAgain, setContraseñaAgain] = useState("")

  //boton de visibilidad de boton
  const [alerta, setAlerta] = useState(false)


  //validador de datos
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (nombre === '' || correo === '' || contraseña === '' || contraseñaAgain === ''|| contraseña !== contraseñaAgain || regexCorreo.test(correo)==false)
    {
      
    setError(true)
    setAlerta(true)
    return;
    }
    setError(false)
    setAlerta(true)
    };
    


  //Codigo Retornado
  return (
    <>
    <form className="formulario" onSubmit={validarDatos}>
    <input
    type="text"
    name="nombre"
    className="form-control"
    onChange={(e) => setNombre(e.target.value)}
    value={nombre}
    placeholder="Nombre"
    />
        <input
    type="text"
    name="correo"
    className="form-control"
    onChange={(e) => setCorreo(e.target.value)}
    value={correo}
    placeholder="TuEmail@ejemplo.com"
    />
        <input
    type="text"
    name="contraseña"
    className="form-control"
    onChange={(e) => setcontraseña(e.target.value)}
    value={contraseña}
    placeholder="Contraseña"
    />
        <input
    type="text"
    name="again"
    className="form-control"
    onChange={(e) => setContraseñaAgain(e.target.value)}
    value={contraseñaAgain}
    placeholder="Confirmar Contraseña"
    />

    <button type="submit" className="btn btn-primary" onClick={() => setAlerta(false)}>
    Enviar
    </button>

    </form>    

    {alerta && <Alert error={error}/>}

    </>
  )
}

export default Formulario