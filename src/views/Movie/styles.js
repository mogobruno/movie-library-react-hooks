export default theme => ({
  content: {
    width: '100%',
    padding: '80px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '60px 0',
    }
  }
})
