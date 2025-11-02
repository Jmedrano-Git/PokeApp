import { useEffect, useState } from 'react'
import { getPokemons } from '../services/pokemonService.js'

export default function usePokemons(limit = 12) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)


  useEffect(() => {
    setLoading(true)
    getPokemons(page * limit, limit)
      .then(data => setPokemons(data))
      .finally(() => setLoading(false))
  }, [page, limit])


  return { pokemons, loading, page, setPage }
}
