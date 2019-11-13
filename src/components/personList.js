import React, {Component} from "react";
import axios from "axios";
import PersonCard from './PersonCard';
import SectionContainer from "./../components/sectionContainer";
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import { addPeople, ADD_PEOPLE, FETCH_PEOPLE} from '../actions/actions';

import {
    MDBRow,
} from "mdbreact";



class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {people: []};
    }

    tabCard() {
        console.log('aa');
        console.log(this.props.people);
        {/*return this.props.people.map(function (object, i) {
            return <PersonCard obj={object} key={i}/>
        });*/}
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


const mapStateToProps = state => {
    return {
        people: state.people
    };
};

export default connect(
    mapStateToProps,
    null
)(PersonList);