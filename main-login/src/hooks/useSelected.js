import { useState } from 'react'
import { searchSelected } from '../services/videogames.js'

export function useSelected({ id }) {
  const [selected, setSelected] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //Obtenemos datos
  const getSelected = async () => {
    const newSelected = await searchSelected({ id })
    setSelected(newSelected)
    setIsLoading(false)
  }

  return { selected, getSelected, isLoading }
}
