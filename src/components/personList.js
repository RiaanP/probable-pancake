import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";
import SectionContainer from "./../components/sectionContainer";
import Moment from 'react-moment';

import {
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
} from "mdbreact";

export default class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }

    componentDidMount() {
        axios.get('http://api.shaun.software/person')
            .then(response => {
                this.setState({person: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.person.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    tabCard() {
        return this.state.person.map(function (object, i) {
            return (
            <MDBCol className="d-flex justify-content-center mb-5">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="w-50 mx-auto p-3 mt-2" src={require('../assets/User.png')} />
                    <MDBCardBody>
                        <MDBCardTitle className="text-center ">{object.person_name}</MDBCardTitle>
                        <MDBCardText className="border-top border-secondary">
                            <ul className="fa-ul">
                                <li className="my-2">
                                    <MDBIcon icon="at" size="lg" list />{object.person_email}
                                </li>
                                <li className="mb-2">
                                    <MDBIcon icon="phone" size="lg" list />{object.person_number}
                                </li>
                                <li className="mb-2">
                                    <MDBIcon far icon="calendar-check" size="lg" list />
                                        <Moment format="YYYY/MM/DD">
                                            {object.person_start}
                                        </Moment>                                    
                                </li>
                                <li className="mb-2">
                                    <MDBIcon far icon="calendar-times" size="lg" list />
                                        <Moment format="YYYY/MM/DD">
                                            {object.person_end}
                                        </Moment>  
                                </li>
                            </ul>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>);
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