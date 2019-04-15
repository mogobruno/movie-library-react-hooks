import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

// Services
import objectAsQueryString from 'services/objectAsQueryString'

// Configs
import config from 'config'

const theMovieDbHost = config.env.hosts.themoviedb
const apiAuth = `?api_key=${config.env.themoviedb.apiKey}&`
const initialState = {
  results: []
}

// Adds TMDB api key on the request
const useMovieApi = (httpMethod, path, queryObject = {}, body={}) => {
  const [movies, setMovies] = useState(initialState)

  // Used to compare old state and new state when component will update
  const ref = useRef({ call: '', body: '' })

  const url = `${theMovieDbHost}${path}${apiAuth}${objectAsQueryString(queryObject)}`

  const fetchData = async () => {
    try {
      const response = await axios[httpMethod](url, body)
      setMovies(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (
      ref.current.call !== `${httpMethod}${url}` ||
      ref.current.body !== JSON.stringify(body)
    ) {
      ref.current = {
        call: `${httpMethod}${url}`,
        body: JSON.stringify(body)
      }
      fetchData()
    }
  })

  return [movies, setMovies]
}

export default useMovieApi
