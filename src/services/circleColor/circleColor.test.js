import circleColor from './index'

describe('circleColor', () => {
  test('should return #e74c3c when value is below then 4', () => {
    expect(circleColor(3)).toBe('#e74c3c')
  })

  test('should return #e67e22 when value is below then 7', () => {
    expect(circleColor(4)).toBe('#e67e22')
  })

  test('should return #1abc9c when value is below then 10', () => {
    expect(circleColor(8)).toBe('#1abc9c')
  })

  test('should return #1abc9c when value is bigger then 10', () => {
    expect(circleColor(14)).toBe('#1abc9c')
  })
})
