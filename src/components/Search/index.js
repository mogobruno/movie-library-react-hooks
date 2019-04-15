import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'

// Styles
import styles from './styles'

const searchInput = React.createRef()

const Search = ({ classes, onChange }) => {
  const handleChange = () => {
    const searchExpression = searchInput.current.value
    onChange(searchExpression)
  }

  return (
    <div className={classes.content}>
      <InputBase
        placeholder="Search using title, year and more"
        onChange={_.debounce(handleChange, 500)}
        inputRef={searchInput}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(Search)
