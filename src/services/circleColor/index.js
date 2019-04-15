export default (value) => {
  if (value < 4) {
    return "#e74c3c"
  } else if (value < 7) {
    return "#e67e22"
  } else {
    return "#1abc9c"
  }
}
