import { useEffect, useState } from 'react'
import { getTypes } from '../../services/pokemonService.js'

function FilterBar({ onFilter }) {
  const [types, setTypes] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    getTypes().then(setTypes).catch(() => setTypes([]))
  }, [])

  const handleSearch = () => onFilter({ name, type })
  const handleClear = () => {
    setName(''); setType('')
    onFilter({ name: '', type: '' })
  }

  return (
    <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
      <input
        type="text"
        className="form-control w-auto"
        placeholder="Buscar Pokémon"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="form-select w-auto"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Todos los tipos</option>
        {types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <button className="btn btn-warning" onClick={handleSearch}>Buscar</button>
      <button className="btn btn-outline-light" onClick={handleClear}>Limpiar</button>
    </div>
  )
}

export default FilterBar