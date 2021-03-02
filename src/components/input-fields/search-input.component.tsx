import { KeyboardEvent } from 'react';
import {initializeState, fetchDataFromNetwork} from '../../redux/actions/search.action';
import { useDispatch } from 'react-redux';
import { debounce } from '../../helpers/debounce.helper';
import "./search-input.component.scss";
import {GlobalState} from "../../interfaces/GlobalState.interface";
/**
 * SearchInput used to capture search queries.
 */
export function SearchInput(state: GlobalState) {
    const dispatch = useDispatch();

    const handleKeyPress = debounce( (event: KeyboardEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        if (element.value.length > 2) {
            dispatch(
                fetchDataFromNetwork(
                    element.value,
                    state.currentSearchType
                )
            );
        } else {
                dispatch(initializeState("",state.currentSearchType));
        }
    }, 800);

    return (
        <input
            type='text'
            name=''
            id=''
            placeholder='Start typing to search ..'
            onKeyUp={handleKeyPress}
        />
    );
}
