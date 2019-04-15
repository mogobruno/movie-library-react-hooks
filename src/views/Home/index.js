import PropTypes from 'prop-types'
import React, { useState, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

// Components
import MovieBar from 'components/MovieBar'
import Search from 'components/Search'

// Styles
import styles from './styles'

const HomeView = ({ classes }) => {
  const [searchExpression, setSearchExpression] = useState('')
  const latestViewMovieId = sessionStorage['movie_app_latest_view']

  const searchResultView = (
    <MovieBar
      wrap
      title="Search result"
      request={{
      path: `/3/search/movie`,
      query: {
        query: searchExpression
      }
    }} />
  )

  const defaultView = (
    <Fragment>
      <MovieBar title="Recomended for you" request={{
        path: `/3/movie/${latestViewMovieId}/similar`
      }} />
      <MovieBar title="Most Popular" request={{
        path: '/3/movie/popular'
      }} />
      <MovieBar title="Top Rated" request={{
        path: '/3/movie/top_rated'
      }} />
      <MovieBar title="Now Playing" request={{
        path: '/3/movie/now_playing'
      }} />
      <MovieBar title="Up Coming" request={{
        path: '/3/movie/upcoming'
      }} />
    </Fragment>
  )

  const onChangeSearchExpression = (newSearchExpression) => {
    setTimeout(setSearchExpression(newSearchExpression))
  }

  return (
    <div className={classes.content}>
      <Search onChange={onChangeSearchExpression} />
      { !searchExpression.length ? defaultView : searchResultView }
    </div>
  )
}

HomeView.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeView)
