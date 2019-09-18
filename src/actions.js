import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAIL,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants'

export const requestRobots = () =>(dispatch) => {
    dispatch({type:REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots=>dispatch( {type:REQUEST_ROBOTS_SUCCESS,payload:robots} ))
        .catch(error=>dispatch( {type:REQUEST_ROBOTS_FAIL,payload:error} ))
}

export const setSearchField = (text) => {
    return ( {type:CHANGE_SEARCH_FIELD,payload:text} )
}

