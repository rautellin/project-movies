import React, { useEffect, useState } from 'react'
import { Movies } from '../components/Movies'

export const NowPlaying = (props) => {
  const { apiKey, setHeader, loading, setLoading } = props
  const [movies, setMovies] = useState([])
  setHeader('Now playing movies')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setLoading(false)
      })
  }, [apiKey])

  return (
    <>
      {!loading &&
        <section>
          {movies.map((movie, index) => (
            <article key={index}>
              <Movies {...movie} />
            </article>
          ))}
        </section>
      }
    </>
  )
}