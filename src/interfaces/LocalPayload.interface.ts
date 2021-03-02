
/**
 * LoadFromLocalPayload, its an interface which describes the type of payloads which will be dispatched,
 * to tell the reducer we are fetching data from local storage
 */
export interface LocalPayload {
    searchQuery: string;
    searchType: string;
}
