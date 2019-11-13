/* This component renders a card with a person's details on */
import React, { Component } from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBIcon} from "mdbreact";
import Moment from "react-moment";

class PersonCard extends Component {

    render() {
        return (
            <MDBCol className="d-flex justify-content-center mb-5">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="w-50 mx-auto p-3 mt-2" src={require('../assets/User.png')} />
                    <MDBCardBody>
                        <MDBCardTitle className="text-center ">{this.props.obj.person_name}</MDBCardTitle>
                            <ul className="fa-ul">
                                <li className="my-2">
                                    <MDBIcon icon="at" size="lg" list />{this.props.obj.person_email}
                                </li>
                                <li className="mb-2">
                                    <MDBIcon icon="phone" size="lg" list />{this.props.obj.person_number}
                                </li>
                                <li className="mb-2">
                                    <MDBIcon far icon="calendar-check" size="lg" list />
                                    <Moment format="YYYY/MM/DD">
                                        {this.props.obj.person_start}
                                    </Moment>
                                </li>
                                <li className="mb-2">
                                    <MDBIcon far icon="calendar-times" size="lg" list />
                                    <Moment format="YYYY/MM/DD">
                                        {this.props.obj.person_end}
                                    </Moment>
                                </li>
                            </ul>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}

export default PersonCard;