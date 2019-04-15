import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'

// Services
import radiansFromPercentage from 'services/radiansFromPercentage'
import circleColor from 'services/circleColor'

// Styles
import styles from './styles'

const Vote = ({ classes, value }) => {
  let canvas = React.createRef()

  useEffect(() => {
    const ctx = canvas.current.getContext("2d")
    if (ctx) {
      // Draws full circle
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.strokeStyle = "#223135"
      ctx.lineWidth = 3
      ctx.arc(24, 24, 18, 0, 2 * Math.PI)
      ctx.stroke()

      // Draws percentage circle
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.strokeStyle = circleColor(value)
      ctx.arc(24, 24, 18, 0, radiansFromPercentage(value * 10) * Math.PI)
      ctx.stroke()
    }
  })

  return (
    <div className={classes.content}>
      <span className={classes.content}>{value}</span>
      <canvas className={classes.canvas} ref={canvas}></canvas>
    </div>
  )
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Vote)
