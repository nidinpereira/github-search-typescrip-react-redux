import { AxiosResponse } from 'axios';
import {ApiResponse} from "../interfaces/ApiResponse.interface";
import GithubUser from "../models/github-user.model";
import GithubRepo from "../models/github-repo.model";
import GithubIssue from "../models/github-issues.model";

export default {
  get: jest.fn(() =>
    Promise.resolve<AxiosResponse<ApiResponse<GithubUser[] | GithubRepo[] | GithubIssue[]>>>(
      {
        config: {},
        headers: '',
        status: 200,
        statusText: 'cool',
        request: '',
        data: {
          incomplete_results: false,
          total_count: 1,
          items: [
            {
              login: 'mark',
              id: 325634,
              node_id: 'MDQ6VXNlcjE4MDEwOTE=',
              avatar_url: 'https://avatars.githubusercontent.com/u/1801091?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mark',
              html_url: 'https://github.com/mark',
              followers_url: 'https://api.github.com/users/mark/followers',
              following_url:
                'https://api.github.com/users/mark/following{/other_user}',
              gists_url: 'https://api.github.com/users/mark/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/mark/starred{/owner}{/repo}',
              subscriptions_url: 'https://api.github.com/users/mark/subscriptions',
              organizations_url: 'https://api.github.com/users/mark/orgs',
              repos_url: 'https://api.github.com/users/mark/repos',
              events_url: 'https://api.github.com/users/mark/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/mark/received_events',
              type: 'User',
              site_admin: false,
              score: 1,
            },
          ],
        }
      }
    )
  ),
};
