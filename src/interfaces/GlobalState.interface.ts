
import {ApiError} from "./ApiError.interface";
import {githubType} from "../enums/github-type.enum";
import GithubIssue from "../models/github-issues.model";
import GithubRepo from "../models/github-repo.model";
import GithubUser from "../models/github-user.model";

/**
 * GlobalState, its an interface which describes our global state structure.
 */
export interface GlobalState {
    users: GithubUser[];
    repositories: GithubRepo[];
    issues: GithubIssue[];
    currentSearchType: githubType.USERS | githubType.REPOS | githubType.ISSUES;
    currentSearchQuery: string;
    isLoading: boolean;
    error: ApiError;
}
