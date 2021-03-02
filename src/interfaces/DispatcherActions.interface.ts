
/**
 * FetchListActions its a an enum which groups types of actions,
 * which will be dispatched to our reducer to complete the search
 */
export enum DispatcherActions {
    IS_LOADING = 'IS_LOADING',
    DISPATCH_FAILED = 'DISPATCH_FAILED',
    DISPATCH_SUCCESS = 'DISPATCH_SUCCESS',
    INITIALIZE_STATE = 'INITIALIZE_STATE',
}
