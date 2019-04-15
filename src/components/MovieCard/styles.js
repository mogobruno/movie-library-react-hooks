export default theme => ({
  content: {
    position: 'relative',
    width: '270px',
    height: '155px',
    margin: '20px 10px',
  },
  vote: {
    position: 'absolute',
    padding: '10px'
  },
  image: {
    width: '270px',
    boxShadow: '1px 1px 1px black'
  },
  details: {
    bottom: '3px',
    position: 'absolute',
    height: '100%',
    color: '#ffffff',
    overflow: 'hidden',
    backgroundColor: 'rgba(44, 62, 80, 0.8)',
    padding: '10px'
  },
  title: {
    fontSize: '15px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    },
    margin: '0px'
  },
  description: {
    fontSize: '11px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px'
    },
  },
  more: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  }
})
