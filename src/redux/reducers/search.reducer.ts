import {githubType} from "../../enums/github-type.enum";
import {initialState} from "../states/initial.state";
import {GlobalState} from "../../interfaces/GlobalState.interface";
import {DispatcherActions} from "../../interfaces/DispatcherActions.interface";
const noError = {
  code:0,
  message: ''
}
/**
 * @param state our global state
 * @param action the action dispatched
 *
 * @returns state.
 */
export const searchReducer = (
  state: GlobalState = initialState,
  action: any
): GlobalState => {
  switch (action.type) {
    case DispatcherActions.IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        currentSearchQuery: action.payload.searchQuery ? action.payload.searchQuery : state.currentSearchQuery,
        currentSearchType: action.payload.searchType ? action.payload.searchType : state.currentSearchType,
        error: noError
      };
    }
    case DispatcherActions.DISPATCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        currentSearchQuery: action.payload.searchQuery ? action.payload.searchQuery : state.currentSearchQuery,
        currentSearchType: action.payload.searchType ? action.payload.searchType : state.currentSearchType,
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      };
    }
    case DispatcherActions.DISPATCH_SUCCESS:
      return {
        ...state,
        users:
          action.payload.searchType === githubType.USERS
            ? action.payload.users
            : [],
        repositories:
            action.payload.searchType === githubType.REPOS
                ? action.payload.repositories
                : [],
        issues:
            action.payload.searchType === githubType.ISSUES
                ? action.payload.issues
                : [],
        currentSearchQuery: action.payload.searchQuery,
        currentSearchType: action.payload.searchType,
        isLoading: false,
        error: noError
      };

    case githubType.REPOS:
      return {
        ...state,
        currentSearchType: githubType.REPOS,
        currentSearchQuery: action.payload,
        error: noError
      };

    case githubType.USERS:
      return {
        ...state,
        currentSearchType: githubType.USERS,
        currentSearchQuery: action.payload,
        error: noError
      };

    case githubType.ISSUES:
      return {
        ...state,
        currentSearchType: githubType.ISSUES,
        currentSearchQuery: action.payload,
        error: noError
      };

    case DispatcherActions.INITIALIZE_STATE:
      return {
        ...state,
        currentSearchType: action.payload.searchType,
        currentSearchQuery: action.payload.searchQuery,
        users: [],
        repositories: [],
        issues: [],
        isLoading: false,
        error: noError
      };

    default:
      return state;
  }
};
