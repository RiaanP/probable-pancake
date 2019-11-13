import React, {Component} from "react";
import {connect} from 'react-redux';
import SectionContainer from "./../components/sectionContainer";
import PersonCard from './PersonCard';

import {
    MDBCol,
    MDBRow,
} from "mdbreact";

class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    /* Used to fetch data from redux store after call to api was made */
    tabCard() {
        if (this.props.people.length > 0) {
            return this.props.people.map(function (object, i) {
                return <PersonCard obj={object} key={i}/>
            });
        }
        else
        {
            return <MDBCol className="d-flex justify-content-center mb-5">No Data</MDBCol>
        }
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

/* Used for selected data from the store that the connected component needs */
const mapStateToProps = state => {
    return {
        people: state.people
    };
};

export default connect(
    mapStateToProps,
    null
)(PersonList);