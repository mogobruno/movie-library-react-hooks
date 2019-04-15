import React from 'react'
import axios from 'axios'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import MovieBar from './index'

import mockMovies from './__mocks__/movies'

jest.mock('hooks/useMovieApi', () => {
  return () => [
    mockMovies,
    () => {}
  ]
})

describe('<MovieBar />', () => {

  let component

  beforeEach(() => {
    component = (
      <MovieBar
        wrap
        title="test title"
        request={{
          path: `/3/search/movie`,
          query: {
            query: 'test expression'
          }
        }
      } />
    )
  })

  test('toMatchSnapshot', () => {
    const treeEmptyList = renderer
      .create(component)
      .toJSON()
    expect(treeEmptyList).toMatchSnapshot()
  })
})
