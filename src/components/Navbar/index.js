import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// Images
import AppLogo from 'static/app_logo.svg'

// Styles
import styles from './styles'

// Config
import history from '../../history'

const Navbar = ({ classes }) => {
  const redirectToMovies = () => {
    history.push(`/`)
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <img className={classes.appLogo} src={AppLogo} alt="App Logo" />
          <Typography className={classes.appName} variant="h5" color="inherit">
            Movie Library
          </Typography>
          <Route path="/movie/:movieId" render={() => {
            return (
              <Button
                variant="outlined"
                color="secondary"
                onClick={redirectToMovies}>
                Back to list
              </Button>
            )
          }} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)
