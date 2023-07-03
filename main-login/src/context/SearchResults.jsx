import { createContext, useContext, useState } from 'react'

const SearchResultsContext = createContext()

export function useSearchResults() {
  return useContext(SearchResultsContext)
}

export function SearchResultsProvider({ children }) {
  const [searchResults, setSearchResults] = useState([])

  const updateSearchResults = (newResults) => {
    setSearchResults(newResults)
  }

  return (
    <SearchResultsContext.Provider
      value={{ searchResults, updateSearchResults }}
    >
      {children}
    </SearchResultsContext.Provider>
  )
}
