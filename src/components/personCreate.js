import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {MDBRow, MDBCol, MDBBtn} from "mdbreact";

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
            person_end: new Date()
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
        axios.post('http://api.shaun.software/person/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            person_name: '',
            person_email: '',
            person_number: '',
            person_start: '',
            person_end: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Person</h3>
                <form onSubmit={this.onSubmit}>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <div className="form-group">
                                <label htmlFor="person_name">Person Name: </label>
                                <input
                                    name="person_name"
                                    type="text"
                                    className="form-control"
                                    value={this.state.person_name}
                                    onChange={this.onChangePersonName}
                                    required
                                    minLength={3}
                                />
                            </div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <div className="form-group">
                                <label htmlFor="person+email">Person Email: </label>
                                <input
                                    name="person_email"
                                    type="email"
                                    className="form-control"
                                    value={this.state.person_email}
                                    required
                                    onChange={this.onChangePersonEmail}
                                />
                            </div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <div className="form-group">
                                <label>Person Phone: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.person_number}
                                    onChange={this.onChangePersonNumber}
                                />
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