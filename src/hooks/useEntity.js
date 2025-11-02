import { useEffect, useState } from 'react'
import api from '../services/api.js'

export default function useEntity(nameOrId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (!nameOrId) return
    let cancel = false
    setLoading(true); setError(null)
    api.get(`pokemon/${nameOrId}`)
      .then(r => !cancel && setData(r.data))
      .catch(e => !cancel && setError(e))
      .finally(() => !cancel && setLoading(false))
    return () => { cancel = true }
  }, [nameOrId])


  return { data, loading, error }
}
