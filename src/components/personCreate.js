import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

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
            person_start: Date.now(),
            person_end: ''
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
    }

    onChangePersonStart(e) {
        this.setState({
            person_start: e.target.value
        });
    }

    onChangePersonEnd(e) {
        this.setState({
            person_end: e.target.value
        });
    }

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
        axios.post('http://localhost:4000/person/add', obj)
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
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_start}
                            onChange={this.onChangePersonStart}
                        />
                    </div>

                    <div className="form-group">
                        <label>Person End:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_end}
                            onChange={this.onChangePersonEnd}
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