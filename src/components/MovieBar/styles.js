export default theme => ({
  content: {
    width: '100%',
    backgroundColor: '#20232a',
    padding: '10px 30px'
  },
  title: {
    fontSize: '20px',
    color: '#ffffff'
  },
  movies: {
    padding: '20px',
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
    overflow: 'auto',
    display: 'flex'
  },
  moviesWrap: {
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    height: '100%',
    justifyContent: 'space-between'
  },
})
