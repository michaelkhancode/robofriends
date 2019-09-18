import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAIL,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants'

const inistialStateSearch = {
    searchField: ''
};


export const searchRobots = (state = inistialStateSearch,action={}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
            return ( {...state, searchField:action.payload} );
        default:
            return state;
    };
};

const inistialStateRequest = {
    isPending: true,
    robots: [],
    error: "",
};

export const requestRobots = (state = inistialStateRequest,action={}) => {
    switch (action.type){
        case REQUEST_ROBOTS_PENDING:
            return ( {...state, isPending:true } );
        case REQUEST_ROBOTS_SUCCESS:
            return ( {...state, isPending:false, robots:action.payload, error:"" } );
        case REQUEST_ROBOTS_FAIL:
            return ( {...state, isPending:false, robots:[], error:action.payload } );
        default:
            return state;
    };
};


