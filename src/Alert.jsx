
const Alert = ({error}) => {
  console.log(error)

  let message = error ? (
    <div className="alert alert-danger" role="alert">
      No llenaste los campos de la manera debida!
    </div>
  ) : (
    <div className="alert alert-success" role="alert" >
      La inscripción fue exitosa!
    </div>
  );

  return (

    <div> {message}</div>
  )
}

export default Alert