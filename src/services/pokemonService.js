import api from './api.js'

export async function getPokemons(offset = 0, limit = 12) {
  const res = await api.get(`pokemon?offset=${offset}&limit=${limit}`)
  const detailed = await Promise.all(
    res.data.results.map(async (p) => {
      const d = await api.get(p.url)
      return {
        id: d.data.id,
        name: d.data.name,
        image: d.data.sprites.other['official-artwork'].front_default,
        type: d.data.types.map(t => t.type.name).join(', ')
      }
    })
  )
  return detailed
}


export async function getTypes() {
  const res = await api.get('type')
  return res.data.results.map(t => t.name)
}
