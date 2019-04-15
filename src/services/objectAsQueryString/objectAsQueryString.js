import circleColor from './index'

describe('objectAsQueryString', () => {
  test('Should parse object to query string', () => {
    const result = helpers.objectAsQueryString({ value: 123, value2: 432 })
    expect(result).toBe('?value=123&value2=432')
  })

  test('Should parse object to empty query string', () => {
    const result = helpers.objectAsQueryString({})
    expect(result).toBe('')
  })

  test('Should parse array to empty query string', () => {
    const result = helpers.objectAsQueryString([1,3,4])
    expect(result).toBe('')
  })

  test('Should parse string to empty query string', () => {
    const result = helpers.objectAsQueryString('test')
    expect(result).toBe('')
  })
})
