import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actionCreators';
import * as types from '../actions/actions';
import fetchMock from 'fetch-mock';
import expect from 'expect'; 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
})