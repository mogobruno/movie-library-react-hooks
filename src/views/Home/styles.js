export default theme => ({
  content: {
    backgroundColor: '#20232a',
    padding: '90px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '80px 0',
    }
  }
})
