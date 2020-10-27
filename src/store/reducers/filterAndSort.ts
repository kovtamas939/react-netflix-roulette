import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    activeFilter: 'All',
    sortType: 'release-date-desc'
};

const setActiveFilter = (state: any, action: any) => {
    return updateObject(state, { activeFilter: action.activeFilter });
};

const setSortType = (state: any, action: any) => {
    return updateObject(state, { sortType: action.sortType });
};

const reducer = (state: {} = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_FILTER: return setActiveFilter(state, action);
        case actionTypes.SET_SORT_TYPE: return setSortType(state, action);
        default: return state;
    };
};

export default reducer;
