import React from 'react';
import { useSelector } from 'react-redux';
import { SearchList } from '../../components/lists/search-list.component';
import { SearchInput } from '../../components/input-fields/search-input.component';
import { TypeSelector } from '../../components/selectors/type-selector.component';
import { ErrorPage } from '../../components/errors/error.component';
import './search.page.scss';
import {githubType} from "../../enums/github-type.enum";
import {SearchHeader} from "../../components/headers/search-header.component";
import "./search.page.scss";
import {GlobalState} from "../../interfaces/GlobalState.interface";
import {ProgressBar} from "../../components/loaders/progress-bar.component";
import {EmptyResult} from "../../components/empty-results/empty-results.component";
/**
 * Search Page
 */
export function SearchPage() {
  const state = useSelector((state: GlobalState) => state);
  let list: any[];

  switch (state.currentSearchType) {
    case githubType.REPOS:
      list = state.repositories;
      break;
    case githubType.ISSUES:
      list = state.issues;
      break;
    default:
      list = state.users;
      break;
  }

  let showResult: boolean = !!(list.length && state?.currentSearchQuery?.length > 2 && !state.isLoading && !state.error.message);

  return (
      <div className={`search-container`}>
          <SearchHeader/>
          <div>
              <SearchInput {...state}/>
              <TypeSelector {...state}/>
          </div>
          <ProgressBar showProgressBar={state.isLoading && state.currentSearchQuery.length > 2}/>
          <ErrorPage error={state.error}/>
          <EmptyResult showEmptyResultPage={!showResult && state?.currentSearchQuery?.length > 2 && !state.isLoading}/>
          <SearchList showSearchList={showResult && state?.currentSearchQuery?.length > 2 && !state.isLoading}/>
      </div>

  );
}
