export default theme => ({
  navbar: {
    backgroundColor: '#20232a'
  },
  appLogo: {
    width: '30px',
    margin: '0px 10px 0px 0px',
    [theme.breakpoints.down('xs')]: {
      width: '20px',
      margin: '0px 5px 0px 0px'
    }
  },
  appName: {
    fontFamily: 'Pacifico, cursive',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  }
})
