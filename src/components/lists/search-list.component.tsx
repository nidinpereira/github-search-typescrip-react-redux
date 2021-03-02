import React from 'react';
import { useSelector } from 'react-redux';
import {githubType} from "../../enums/github-type.enum";
import {UserCard} from "../cards/user-card.component";
import {RepoCard} from "../cards/repo-card.component";
import "./search-list.component.scss";
import {GlobalState} from "../../interfaces/GlobalState.interface";
import GithubUser from "../../models/github-user.model";
import GithubRepo from "../../models/github-repo.model";
import GithubIssue from "../../models/github-issues.model";
import {IssueCard} from "../cards/issue-card.component";

/**
 * @returns Jsx Element which will be rendered by react Engine
 *
 * a react component to show a list of cards based on the data in the state
 */
export function SearchList(props: { showSearchList: boolean; }): JSX.Element {
    const searchState = useSelector((state: GlobalState) => state);
    const userList: GithubUser[] = searchState.users;
    const repoList: GithubRepo[] = searchState.repositories;
    const issueList: GithubIssue[] = searchState.issues;
    let cards;

    switch (searchState.currentSearchType) {
        case githubType.REPOS:
            cards = repoList.map((repo, i) => {
                return (
                    <li className="cardsItem">
                        <RepoCard {...repo} key={i}/>
                    </li>
                );
            })
            break;
        case githubType.ISSUES:
            cards = issueList.map((issue, i) => {
                return (
                    <li className="cardsItem">
                        <IssueCard {...issue} key={i}/>
                    </li>
                );
            })
            break;
        default :
            cards = userList.map((user, i) => {
                return (
                    <li className="cardsItem">
                        <UserCard {...user} key={i}/>
                    </li>
                );
            })
            break;
    }
    return (
        <div className={props.showSearchList ? 'search-list' : 'hide'}>
            <div className='row'>
                <ul className="cardList">
                    {cards}
                </ul>
            </div>
        </div>

    )
}
