import 'jest-canvas-mock'

import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Vote from './index'

describe('<Vote />', () => {

  let component

  beforeEach(() => {
    component = (
      <Vote value={7.4} />
    )
  })

  it('allows us to set props', () => {
    const wrapper = mount(component)
    expect(wrapper.props().value).toBe(7.4)
    wrapper.setProps({ value: 5.3 })
    expect(wrapper.props().value).toBe(5.3)
  })

  test('toMatchSnapshot', () => {
    const treeEmptyList = renderer
      .create(component)
      .toJSON()
    expect(treeEmptyList).toMatchSnapshot()
  })

})
