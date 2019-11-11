import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {MDBRow, MDBCol, MDBBtn} from "mdbreact";

function validate(name, email, phone) {
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
    if (!/^\d+$/.test(phone))
    {
        errors.push("Phone should be at least 10 characters long");
    }

    return errors;
}

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonNumber = this.onChangePersonNumber.bind(this);
        this.onChangePersonStart = this.onChangePersonStart.bind(this);
        this.onChangePersonEnd = this.onChangePersonEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            person_email: '',
            person_number: '',
            person_start: new Date(),
            person_end: new Date(),
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

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            person_email: this.state.person_email,
            person_number: this.state.person_number,
            person_start: this.state.person_start,
            person_end: this.state.person_end,
            person_created: Date.now()
        };
        const errors = validate(obj.person_name, obj.person_email, obj.person_number);
        e.target.className += " was-validated";
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }


        axios.post('http://api.shaun.software/person/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            person_name: '',
            person_email: '',
            person_number: '',
            person_start: '',
            person_end: ''
        });
        e.target.className -= " was-validated";
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Person</h3>
                <form className={"needs-validation"} onSubmit={this.onSubmit} noValidate>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label htmlFor="defaultFormRegisterNameEx"
                                   className="grey-text">Fullname
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                value={this.state.person_name}
                                onChange={this.onChangePersonName}
                                required
                            />
                            <div className="invalid-tooltip">
                                Please enter your name.
                            </div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label htmlFor="defaultFormRegisterNameEx"
                                   className="grey-text">Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="defaultFormRegisterEmailEx2"
                                className="form-control"
                                value={this.state.person_email}
                                onChange={this.onChangePersonEmail}
                                required
                            />
                            <div className="invalid-tooltip">
                                Please provide a valid email address.
                            </div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label htmlFor="defaultFormRegisterPhoneEx3"
                                   className="grey-text">Phone Number
                            </label>
                            <input
                                name="phone"
                                type="text"
                                pattern="[0-9]*"
                                id="defaultFormRegisterPhoneEx3"
                                className="form-control"
                                value={this.state.person_number}
                                onChange={this.onChangePersonNumber}
                                required
                                minLength={10}
                            />
                            <div className="invalid-tooltip">
                                Please provide a valid phone number.
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <div className="form-group">
                        <label htmlFor="person_start">Person Start: </label>
                        <DatePicker
                            name="person_start"
                            selected={this.state.person_start}
                            onChange={this.onChangePersonStart}
                            selectsStart
                            startDate={this.state.person_start}
                            endDate={this.state.person_end}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="person_end">Person End: </label>
                        <DatePicker
                            name="person_end"
                            selected={this.state.person_end}
                            onChange={this.onChangePersonEnd}
                            selectsEnd
                            endDate={this.state.person_end}
                            minDate={this.state.person_start}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}