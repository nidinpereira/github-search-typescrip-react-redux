/**
 * SuccessPayload, interface to be used on successfully dispatching the api result
 */
import GithubUser from "../models/github-user.model";
import GithubRepo from "../models/github-repo.model";
import GithubIssue from "../models/github-issues.model";


export interface SuccessPayload {
    users?: GithubUser[];
    repositories?: GithubRepo[];
    issues?: GithubIssue[];
    searchType: string;
    searchQuery: string;
}
