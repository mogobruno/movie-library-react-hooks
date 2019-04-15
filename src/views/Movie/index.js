import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

// Components
import MovieBar from 'components/MovieBar'
import MovieDescription from 'components/MovieDescription'

// Styles
import styles from './styles'

const MovieView = ({ classes, match }) => {
  return (
    <div className={classes.content}>
      <MovieDescription id={match.params.movieId} />
      <MovieBar title="Recomended for you" request={{
        path: `/3/movie/${match.params.movieId}/similar`
      }} />
    </div>
  )
}

MovieView.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(MovieView)
