import axios from 'axios';
import {apiHeaders, apiUrls} from "../config/default.config";
/**
 * fetchUsers, its a function which will call the user search api via axios.
 * @param searchQuery the text typed by user in the input text.
 * 
 * @returns Promise<AxiosResponse<ApiResponse<User[]>>>
 */
export const fetchUsers = async (searchQuery: string) =>
  axios.get(apiUrls.users, {
    headers: apiHeaders,
    params: { q: searchQuery },
  });


/**
 * fetchRepos, its a function which will call the repository search api via axios.
 * @param searchQuery the text typed by user in the input text.
 *
 * @returns Promise<AxiosResponse<ApiResponse<Repository[]>>>
 */
export const fetchRepos = async (searchQuery: string) => {
    return axios.get(apiUrls.repositories, {
        headers: apiHeaders,
        params: { q: searchQuery },
    });
};

/**
 * fetchReposByName, its a function which will call the repository search api via axios.
 * @param searchQuery the text typed by user in the input text.
 *
 * @returns Promise<AxiosResponse<ApiResponse<Issue[]>>>
 */
export const fetchIssues = async (searchQuery: string) => {
    return axios.get(apiUrls.issues, {
        headers: apiHeaders,
        params: { q: searchQuery },
    });
};
