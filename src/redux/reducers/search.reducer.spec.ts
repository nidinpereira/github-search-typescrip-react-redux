import { repositoryMock, userMock } from '../../__mocks__/mock-data';
import * as reducer from './search.reducer';
import {initialState} from "../states/initial.state";
import {githubType} from "../../enums/github-type.enum";
import {GlobalState} from "../../interfaces/GlobalState.interface";
import {DispatcherActions} from "../../interfaces/DispatcherActions.interface";

describe('search reducer', () => {
    let globalState: GlobalState;
    beforeEach(() => {
      globalState = initialState
    })
  
  it('should return the init state', () => {
    expect(
      reducer.searchReducer(undefined, {
        type: undefined,
        payload: undefined,
      })
    ).toEqual(globalState);
  });
  it('should initialize the state state', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: DispatcherActions.INITIALIZE_STATE,
        payload: {
          searchType: 'user',
          searchQuery: 'mark',
        },
      })
    ).toEqual({
      ...globalState,
      currentSearchType: 'user',
      currentSearchQuery: 'mark',
      users: [],
      repositories: [],
      error: {
        code: 0,
        message: '',
      },
    });
  });
  it('should return state after dispatch failed action ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: DispatcherActions.DISPATCH_FAILED,
        payload: {
          code: 500,
          message: 'Oops, Something went Wrong',
          searchQuery: 'mark',
        },
      })
    ).toEqual({
      ...globalState,
      isLoading: false,
      currentSearchQuery: 'mark',
      error: {
        code: 500,
        message: 'Oops, Something went Wrong',
      },
    });
  });
  it('should return the  state after is loading action ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: DispatcherActions.IS_LOADING,
        payload: 'mark',
      })
    ).toEqual({
      ...globalState,
      loading: true,
      currentSearchQuery: 'mark',
      error: {
        code: 0,
        message: '',
      },
    });
  });

  it('should return the  state after user action ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: githubType.USERS,
        payload: 'mark',
      })
    ).toEqual({
      ...globalState,
      currentSearchType: githubType.USERS,
      currentSearchQuery: 'mark',
      error: {
        code: 0,
        message: '',
      },
    });
  });
  it('should return the  state after repository action ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: githubType.REPOS,
        payload: 'mark',
      })
    ).toEqual({
      ...globalState,
      currentSearchType: githubType.REPOS,
      currentSearchQuery: 'mark',
      error: {
        code: 0,
        message: '',
      },
    });
  });

  it('should return the  state after dispatch success action for user ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: DispatcherActions.DISPATCH_SUCCESS,
        payload: {
          searchType: 'user',
          repos: [],
          users: [userMock],
          searchQuery: 'mark',
        },
      })
    ).toEqual({
      ...globalState,
      users: [userMock],
      repositories: [],
      issues: [],
      isLoading: false,
      currentSearchQuery: 'mark',
      currentSearchType: 'user',
      error: {
        code: 0,
        message: '',
      },
    });
  });

  it('should return the  state after  dispatch success action for repository ', () => {
    expect(
      reducer.searchReducer(globalState, {
        type: DispatcherActions.DISPATCH_SUCCESS,
        payload: {
          searchType: 'repository',
          repositories: [repositoryMock],
          issues: [],
          users: [],
          searchQuery: 'react',
        },
      })
    ).toEqual({
      ...globalState,
      users: [],
      repositories: [repositoryMock],
      issues: [],
      isLoading: false,
      currentSearchQuery: 'react',
      currentSearchType: 'repository',
      error: {
        code: 0,
        message: '',
      },
    });
  });


  it('should return the  state after  dispatch success action for issues ', () => {
    expect(
        reducer.searchReducer(globalState, {
          type: DispatcherActions.DISPATCH_SUCCESS,
          payload: {
            searchType: 'issues',
            repositories: [],
            issues: [repositoryMock],
            users: [],
            searchQuery: 'react',
          },
        })
    ).toEqual({
      ...globalState,
      users: [],
      repositories: [],
      issues: [repositoryMock],
      isLoading: false,
      currentSearchQuery: 'react',
      currentSearchType: 'issues',
      error: {
        code: 0,
        message: '',
      },
    });
  });

});
