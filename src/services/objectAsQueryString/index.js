import _ from 'lodash'

export default queryObject => {
  const result = ''
  if (_.isEmpty(queryObject)) {
    return result
  }
  const queryString = _.map(queryObject, (value, key) => `${key}=${value}`).join('&')
  return result.concat(queryString)
}
