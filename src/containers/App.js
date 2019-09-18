
import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';
import { connect } from 'react-redux';

import { requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}   

class App extends React.Component {

    componentDidMount(){
        this.props.onRequestRobots();
    };

    render () {
        const { searchField, onChange, robots, isPending } = this.props;
        if ( isPending || !(robots.length) ){
            return(
                <h1>Loading</h1>
            )
        }else {
            const filteredRobots = robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(
                    searchField.toLowerCase()
                    );
            });
            return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox onChange = {onChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist  robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        };
    };   
};

export default connect(mapStateToProps, mapDispatchToProps)(App);