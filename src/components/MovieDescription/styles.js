export default theme => ({
  content: {
    width: '100%',
    padding: '10px 30px 30px 30px',
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
  },
  movie: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  poster: {
    maxWidth: '300px'
  },
  posterImage: {
    width: '100%'
  },
  description: {
    padding: '30px',
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
    maxWidth: '600px'
  },
  titleGroup: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      padding: '20px',
    },
  },
  title: {
    margin: '3px 20px',
    color: '#20232a'
  },
  overview: {
    padding: '50px',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  }
})
