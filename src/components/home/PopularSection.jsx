import { useEffect, useState } from 'react'
import { getPokemons } from '../../services/pokemonService.js'
import EntityCard from '../list/EntityCard.jsx'

function PopularSection() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPokemons(0, 6).then(setPopular).catch(() => setPopular([]))
  }, [])

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Pokémon Destacados</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {popular.map(p => <EntityCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  )
}

export default PopularSection