import React, {Component} from "react";
import axios from "axios";
import PersonCard from './PersonCard';
import SectionContainer from "./../components/sectionContainer";
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {addPeople, ADD_PEOPLE} from '../actions/actions';

import {
    MDBRow,
} from "mdbreact";

const mapStateToProps = state => {
    return {
        people: state.people
    };
};

class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {people: []};
    }

    componentDidMount() {
        fetchPeople();
    }

    tabCard() {
        return this.props.people.map(function (object, i) {
            return <PersonCard obj={object} key={i}/>
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Person List</h3>

                <SectionContainer noBorder>
                    <MDBRow>
                        {this.tabCard()}
                    </MDBRow>
                </SectionContainer>
            </div>
        );
    }

}

export default connect(mapStateToProps, {
    addPeople: addPeople
})(PersonList);

export function fetchPeople() {
    return function action(dispatch) {
        dispatch({type: ADD_PEOPLE});

        const request = axios({
            method: 'GET',
            url: 'http://api.shaun.software/person',
            headers: []
        });

        return request.then(
            response => dispatch(fetchPersonSuccess(response))
        );
    }
}

export function fetchPersonSuccess(people) {
    this.props.addPeople(people);
}