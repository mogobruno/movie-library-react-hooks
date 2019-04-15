import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

// Styles
import styles from './styles'

// Components
import Vote from 'components/Vote'

// Config
import history from '../../history'

const MovieCard = ({ classes, movie }) => {
  const [isHover, setHover] = useState(false)

  const redirectToMovie = movieId => {
    return () => {
      sessionStorage['movie_app_latest_view'] = movieId
      history.push(`/movie/${movieId}`)
    }
  }

  const hoverContent = (
    <div className={classes.details}>
      <Fab
        size="small"
        color="secondary"
        aria-label="Add"
        className={classes.more}
        onClick={redirectToMovie(movie.id)}>
        <AddIcon />
      </Fab>
      <h2 className={classes.title}>{movie.title}</h2>
      <p className={classes.description}>{movie.overview}</p>
    </div>
  )

  return (
    <div
      className={classes.content}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={redirectToMovie(movie.id)}>
      <div className={classes.vote}><Vote value={movie.vote_average} /></div>
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      { isHover ? hoverContent : null }
    </div>
  )
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MovieCard)
