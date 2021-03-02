import {
  FetchDataFromApiType,
} from '../../enums/search.types';
import { Dispatch } from 'redux';
import {fetchUsers, fetchRepos, fetchIssues} from '../../api/api';
import {githubType} from "../../enums/github-type.enum";
import {SuccessPayload} from "../../interfaces/SuccessPayload.interface";
import {ErrorPayload} from "../../interfaces/ErrorPayload.interface";
import {LocalPayload} from "../../interfaces/LocalPayload.interface";
import {ActionTypes} from "../../interfaces/ActionTypes.interface";
import {DispatcherActions} from "../../interfaces/DispatcherActions.interface";


/**
 *
 * @param searchType accepts users, repositories or issues.
 *
 * @returns a function of type Dispatch<SearchActionTypes<LocalPayload>> t
 */
export const initializeState = (searchQuery: string, searchType: githubType) => async (
  dispatch: Dispatch<ActionTypes<LocalPayload>>
) => {
  dispatch({
    type: DispatcherActions.INITIALIZE_STATE,
    payload: {
      searchQuery: searchQuery,
      searchType: searchType,
    } as LocalPayload,
  });
};

/**
 * Local function to return the actions related to fetching data from API.
 *
 * @param searchQuery the query enetered by the user.
 * @param searchType of search , whether by user or by repository.
 *
 * @returns a function which dispatch the needed action for doing the search.
 */
export const fetchDataFromNetwork = (searchQuery: string, searchType: string) => async (
  dispatch: Dispatch<ActionTypes<FetchDataFromApiType>>
) => {
   dispatch({
    type: DispatcherActions.IS_LOADING,
    payload: {
      searchQuery,
      searchType,
    },
  });
  try {
    let dataFromRemote;

    switch (searchType) {
      case githubType.REPOS:
        dataFromRemote = await fetchRepos(searchQuery);
        break;
      case githubType.ISSUES:
        dataFromRemote = await fetchIssues(searchQuery);
        break;
      default:
        dataFromRemote = await fetchUsers(searchQuery);
        break;

    }
    dispatch({
      type: DispatcherActions.DISPATCH_SUCCESS,
      payload: {
        searchType: searchType,
        repositories: searchType === githubType.REPOS ? dataFromRemote.data.items : [],
        users: searchType === githubType.USERS ? dataFromRemote.data.items : [],
        issues: searchType === githubType.ISSUES ? dataFromRemote.data.items : [],
        searchQuery,
      } as SuccessPayload,
    });
  } catch (e) {
    dispatch({
      type: DispatcherActions.DISPATCH_FAILED,
      payload: {
        code: 500,
        message: 'Oops, Something went Wrong',
        searchQuery,
      } as ErrorPayload,
    });
  }
};
