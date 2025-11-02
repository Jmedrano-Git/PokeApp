import { useState } from 'react'
import usePokemons from '../hooks/usePokemons.js'
import EntityCard from '../components/list/EntityCard.jsx'
import FilterBar from '../components/list/FilterBar.jsx'
import LoadingSpinner from '../components/common/LoadingSpinner.jsx'

function ListPage() {
  const { pokemons, loading, page, setPage } = usePokemons(12)
  const [filters, setFilters] = useState({ name: '', type: '' })
  const filtered = pokemons.filter(p => {
    const matchName = p.name.toLowerCase().includes(filters.name.toLowerCase())
    const matchType = filters.type ? p.type.includes(filters.type) : true
    return matchName && matchType
  })

  return (
    <div>
      <h2 className="text-center mb-4">Listado de Pokémon</h2>
      <FilterBar onFilter={setFilters} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {filtered.map(p => <EntityCard key={p.id} pokemon={p} />)}
        </div>
      )}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-light me-2" disabled={page === 0} onClick={() => setPage(p => p - 1)}>Prev</button>
        <button className="btn btn-warning" onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  )
}

export default ListPage