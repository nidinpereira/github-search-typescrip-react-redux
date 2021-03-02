import {
  mockedResponseFromAxiosGetUsers,
  payloadFromFetchUsersAPI,
} from '../../__mocks__/mock-data';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './search.action';
import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {apiUrls} from "../../config/default.config";
import {DispatcherActions} from "../../interfaces/DispatcherActions.interface";
import {githubType} from "../../enums/github-type.enum";
import {initialState} from "../states/initial.state";

jest.unmock('axios');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('redux actions', () => {
  it('initialize state ', () => {
    const expectedActions = [
      {
        type: DispatcherActions.INITIALIZE_STATE,
        payload: {
          searchType: 'user',
          searchQuery: 'mark',
        },
      },
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.initializeState("mark", githubType.USERS) as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('fetch Users from network', () => {
    const expectedActions = [
      {
        type: DispatcherActions.IS_LOADING,
        payload: {
          "searchQuery": "mark",
          "searchType": "user"
        },
      },
      {
        payload: payloadFromFetchUsersAPI,

        type: 'DISPATCH_SUCCESS',
      },
    ];
    const store = mockStore(initialState);
    mock.onGet(apiUrls.users).reply(200, mockedResponseFromAxiosGetUsers);
    return store
        .dispatch(actions.fetchDataFromNetwork('mark', 'user') as any)
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
  });
});
