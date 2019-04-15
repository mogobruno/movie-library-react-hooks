import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

// Custom Hooks
import useMovieApi from 'hooks/useMovieApi'

// Components
import Vote from 'components/Vote'

// Styles
import styles from './styles'

const MovieBar = ({ classes, id }) => {
  const [movie] = useMovieApi('get', `/3/movie/${id}`)

  if (_.isEmpty(movie)) {
    return null
  }

  return (
    <div className={classes.content}>
      <div className={classes.movie}>
        <div className={classes.poster}>
          <img
            className={classes.posterImage}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className={classes.description}>
          <div className={classes.titleGroup}>
            <Vote value={movie.vote_average} />
            <h1 className={classes.title}>{movie.title}</h1>
          </div>
          <div className={classes.overview}>
            <p className={classes.title}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MovieBar)
