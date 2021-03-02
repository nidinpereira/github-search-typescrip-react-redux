/**
 * Github base Url
 */
export const githubBaseUrl: string = 'https://github-search-api.nidinpereira.com/api/';

/**
 * GitHub URLs for different types of search
 */
export const apiUrls = {
    users: githubBaseUrl + 'search/users',
    repositories: githubBaseUrl + 'search/repositories',
    issues: githubBaseUrl + 'search/issues'
};

/**
 * Our api headers, which will be user inside an http call.
 */
export const apiHeaders = {
    Accept: 'application/json',
};
