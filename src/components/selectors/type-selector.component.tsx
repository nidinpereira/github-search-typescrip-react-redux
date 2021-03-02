import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {fetchDataFromNetwork, initializeState} from '../../redux/actions/search.action';
import {githubType} from "../../enums/github-type.enum";
import "./type-selector.component.scss";
import {GlobalState} from "../../interfaces/GlobalState.interface";
/**
 * SearchType, is the definition of our select component, which will be used to choose the type of search we want to do.
 */
export function TypeSelector(state: GlobalState) {
  const types = [
    { value: githubType.USERS, label: 'Users' },
    { value: githubType.REPOS, label: 'Repos' },
    { value: githubType.ISSUES, label: 'Issues' },
  ];
  const dispatch = useDispatch();
  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (state.currentSearchQuery.length > 2) {
      dispatch(
          fetchDataFromNetwork(
              state.currentSearchQuery,
              event.target.value as githubType
          )
      );
    } else {
      dispatch(
          initializeState(
          state.currentSearchQuery,
          event.target.value as githubType,
      ))
    }

  };
  return (
    <select onChange={handleTypeChange}>
      {types.map((type, index) => (
        <option key={index} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  );
}
