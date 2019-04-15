import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// Views
import HomeView from 'views/Home'
import MovieView from 'views/Movie'

// Config
import browserHistory from './history'

// Components
import Navbar from 'components/Navbar'

// Styles
import styles from './styles'

const App = ({ classes }) => {
  return (
    <div className={classes.content}>
      <CssBaseline />
      <Router history={browserHistory}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/:movieId" component={MovieView} />
        </Switch>
      </Router>
    </div>
  )
}

export default withStyles(styles)(App)
