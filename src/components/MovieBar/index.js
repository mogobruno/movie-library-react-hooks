import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

// Custom Hooks
import useMovieApi from 'hooks/useMovieApi'

// Components
import MovieCard from 'components/MovieCard'

// Styles
import styles from './styles'

const MovieBar = ({ classes, title, request, wrap = false }) => {
  const [movies] = useMovieApi('get', request.path, request.query, request.body)

  if (!movies.results.length) {
    return null
  }

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>{title}</h1>
      <div className={ wrap ? classes.moviesWrap : classes.movies }>
        {movies.results.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />
        })}
      </div>
    </div>
  )
}

MovieBar.propTypes = {
  classes: PropTypes.object.isRequired,
  request: PropTypes.object,
  title: PropTypes.string,
  wrap: PropTypes.bool
}

export default withStyles(styles)(MovieBar)
