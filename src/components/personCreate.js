import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SectionContainer from "./../components/sectionContainer";
import {connect} from 'react-redux';
import {addPerson} from '../actions/actions';

import {
    MDBCol,
    MDBInput,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from "mdbreact";

/* Just some basic validation for form inputs. Returns an array of all errors (if any)*/
function validate(name, email, phone, start, end) {
    const errors = [];

    if (name.length === 0) {
        errors.push("Name can't be empty");
    }

    if (email.length < 5) {
        errors.push("Email should be at least 5 characters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
        errors.push("Email should contain a @");
    }

    if (phone.length < 10) {
        errors.push("Phone should be at least 10 characters long");
    }
    if (!/^\d+$/.test(phone)) {
        errors.push("Phone should be at least 10 characters long");
    }

    if (start.length < 5) {
        errors.push("Start date is not valid");
    }

    if (end.length < 5) {
        errors.push("End date is not valid");
    }

    return errors;
}

class Create extends Component {
    constructor(props) {
        super(props);

        /* Event listeners. This can be done a whole lot better with one binding (#time) */
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonNumber = this.onChangePersonNumber.bind(this);
        this.onChangePersonStart = this.onChangePersonStart.bind(this);
        this.onChangePersonEnd = this.onChangePersonEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        /* Basic construction of empty set */
        this.state = {
            person_name: '',
            person_email: '',
            person_number: '',
            person_start: new Date(),
            person_end: '',
            errors: []
        }
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value
        });
    }

    onChangePersonEmail(e) {
        this.setState({
            person_email: e.target.value
        });
    }

    onChangePersonNumber(e) {
        this.setState({
            person_number: e.target.value
        });
    };

    onChangePersonStart = date => {
        this.setState({
            person_start: date
        });
    };

    onChangePersonEnd = date => {
        this.setState({
            person_end: date
        });
    };

    /* Submit event for form submit */
    onSubmit(e) {
        e.preventDefault();

        /* Create new object with all data from the form */
        const obj = {
            person_name: this.state.person_name,
            person_email: this.state.person_email,
            person_number: this.state.person_number,
            person_start: this.state.person_start,
            person_end: this.state.person_end,
            person_created: Date.now()
        };

        /* Validate the above object's data */
        const errors = validate(
            obj.person_name,
            obj.person_email,
            obj.person_number,
            obj.person_start,
            obj.person_end);

        if (errors.length > 0) {
            /* Add class to form so that validation icons can display */
            e.target.className += " was-validated";
            this.setState({errors});
        } else {
            /* Post data to api and save into mongodb */
            axios.post('http://api.shaun.software/person/add', obj)
                .then(res => console.log(res.data));

            /* Add person into the state for later use by redux*/
            let {
                person_name,
                person_email,
                person_number,
                person_start,
                person_end
            } = this.state;

            this.props.addPerson(person_name,
                person_email,
                person_number,
                person_start,
                person_end);

            this.setState({
                person_name: '',
                person_email: '',
                person_number: '',
                person_start: new Date(),
                person_end: ''
            });
            e.target.className -= " was-validated";
        }
    }

    render() {
        return (
            <SectionContainer noBorder>
                <MDBRow>
                    <MDBCol className="d-flex justify-content-center">
                        <MDBCard className="w-responsive text-center mx-auto p-3 mt-2">
                            <MDBCardBody>
                                <form className={"needs-validation"} onSubmit={this.onSubmit} noValidate>
                                    <p className="h5 text-center mb-4">Please fill in your details</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Full Name"
                                            name="person_name"
                                            id="person_name"
                                            value={this.state.person_name}
                                            onChange={this.onChangePersonName}
                                            required
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Email"
                                            type="email"
                                            name="person_email"
                                            id="person_email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={this.state.person_email}
                                            onChange={this.onChangePersonEmail}
                                            required
                                        />
                                        <MDBInput
                                            label="Phone Number"
                                            name="person_number"
                                            type="number"
                                            id="person_number"
                                            validate
                                            value={this.state.person_number}
                                            onChange={this.onChangePersonNumber}
                                            required
                                            minLength={10}
                                        />
                                        <label htmlFor="person_start">Start Date</label>
                                        <br/>
                                        <DatePicker
                                            outline
                                            name="person_start"
                                            id="person_start"
                                            selected={this.state.person_start}
                                            onChange={this.onChangePersonStart}
                                            selectsStart
                                            className="form-control"
                                            startDate={this.state.person_start}
                                            endDate={this.state.person_end}
                                            required
                                        />
                                        <br/><br/>
                                        <label htmlFor="person_end">End Date</label>
                                        <br/>
                                        <DatePicker
                                            selected={this.state.person_end}
                                            name="person_end"
                                            id="person_end"
                                            className="form-control"
                                            onChange={this.onChangePersonEnd}
                                            selectsEnd
                                            endDate={this.state.person_end}
                                            minDate={this.state.person_start}
                                            required
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <MDBBtn size="lg" outline color="secondary" type="submit">
                                            Submit
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </SectionContainer>
        )
    }
}

export default connect(
    null,
    {
        addPerson: addPerson
    }
)(Create);