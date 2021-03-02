import {githubType} from "../../enums/github-type.enum";
import {GlobalState} from "../../interfaces/GlobalState.interface";

const error = {
    code: 0,
    message: ''
}

/**
 * initializer for global state of the app
 */
export const initialState: GlobalState = {
    isLoading: false,
    users: [],
    repositories: [],
    issues: [],
    currentSearchQuery: "",
    currentSearchType: githubType.USERS,
    error: error,
}
