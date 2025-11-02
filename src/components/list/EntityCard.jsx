function EntityCard({ pokemon }) {
  return (
    <div className="col">
      <div className="card bg-secondary text-light h-100 shadow-sm border-0">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="card-img-top p-3"
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize">{pokemon.name}</h5>
          <p className="card-text text-warning">{pokemon.type}</p>
        </div>
      </div>
    </div>
  )
}

export default EntityCard