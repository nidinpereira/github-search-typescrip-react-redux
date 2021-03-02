/**
 * ActionTypes is a Generic interface to describe an action type.
 */
export interface ActionTypes<T> {
    type: string;
    payload: T;
}
