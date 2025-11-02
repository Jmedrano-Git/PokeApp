function ErrorAlert({ message = 'Ocurrió un error al cargar los datos.' }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  )
}

export default ErrorAlert