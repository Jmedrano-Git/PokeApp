function HeroSection() {
  return (
    <div className="text-center py-5 bg-warning text-dark rounded">
      <h1 className="display-5 fw-bold">¡Bienvenido a la PokéDex!</h1>
      <p className="lead">Explora, filtra y descubre tus Pokémon favoritos usando la PokeAPI.</p>
      <a href="/lista" className="btn btn-dark mt-3">Ver todos</a>
    </div>
  )
}

export default HeroSection