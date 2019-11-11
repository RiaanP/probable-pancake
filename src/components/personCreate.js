import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            <div style={{ marginTop: 10 }}>
                <h3>Create Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Person Email:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_email}
                            onChange={this.onChangePersonEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Person Phone:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_number}
                            onChange={this.onChangePersonNumber}
                        />
                    </div>

                    <div className="form-group">
                        <label>Person Start:  </label>
                        <DatePicker
                            selected={this.state.person_start}
                            onChange={this.onChangePersonStart}
                            selectsStart
                            startDate={this.state.person_start}
                            endDate={this.state.person_end}
                        />
                    </div>

                    <div className="form-group">
                        <label>Person End:  </label>
                        <DatePicker
                            selected={this.state.person_end}
                            onChange={this.onChangePersonEnd}
                            selectsEnd
                            endDate={this.state.person_end}
                            minDate={this.state.person_start}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}